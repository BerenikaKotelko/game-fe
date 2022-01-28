import axios from "axios";
import {useState} from "react";
import { Link } from "react-router-dom";
interface WelcomePageProps {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
  }
export default function WelcomePage({username, setUsername}: WelcomePageProps) {
    const [duplicate, setDuplicate] = useState<string>("")
    const handleAddUsername = async (username: string) => {
        try{
        console.log(username);
        await axios.post(`http://localhost:4000/username`, {
          userName: username,
        })
        
        setDuplicate("unique username")
    }
        catch(e){
            
                setDuplicate("duplicate")
                console.log(duplicate)
          }
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
        {/* {username !== "" ? (
        <button onClick={() => {if (username !== ""){handleAddUsername(username)}}}>
            <Link  to={duplicate === false?(
           "/home-page"):("/")}>
          Next</Link>
        </button>):("")} */}
         <button onClick={() => {if (username !== ""){handleAddUsername(username)}}}>
             Sumbit username
         </button>
         {duplicate === "unique username"?(
             <div>
            <h2>Welcome {username}!</h2>
            <button><Link to="/home-page">Proceed with the adventure</Link></button>
            </div>
            ):("")}
            {duplicate === "duplicate"?(
              <h2>The username "{username}" is already taken! Please pick another one.</h2>
          ):("")}
    
    </section>)
}