import React,{useState} from 'react'
import { db } from "./firebase";
function Admin() {
    const [textareaValue,settextareaValue]=useState("");

    const handleSubmit = async (event)=> {
        console.log(textareaValue)
        db.collection('corder')
        .doc('helo')
        .collection('corder1')
        .doc('3')
        .set({
            description:textareaValue
        })

    }
    return (
        <div>
            <form>
                <textarea id="myTextArea" rows="3" cols="20"  placeholder="Description..." onChange={(event)=>settextareaValue(event.target.value)}></textarea>
                <button onClick={handleSubmit}>clickme</button>
            </form>
        </div>
    )
}

export default Admin
