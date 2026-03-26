import { useState } from "react";
import Upload from "./components/Upload";
import TextDisplay from "./components/TextDisplay";
import Filters from "./components/Filters";
import Legend from "./components/Legend";


function App() {
  const [tokens, setTokens] = useState([]);
  const [activePOS, setActivePOS] = useState("ALL");

  return (
    <div
      style={{
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "40px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "800px",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          OCR POS Highlighter
        </h1>
  
        <Upload setTokens={setTokens} />
  
        <Filters activePOS={activePOS} setActivePOS={setActivePOS} />  
        <TextDisplay tokens={tokens} activePOS={activePOS} />
  
        <Legend />
      </div>
    </div>
  );
}

export default App;