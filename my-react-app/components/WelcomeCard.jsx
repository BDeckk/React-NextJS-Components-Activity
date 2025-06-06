export default function WelcomeCard({ name }) {
  return (
    <div style={{
      border: "2px solid #0070f3",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px",
      textAlign: "center"
    }}>
      <h2>Welcome, {name}!</h2>
      <p>We’re glad to have you here.</p>
    </div>
  );
}
