import { rainbow } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

function CodeBlock({ children }) {
  return (
    <div className="relative">
      <SyntaxHighlighter
        showLineNumbers
        style={rainbow}
        codeTagProps={{ style: { background: 'none' } }}
        language="javascript"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
