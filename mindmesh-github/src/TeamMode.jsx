import React, { useState } from "react";

const pageStyle = {
  minHeight: "100vh",
  margin: 0,
  padding: "3rem 1.5rem",
  background: "linear-gradient(135deg, #EEF2FF, #F9FAFB)",
  fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, sans-serif",
};

const containerStyle = {
  maxWidth: "960px",
  margin: "0 auto",
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: "24px",
  padding: "2.5rem 2rem",
  boxShadow:
    "0 20px 45px rgba(15, 23, 42, 0.12), 0 0 1px rgba(15, 23, 42, 0.04)",
};

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.25rem 0.75rem",
  borderRadius: "999px",
  background: "#EEF2FF",
  color: "#4F46E5",
  fontSize: "0.8rem",
  fontWeight: 600,
  marginBottom: "1rem",
};

const headingStyle = {
  fontSize: "2.4rem",
  lineHeight: 1.1,
  fontWeight: 700,
  color: "#111827",
  marginBottom: "0.85rem",
};

const subheadingStyle = {
  fontSize: "1rem",
  color: "#4B5563",
  marginBottom: "1.5rem",
  maxWidth: "34rem",
};

const layoutStyle = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
  gap: "2rem",
  alignItems: "flex-start",
};

const labelStyle = {
  fontSize: "0.8rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#6B7280",
  marginBottom: "0.4rem",
};

const textareaStyle = {
  width: "100%",
  minHeight: "130px",
  borderRadius: "14px",
  border: "1px solid #E5E7EB",
  padding: "0.75rem 0.9rem",
  fontSize: "0.95rem",
  resize: "vertical",
  outline: "none",
};

const buttonRowStyle = {
  marginTop: "0.9rem",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
};

const primaryButtonStyle = {
  border: "none",
  borderRadius: "999px",
  padding: "0.7rem 1.4rem",
  background:
    "linear-gradient(135deg, #4F46E5, #6366F1)",
  color: "#ffffff",
  fontWeight: 600,
  fontSize: "0.9rem",
  cursor: "pointer",
};

const helperTextStyle = {
  fontSize: "0.8rem",
  color: "#6B7280",
};

const insightCardStyle = {
  marginTop: "1.25rem",
  padding: "0.9rem 0.9rem 0.95rem",
  borderRadius: "14px",
  background: "#F9FAFB",
  border: "1px solid #E5E7EB",
  fontSize: "0.9rem",
  color: "#111827",
  whiteSpace: "pre-wrap",
};

const rightCardStyle = {
  borderRadius: "18px",
  background: "radial-gradient(circle at top, #EEF2FF 0, #ffffff 60%)",
  border: "1px solid #E5E7EB",
  padding: "1.3rem 1.2rem",
};

const rightTitleStyle = {
  fontSize: "0.85rem",
  fontWeight: 600,
  color: "#4B5563",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "0.6rem",
};

const teamListStyle = {
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "grid",
  gap: "0.5rem",
};

const teamItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.4rem 0.65rem",
  borderRadius: "10px",
  background: "#ffffff",
};

const pillStyle = {
  fontSize: "0.75rem",
  padding: "0.1rem 0.55rem",
  borderRadius: "999px",
  background: "#EEF2FF",
  color: "#4F46E5",
  fontWeight: 600,
};

const footerStyle = {
  marginTop: "2rem",
  fontSize: "0.78rem",
  color: "#6B7280",
};

export const TeamMode = () => {
  const [compatibilityQuery, setCompatibilityQuery] = useState("");
  const [compatibilityAnswer, setCompatibilityAnswer] = useState("");

  const handleCompatibilityCheck = (event) => {
    event.preventDefault();

    const demoMessage =
      "This is a demo preview of MindMesh.\n\n" +
      "In the live product, MindMesh will:\n" +
      "• Ingest personality data for each team member (MBTI, DISC, FIRO-B etc.)\n" +
      "• Map communication styles, decision-making preferences, and stress triggers\n" +
      "• Surface compatibility scores and likely friction points\n" +
      "• Provide tailored talking points and coaching prompts for the leader.\n\n" +
      "Use this preview to give investors or test users a sense of the experience.";

    setCompatibilityAnswer(demoMessage);
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={badgeStyle}>
            <span>β</span>
            <span>MindMesh preview</span>
          </div>

          <h1 style={headingStyle}>Turn personality data into team insight.</h1>
          <p style={subheadingStyle}>
            MindMesh analyzes MBTI and other personality frameworks to show how
            your people click, clash, and collaborate — so leaders can build
            healthier, higher-performing teams.
          </p>

          <div style={layoutStyle}>
            {/* Left side – mini “prompt → insight” demo */}
            <form onSubmit={handleCompatibilityCheck}>
              <div>
                <div style={labelStyle}>Try a quick compatibility question</div>
                <textarea
                  style={textareaStyle}
                  placeholder="e.g. “How will an ENTJ founder and INFP product lead work together?”"
                  value={compatibilityQuery}
                  onChange={(e) => setCompatibilityQuery(e.target.value)}
                />
              </div>

              <div style={buttonRowStyle}>
                <button type="submit" style={primaryButtonStyle}>
                  Generate sample insight
                </button>
                <span style={helperTextStyle}>
                  This is a demo – no real personality data is processed yet.
                </span>
              </div>

              {compatibilityAnswer && (
                <div style={insightCardStyle}>{compatibilityAnswer}</div>
              )}
            </form>

            {/* Right side – sample team snapshot */}
            <aside style={rightCardStyle}>
              <div style={rightTitleStyle}>Example team snapshot</div>
              <ul style={teamListStyle}>
                <li style={teamItemStyle}>
                  <span>Alex – CEO</span>
                  <span style={pillStyle}>ENTJ</span>
                </li>
                <li style={teamItemStyle}>
                  <span>Jamie – Product</span>
                  <span style={pillStyle}>INFP</span>
                </li>
                <li style={teamItemStyle}>
                  <span>Riley – Ops</span>
                  <span style={pillStyle}>ISTJ</span>
                </li>
                <li style={teamItemStyle}>
                  <span>Sam – Growth</span>
                  <span style={pillStyle}>ENFP</span>
                </li>
              </ul>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#4B5563",
                  marginTop: "0.9rem",
                }}
              >
                MindMesh highlights natural drivers, blind-spots, and likely
                friction points across your real team, then suggests concrete
                actions for the leader.
              </p>
            </aside>
          </div>

          <div style={footerStyle}>
            Interested in early access? Reach out at{" "}
            <strong>garyrrohloff@gmail.com</strong> and we’ll onboard your team
            into the private beta.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMode;
