import WelcomeCard from '../components/WelcomeCard';
import Counter from '../components/Counter';
import StudentInfo from '../components/StudentInfo';

export default function Home() {
  return (

    <main style={{ padding: '20px' }}>
      <WelcomeCard name="Benideck" /> {/* calls WelcomeCard.jsx*/}

      <div style={{border: "2px solid #0B1D51",
      padding: "20px",
      marginTop: "10px",
      borderRadius: "10px"}}>

      <Counter />{/* calls Counter.jsx*/}
       <StudentInfo />{/* calls StudentInfo.jsx*/}
       
      </div>
      
    </main>
  );
}
