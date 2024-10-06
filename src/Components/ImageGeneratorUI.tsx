import React, { useState, FormEvent } from "react";
import axios from "axios";

const ImageGeneratorUI: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post<{ image: string }>(
        "http://localhost:5000/generate-image",
        { input }
      );
      setImage(`data:image/png;base64,${result.data.image}`);
    } catch (error: any) {
      console.error("Error:", error);
      setImage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Generate an Image from Text</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe an image..."
          style={{
            width: "300px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          disabled={loading}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            backgroundColor: loading ? "#6c757d" : "#007BFF",
            color: "#fff",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Generate"}
        </button>
      </form>
      {image && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "5px",
            backgroundColor: "#f1f1f1",
            fontSize: "16px",
            maxWidth: "500px",
            wordWrap: "break-word",
          }}
        >
          <img src={image} alt="Generated" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default ImageGeneratorUI;
