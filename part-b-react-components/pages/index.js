import WelcomeCard from '../components/WelcomeCard';
import Counter from '../components/Counter';
import StudentInfo from '../components/StudentInfo';

export default function Home() {
  return (

    <main style={{ padding: '20px' }}>
      <div style={{border: "2px solid #0B1D51", background: "#393E46"}}>
      <WelcomeCard name="Benideck" /> {/* calls WelcomeCard.jsx*/}
      </div>

      <div style={{border: "2px solid #0B1D51",
      padding: "20px",
      marginTop: "10px",
      borderRadius: "10px", 
      background: "#222831"}}>

      <Counter />{/* calls Counter.jsx*/}
       <StudentInfo />{/* calls StudentInfo.jsx*/}
       
      </div>

    </main>
  );
}
