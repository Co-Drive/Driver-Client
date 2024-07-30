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

export const LANG_LIST = {
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
