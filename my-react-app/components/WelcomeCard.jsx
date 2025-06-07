export default function WelcomeCard({ name }) {
  return (
    <div style={{

      padding: "20px",
      marginBottom: "20px",
      textAlign: "center",
      border: "2px solid #0070f3",
      borderRadius: "10px"

    }}>
      <h2>bienvenido, {name}!</h2>
      <p>We're really pleased and delighted to have you here. This is your first react activity.</p>
    </div>
  );
}
