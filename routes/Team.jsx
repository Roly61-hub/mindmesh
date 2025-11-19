import React, { useState } from "react";

const Team = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAnalyze = () => {
    setResponse(`Compatibility analysis for "${question}": Balanced teams with complementary traits often perform well.`);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h2>Team Personality Analyzer</h2>
      <input
        type="text"
        placeholder="e.g. How will Alex (ENTJ) and Jamie (INFP) work together?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "80%", padding: 10, marginBottom: 10 }}
      />
      <button onClick={handleAnalyze}>Analyze</button>
      {response && <pre style={{ backgroundColor: "#f8f9fa", padding: 15 }}>{response}</pre>}
    </div>
  );
};

export default Team;