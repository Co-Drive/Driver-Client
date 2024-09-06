import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LANG_LIST } from '../../constants/CodeEditor/language';
import { CodeEditorProps } from '../../types/Solve/solveTypes';

const CodeEditor = ({
  isReadOnly,
  stringId,
  code,
  handleChangeCode,
}: CodeEditorProps) => {
  const LANGUAGE = sessionStorage.getItem('language');
  const [changedLang, setChangedLang] = useState('python');

  const changeLanguage = () => {
    switch (LANGUAGE) {
      case 'Python':
        setChangedLang('python');
        break;
      case 'Java':
        setChangedLang('java');
        break;
      case 'JavaScript':
        setChangedLang('javascript');
        break;
      case 'C++':
        setChangedLang('cpp');
        break;
      case 'C':
        setChangedLang('c');
        break;
      case 'C#':
        setChangedLang('csharp');
        break;
      case 'Kotlin':
        setChangedLang('kotlin');
        break;
      case 'Go':
        setChangedLang('go');
        break;
      case 'Ruby':
        setChangedLang('ruby');
        break;
      case 'Swift':
        setChangedLang('swift');
        break;
      case 'Scala':
        setChangedLang('scala');
        break;
      default:
        setChangedLang('python');
        break;
    }
  };

  // extends에 항상 배열이 들어가도록 배열을 반환하는 함수
  const getExtensions = (language: keyof typeof LANG_LIST) => {
    // langSupport: 함수 반환
    const langSupport = LANG_LIST[language];
    // extension에 EditorView.lineWrapping을 추가해서 CodeMirror가 줄바꿈을 지원하도록 함
    const extension = [langSupport && langSupport(), EditorView.lineWrapping];

    return extension;
  };

  const extensions = getExtensions(changedLang as keyof typeof LANG_LIST);

  useEffect(() => {
    changeLanguage();
  }, []);

  return (
    <CodeMirrorContainer className="code-mirror">
      <CodeMirror
        id={stringId}
        value={code}
        readOnly={isReadOnly}
        editable={!isReadOnly}
        onChange={(newCode) => {
          if (!isReadOnly && handleChangeCode)
            handleChangeCode({ newCode, stringId });
        }}
        extensions={extensions}
        theme={dracula}
        height="38.2rem"
      />
    </CodeMirrorContainer>
  );
};

export default CodeEditor;

const CodeMirrorContainer = styled.article`
  overflow: hidden auto;

  min-width: 92.6rem;

  width: 100%;
  height: 38.2rem;
  margin-bottom: 1.8rem;

  border-radius: 0.8rem;

  .cm-editor {
    background-color: #23262e;
  }

  /* 전체 코드 스페이스 */
  .cm-scroller {
    word-break: break-all;

    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`;
