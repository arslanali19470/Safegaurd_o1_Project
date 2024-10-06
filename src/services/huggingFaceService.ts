import axios from "axios";

export const generateText = async (input) => {
  const response = await axios.post("http://localhost:5000/generate-text", {
    input,
  });
  return response.data.generated_text || "No response generated.";
};
