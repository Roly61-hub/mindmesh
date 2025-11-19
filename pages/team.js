
import { useState } from 'react';

export default function Team() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const analyze = () => {
    if (!input) return;
    setResult("Compatibility analysis for: \"" + input + "\nBalanced teams with complementary traits often perform best.");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ color: '#5a4bff' }}>MindMesh</h1>
      <p>Analyze team personality compatibility using MBTI and simulated traits.</p>
      <input
        type="text"
        value={input}
        placeholder="e.g. How will Alex (ENTJ) and Jamie (INFP) work together?"
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '100%', padding: 10, fontSize: 16, margin: '20px 0' }}
      />
      <button onClick={analyze} style={{ padding: '10px 20px', fontSize: 16 }}>Get Insight</button>
      {result && <pre style={{ background: '#f5f5f5', marginTop: 20, padding: 20 }}>{result}</pre>}
    </div>
  );
}
