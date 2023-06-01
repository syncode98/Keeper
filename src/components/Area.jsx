import React from "react"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function Area(props){

    const [isExpanded,setExpanded] = React.useState(false)
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
    function handleClick(){
        setExpanded(true);
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
            <form className="create-note">
                {isExpanded && (<input name="title" onChange={handleChange} value ={note.title} placeholder="Title"/>)}
                <textarea onClick={handleClick} name="content" onChange={handleChange} value = {note.content} placeholder="Take a note..." rows={isExpanded?"3":"1"} />
                <Zoom in={isExpanded}>
                <Fab onClick={submitNote}><AddIcon/></Fab>
                </Zoom>
            </form>

        </div>
    
}

export default Area;