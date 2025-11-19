
import React, { useState } from 'react';

const TeamMode = () => {
  const [compatibilityQuery, setCompatibilityQuery] = useState('');
  const [compatibilityAnswer, setCompatibilityAnswer] = useState('');

  const handleCompatibilityCheck = () => {
    if (!compatibilityQuery.trim()) return;
    const dummyResponse = `Compatibility analysis for: "${compatibilityQuery}"\n\nBalanced teams with complementary traits (like introvert + extrovert) often perform best with structured communication.`;
    setCompatibilityAnswer(dummyResponse);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#4F46E5' }}>MindMesh</h1>
      <p>Analyze team personality compatibility using MBTI and simulated traits.</p>
      <input
        value={compatibilityQuery}
        onChange={(e) => setCompatibilityQuery(e.target.value)}
        placeholder="e.g. How will Alex (ENTJ) and Jamie (INFP) work together?"
        style={{ width: '100%', padding: '0.5rem', marginTop: '1rem' }}
      />
      <button onClick={handleCompatibilityCheck} style={{ marginTop: '0.5rem' }}>
        Get Insight
      </button>
      {compatibilityAnswer && (
        <pre style={{ marginTop: '1rem', background: '#f1f5f9', padding: '1rem' }}>
          {compatibilityAnswer}
        </pre>
      )}
    </div>
  );
};

export { TeamMode };
export default TeanMode;
