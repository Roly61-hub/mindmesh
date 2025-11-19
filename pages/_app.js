
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const pass = prompt("Enter password to access MindMesh:");
    if (pass === "mindmesh2025") {
      setAuthenticated(true);
    }
  }, []);

  if (!authenticated) return <div style={{ textAlign: 'center', marginTop: '20%' }}>Access denied.</div>;

  return <Component {...pageProps} />;
}

export default MyApp;
