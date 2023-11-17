import React, { useState } from "react";

export default function Todo(){

    const [Items,setItems] = useState(
        [
            {
                todoItem:"",
                complete:false
            },
        ]
    )

    const [todovalue,settodovalue] = useState()

    const handleSubmit = e =>{
        e.preventDefault() // avoids the page from refreshing everytimr the onSubmit is fired
        if(todovalue === ""){
            return ( 
                <div>
                    <h3>Pleace enter a task</h3>
                </div>
            )
        }
        createTodoitem(todovalue)
        settodovalue("")

    }

    const createTodoitem = (todoItem) =>{
       const newTodoitem = [...Items,{todoItem,complete:false}]
       setItems(newTodoitem);
    }

    
    


    return(
        <div className=" w-100 h-100 position-absolute d-flex align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center w-50 h-50 mx-auto  ">
        <div className=" bg-primary  m-2 pt-2 pb-2 pr-4 pl-4"> 
            <h2>My To-Do List </h2>
        </div>
        <div className="d-flex flex-column m-2 border border-primary p-4">
            {/* to do list items */}
            
            {Items.map((item) =>{
                   return (
                    <label>
                    <input type="Checkbox" value="{item.todoitem}"/>  {item.todoItem}
                    </label>
                   )
            })}
            
        </div>
        <div>
            {/* button */}
            <form onSubmit={handleSubmit}>
            <input className=" border border-primary rounded-top rounded-right rounded-left rounded-bottom m-2" placeholder="Add a New Task " 
            value={todovalue}
            onChange={(e) => settodovalue(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
            </button>
            </form>
        </div>
        </div>
        </div>
    )
    }