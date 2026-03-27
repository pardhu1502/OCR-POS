import { useState } from "react";

const Upload = ({ setTokens }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const res = await fetch("https://ocr-pos.onrender.com/api/process", {
        method: "POST",
        body: formData,
      });

      console.log("STATUS:", res.status);

      const text = await res.text();
      console.log("RAW RESPONSE:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.error("Not JSON response");
        setTokens([]);
        return;
      }

      console.log("PARSED DATA:", data);

      if (Array.isArray(data)) {
        setTokens(data);
      } else if (data.tokens) {
        setTokens(data.tokens);
      } else {
        setTokens([]);
      }

    } catch (err) {
      console.error("Upload Error:", err);
      setTokens([]); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button
        onClick={handleUpload}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#3498db",
          color: "white",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing..." : "Upload"}
      </button>
    </div>
  );
};

export default Upload;