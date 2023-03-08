import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

function CodeBlock({ children }) {
  return (
    <div className="relative">
      <SyntaxHighlighter
        showLineNumbers
        style={a11yDark}
        language="javascript"
        customStyle={{ fontSize: '1em' }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
