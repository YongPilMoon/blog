import { rainbow } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target);
      } catch (error) {
        alert(`copy failed ${error}`);
      }
    }
  };
  return (
    <button
      className="absolute right-0.5 top-0.5 rounded-lg bg-white dark:text-gray-800"
      onClick={handleCopy}
    >
      copy
    </button>
  );
};
function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers style={rainbow}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
