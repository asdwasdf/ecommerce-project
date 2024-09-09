const HighlightedText = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, index) =>
          regex.test(part) ? (
            <span key={index} style={{ color: "blue" }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
    </span>
  );
};

export default HighlightedText;
