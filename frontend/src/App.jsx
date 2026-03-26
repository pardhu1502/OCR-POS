import { useState } from "react";
import Upload from "./components/Upload";
import Filters from "./components/Filters";
import TextDisplay from "./components/TextDisplay";
import Legend from "./components/Legend"; // ✅ ADD THIS

function App() {
  const [tokens, setTokens] = useState([]);
  const [activePOS, setActivePOS] = useState("ALL");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>OCR POS Highlighter</h1>

      <Upload setTokens={setTokens} />
      <Filters activePOS={activePOS} setActivePOS={setActivePOS} />
      <TextDisplay tokens={tokens} activePOS={activePOS} />

      <Legend /> 
    </div>
  );
}

export default App;