import { useEffect,useState } from "react";
import useSound from "use-sound";//for handling the sound
import Cravin from "../assets/Cravin  - Stileto  Kendyle Paige (128).mp3";//importing the mp3
import Pompeii from "../assets/Pompeii - Bastille (128).mp3";
import Christmas from "../assets/Christmas Lights - Zach Seabaugh (128).mp3";
import {AiFillPlayCircle,AiFillPauseCircle} from "react-icons/ai";// icons for play and pause
import {BiSkipNext, BiSkipPrevious} from "react-icons/bi"; // icons for next and previous
import {IconContext} from "react-icons"


function Player(){
    /* 
    isPlaying state for storing the current status of the player. 
    This will be helpful in conditional rendering the play/pause icon according the status of the player.
    */

    /* 
    useStste hook - const [state, setState] = useState(initialState);
    Call useState at the top level of your component to declare a state variable. 
    */
    const [isPlaying, setIsPlaying] = useState(false);
    const [currplaying,setcurrplaying] = useState();

    /* 
    initalizing the useSound with the audio, this will return
    play,pause,duration and sound method
    */

    const track =[
        {
         title:"Cravin",
         src:Cravin,
         artist:"Stileto",
         next_song:Pompeii,
         prev_song:"",
    },
    {
        title:"Pompeii",
        src:Pompeii,
        artist:"Bastille",
        next_song:Christmas,
        prev_song:Cravin,
   },
   {
    title:"Chirstmas",
    src:Christmas,
    artist:"Zach",
    next_song:"",
    prev_song:Pompeii,
}
]
 
    const [play, {pause}] = useSound(track[2].src)
    

    // a function for handling the play and pause methods
    const playingButton = () => {
        
        if(isPlaying){
            pause();
            setIsPlaying(false);
            
        }else{
            play();
            setIsPlaying(true);

        }
    };

    
   

    //returned UI Component
    return(
        <div className="component">
            <h2>Playing Now</h2>
            <img className="musicCover"
            src="https://picsum.photos/200/200"
            alt=""
            />
            <div>
                <h3 className="title">{track[2].title}</h3>
                <p className="subTitle">{track[2].artist}</p>
            </div>

            <div>
                <button className="playButton">
                     <IconContext.Provider value={{ size:"3em",color:"#27AE60"}} >
                        <BiSkipPrevious/>
                     </IconContext.Provider>
                </button>
                {!isPlaying ? (
                    <button className="playButton" onClick={playingButton}>
                        <IconContext.Provider value={{ size:"3em", color:"#27AE60"}}>
                            <AiFillPlayCircle/>
                        </IconContext.Provider>

                    </button>
                ):(
                    <button className="PlayButton" onClick={playingButton}>
                     <IconContext.Provider value={{ size:"3em", color:"#27AE60"}}>
                        <AiFillPauseCircle/>
                     </IconContext.Provider>
                    </button>
                )}
                <button className="playButton">
                     <IconContext.Provider value={{ size:"3em",color:"#27AE60"}} >
                        <BiSkipNext/>
                     </IconContext.Provider>
                </button>
            </div>
        </div>
    );

}

export default Player;
