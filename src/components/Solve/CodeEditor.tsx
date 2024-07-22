import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { StreamLanguage } from '@codemirror/language';
import { c, kotlin, scala } from '@codemirror/legacy-modes/mode/clike';
import { go } from '@codemirror/legacy-modes/mode/go';
import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { swift } from '@codemirror/legacy-modes/mode/swift';
import { csharp } from '@replit/codemirror-lang-csharp';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import styled from 'styled-components';
import { CodeEditorProps } from '../../types/Solve/solveTypes';

const CodeEditor = ({ stringId, code, handleChangeCode }: CodeEditorProps) => {
  // 상수 파일로 분리할 예정
  const LANG_LIST = {
    c: () => StreamLanguage.define(c),
    csharp: () => csharp(),
    scala: () => StreamLanguage.define(scala),
    kotlin: () => StreamLanguage.define(kotlin),
    java,
    javascript,
    python,
    cpp,
    go: () => StreamLanguage.define(go),
    swift: () => StreamLanguage.define(swift),
    ruby: () => StreamLanguage.define(ruby),
  };

  const LANGUAGE = sessionStorage.getItem('language') as keyof typeof LANG_LIST;
  if (!LANGUAGE) {
    // 추후 주 언어를 선택해달라는 문구 + 마이페이지로 네비게이트 시키기
    return;
  }

  // extends에 항상 배열이 들어가도록 배열을 반환하는 함수
  const getExtensions = (language: keyof typeof LANG_LIST) => {
    // langSupport: 함수 반환
    const langSupport = LANG_LIST[language];
    // extension에 EditorView.lineWrapping을 추가해서 CodeMirror가 줄바꿈을 지원하도록 함
    const extension = [langSupport && langSupport(), EditorView.lineWrapping];

    return extension;
  };

  const extensions = getExtensions(LANGUAGE);

  return (
    <CodeMirrorWrapper className="code-mirror">
      <CodeMirror
        id={stringId}
        value={code}
        onChange={(newCode) => handleChangeCode({ newCode, stringId })}
        extensions={extensions}
        theme={dracula}
        height="38.2rem"
      />
    </CodeMirrorWrapper>
  );
};

export default CodeEditor;

const CodeMirrorWrapper = styled.article`
  overflow: hidden auto;

  width: 92.6rem;
  height: 38.2rem;

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
