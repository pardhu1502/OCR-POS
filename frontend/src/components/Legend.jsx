const posColors = {
    NOUN: "#3498db",
    VERB: "#e74c3c",
    ADJ: "#2ecc71",
    ADV: "#9b59b6",
    PRON: "#1abc9c",
    CONJ: "#7f8c8d",
    DET: "#f39c12"
  };
  
  const Legend = () => {
    return (
        <div style={{ marginTop: "25px", textAlign: "center" }}>
        <h3>Legend</h3>
      
        <div style={{ marginTop: "10px" }}>
          {Object.entries(posColors).map(([pos, color]) => (
            <span
              key={pos}
              style={{
                backgroundColor: color,
                color: "white",
                padding: "6px 10px",
                borderRadius: "6px",
                margin: "5px",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              {pos}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Legend;