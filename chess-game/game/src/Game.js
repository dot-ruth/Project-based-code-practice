import { useState, useMemo, useCallback } from "react";
import {Chessboard} from "react-chessboard";
import {Chess} from "chess.js";
import CustomDialog from "./components/CustomDialog";


function Game({players, room ,orientation, cleanup }) {
    /* useMemo hook (hook-a javascript funtion that is used to isolate reusable parts )
       useMemo hook - a function that returns a memorized value so 
       in this instance it will return the cache value of the chess instance
       we use this because we don't want to create the chase instance everytime we re-render after a move
     */
    const chess = useMemo(()=> new Chess(), []);

    /*
     a fen variable for the FEN(Forsyth-Edwards Notation) state returned
     from the chess instance. FEN is a standard notation to describe the positions of a chess game.
    */
    const [fen, setFen] = useState(chess.fen());
    const [over, setOver] = useState("");


    //makeamove function

    /* a useCallback hook also returns a memorized callback
    takes in 2 arguments function and dependency

    difference between useCallback and useMemo
    useMemo : caches object creation
    useCallback: caches function definiton

    for this case the dependency is the chess instance and the funtion
    is the make a move function
     */
    const makeAMove = useCallback(
        (move)=>{

            /* it is wrapped in a try catch block because the chess.move() function returns an error
            for an illegal move and we need to catch that error as null and later handle it in the onDrop function
            
            */
            try{
                const result = chess.move(move);// the .move() validate the move update the chess instance
                setFen(chess.fen()); // set the postion of the piece according to the chess instance
                // this will trigger the re-render and update the chessboard


                // checking if the move mode resulted in game-over
                if(chess.isGameOver()){
                    if(chess.isCheckmate()){ 
                        setOver(
                            `Checkmate! ${chess.turn() === "w" ? "black" : "white"} Wins! `
                        );
                    }else if (chess.isDraw()){
                        setOver("Draw")
                    }else{
                        setOver("Game Over")
                    }
            
                }
                return result;
            }catch(e){
                return null;
            }
        },[chess]
    );


    // onDrop function
    function onDrop(sourceSquare, targetSquare){
        const moveDate = {
            from:sourceSquare,/* the initial piece position */
            to:targetSquare,
            color:chess.turn(), // returns the color of the current player either black or white
        };

        const move = makeAMove(moveDate); // returns a boolean value checking is the move is valid or not

        // for the illegal moves
        if(move === null ) return false;

        return true;

    }

    // returned game component

    //The onPieceDrop function prop is called every time a piece is moved
    return (
        <>
        <div className="board">
            <Chessboard position={fen} onPieceDrop={onDrop}/>
        </div>

        {/* 
        dialog component that will be rendered when the state over is truthy. 
        over will contain a text that describes the reason the game is over.
         This may be a checkmate or a stalemate/draw.
        */}

        <CustomDialog
        open={Boolean(over)}
        title={over}
        contentText={over}
        handleContinue={()=>{
            setOver("")
        }}
        />
        </>
    )
}

export default Game;