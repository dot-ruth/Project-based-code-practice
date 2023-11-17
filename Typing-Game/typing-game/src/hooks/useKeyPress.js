import {useState,useEffect} from 'react'

//using a callback funtion to avoid re-rendering
export const useKeyPress = callback => {

    // a variable to store the state of the presses key
   const [keypressed,setkeypressed] = useState(); 
  
   useEffect(()=> {

    // a handler function for when the key is pressed down
    const downHandler = ({key}) =>{
        if(keypressed !== key && key.length === 1){
            setkeypressed(key);
            callback && callback(key);
        }
    };

    //handler when the key is released
    const uphandler = () => {
        setkeypressed(null)
    };
    

    // registering the handlers in the browser window
    window.addEventListener('keydown',downHandler);
    window.addEventListener('keyup',uphandler)

    return ()=> {
        window.removeEventListener('keydown',downHandler)
        window.removeEventListener('keyup',uphandler)
    }
   });

   return keypressed;
};

