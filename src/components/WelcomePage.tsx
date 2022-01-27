import axios from "axios";
import { Link } from "react-router-dom";
interface WelcomePageProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    
    // getResources: (endpoint: string) => void;
  }
export default function WelcomePage({username, setUsername}: WelcomePageProps) {
    const handleAddUsername = async (username: string) => {
        console.log(username);
        await axios.post(`http://localhost:4000/username`, {
          userName: username,
        });
      };
    return(

    <section className="App">
        <header className="App-header" data-testid={"header"}>
        Welcome to the Sherlock Holmes Immersive Internet Experience
        </header>
        <h2>What is your name, traveller?</h2>
         <br/>
        <input
          placeholder="Pick a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
            <br/>
        <button onClick={() => handleAddUsername(username)}>
            <Link to="/home-page">
          Next</Link>
        </button>
    
    </section>)
}