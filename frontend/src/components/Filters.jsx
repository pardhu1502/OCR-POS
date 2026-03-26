const posList = ["ALL", "NOUN", "VERB", "ADJ", "ADV", "PRON", "DET", "CONJ", "ADP"];

const Filters = ({ activePOS, setActivePOS }) => {
  const handleClick = (pos) => {
    if (activePOS === pos) {
      setActivePOS("ALL"); // toggle off
    } else {
      setActivePOS(pos);
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      {posList.map((pos) => {
        const isActive = activePOS === pos;

        return (
          <button
            key={pos}
            onClick={() => handleClick(pos)}
            style={{
              margin: "5px",
              padding: "8px 14px",
              borderRadius: "20px",
              border: isActive ? "none" : "1px solid #ddd",
              backgroundColor: isActive ? "#3498db" : "#f8f9fa",
              color: isActive ? "white" : "#333",
              cursor: "pointer",
              fontWeight: isActive ? "bold" : "normal",
            }}
          >
            {pos}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;