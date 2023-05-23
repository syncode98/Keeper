import React from "react"


function Area(props){
    const[note,setNote] = React.useState({
        title:"",
        content:""
    })
    function submitNote(event){
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
          });
        //Prevents resetting of page
        event.preventDefault();
    }
    function handleChange(event){
        const{name,value}= event.target

        setNote(prevNote =>{
            return {
                ...prevNote,[name]:value
            }
        })
    }
    return <div>
            <form>
                <input name="title" onChange={handleChange} value ={note.title} placeholder="Title"/>
                <textarea name="content" onChange={handleChange} value = {note.content} placeholder="Take a note..." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>

        </div>
    
}

export default Area;