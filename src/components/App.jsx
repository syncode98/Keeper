import React from "react";
import Header from "./Header"
import Note from "./Note";
import Footer from "./Footer";
import Area from "./Area"

// import Notes from "../Notes"

// function createNotes(note){
//     return <Note title={note.title} content={note.content}/>
// }
function App(){
    const [notes,setNotes]=React.useState([])
    function addNote(note){
        setNotes(prevNotes=>{
            return [...prevNotes,note]
        })
    }
    function deleteNote(id){
        
        setNotes(prevNotes=>{
            return prevNotes.filter((item,index)=>{
                
                return index !== id;
            } )
        })

    }
    return <div>
    
    <Header/>
    {/* {Notes.map(createNotes)} */}
    
    <Area onAdd={addNote}/>
    {notes.map((noteItem,index)=>{
        
        return <Note key={index} id={index} onDelete={deleteNote} title={noteItem.title} content={noteItem.content}/>
    })}
    {/* {Notes.map(note => <Note title={note.title} content={note.content} />)} */}
    <Footer/>
    </div>
}
export default App;