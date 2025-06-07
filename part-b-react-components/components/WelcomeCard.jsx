export default function WelcomeCard({ name }) {
  return (
    <div style={{

      padding: "20px",
      marginBottom: "20px",
      textAlign: "center",
      border: "2px solid #273F4F",
      borderRadius: "10px"

    }}>
      {/* simple greeting in spanish */}
      <h2>Bienvenido, {name}!</h2>
      <p>"Bienvenido" is "welcome" in spanish. We're really pleased and delighted to have you here. This is your first react activity.</p>
    </div>
  );
}
