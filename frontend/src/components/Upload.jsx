import { useState } from "react";
import axios from "axios";

const Upload = ({ setTokens }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Select an image");

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const res = await axios.post(
        import.meta.env.VITE_API_URL + "/api/process",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data.tokens);
      setTokens(res.data.tokens);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginBottom: "10px" }}
      />
  
      <br />
  
      <button
        onClick={handleUpload}
        style={{
          padding: "10px 20px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {loading ? "Processing..." : "Upload"}
      </button>
    </div>
  );
};

export default Upload;