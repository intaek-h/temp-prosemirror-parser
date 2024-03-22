import {createHtmlParserInNodeJs} from './integration-editors/prosemirror/utils/parsers.js'
import {
  Strong,
  Del,
  Em,
  Heading,
  HorizontalRule,
  Underline,
  BlockQuote,
  Code,
  CodeBlock,
  Video,
  Indicator,
  RemoteMenu,
  File,
  Image,
  TextAlign,
  Link,
  TextColor,
  TextBackground,
  Iframe,
  IframeTooltip,
  FontSize,
  Poll,
  Emoji,
  HtmlInsert,
  CustomTemplate,
  TableExtensions,
  ListItem,
  BulletList,
  OrderedList,
  AutoSave,
  Doc, Text, Paragraph, HardBreak
} from './integration-editors/prosemirror/extensions'
import { JSDOM } from 'jsdom'

const extensions = [
  Strong,
  Del,
  Em,
  Heading,
  HorizontalRule,
  Underline,
  BlockQuote,
  Code,
  CodeBlock,
  Video,
  Indicator,
  RemoteMenu,
  File,
  Image,
  TextAlign,
  Link,
  TextColor,
  TextBackground,
  Iframe,
  IframeTooltip,
  FontSize,
  Poll,
  Emoji,
  HtmlInsert,
  CustomTemplate,
  TableExtensions,
  ListItem,
  BulletList,
  OrderedList,
  AutoSave,
  Doc, Text, Paragraph, HardBreak
]

const dummy = `<p class="integration-editor__p">안녕하세요~!s</p>
<p class="integration-editor__p">sda</p>
<p class="integration-editor__p">fdsfsd</p>
<h1 class="integration-editor__heading">as<span style="background-color: var(--editor-text-bg-cyan, #e8eaf6); border: 2px solid var(--editor-text-bg-cyan, #e8eaf6);" class="integration-editor__background-color">dasd</span>as;dk</h1>
<p class="integration-editor__p">aslkasdkalsd</p>
<p class="integration-editor__p"></p>
<p class="integration-editor__p">sdfsdafsdafsdf</p>`

const dom = new JSDOM(dummy)

const parse = createHtmlParserInNodeJs(extensions)

const result = parse(dom.window.document)

console.log(result)
