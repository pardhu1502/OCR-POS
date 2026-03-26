const posColors = {
  NOUN: "#3498db",
  VERB: "#e74c3c",
  ADJ: "#2ecc71",
  ADV: "#9b59b6",
  PRON: "#1abc9c",
  DET: "#f39c12",
  CONJ: "#34495e",
  ADP: "#7f8c8d",
};

const TextDisplay = ({ tokens, activePOS }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        lineHeight: "2.5",
        border: "1px solid #eee",
        padding: "15px",
        borderRadius: "10px",
        backgroundColor: "#ffffff",
      }}
    >
      {tokens.map((token, index) => {
        const isActive =
          activePOS === "ALL" || token.pos === activePOS;

        return (
          <span
            key={index}
            title={`POS: ${token.pos}`}
            style={{
              backgroundColor: isActive
                ? posColors[token.pos] || "#ccc"
                : "#ffffff",
              color: isActive ? "white" : "#bbb",
              padding: "5px 10px",
              borderRadius: "8px",
              marginRight: "6px",
              display: "inline-block",
              fontSize: "14px",
              transition: "0.2s",
            }}
          >
            {token.word}
          </span>
        );
      })}
    </div>
  );
};

export default TextDisplay;