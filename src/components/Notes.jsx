import React, { useState ,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import SignUp from "./SignUp";
import { db } from "../firebase";
import {collection, addDoc, query, orderBy, onSnapshot} from 'firebase/firestore'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
function Notes (){
    const [note, setNote] = useState([]);
    async function addNote(newNote,e) {
   try {
     await addDoc(collection(db, 'tasks'), {
       title: newNote.title,
       content: newNote.content,
     })
   } catch (err) {
     alert(err)
   }

  }
 async function deleteNote(id) {
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }
  useEffect(() => {
    const q = query(collection(db, 'tasks'))
    onSnapshot(q, (querySnapshot) => {
      setNote(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((singleNote, index) => {
        return (
          <Note
            key={singleNote.id}
            id={singleNote.id}
            title={singleNote.data.title}
            content={singleNote.data.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default Notes;