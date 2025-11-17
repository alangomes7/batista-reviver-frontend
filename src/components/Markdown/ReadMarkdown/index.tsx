import ReactMarkdown from "react-markdown";

/**
 * A component that safely renders Markdown text as HTML.
 * @param {object} props
 * @param {string} props.markdownText
 *
 */
function ReadMarkdown(markdownText: string) {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  );
}

export default ReadMarkdown;
