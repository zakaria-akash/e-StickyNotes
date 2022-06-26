import React, { useState } from "react";
import EntryCard from "./EntryCard";
import AddNote from "./AddNote";
import SampleNotes from "../SampleNotes";

function NotesManage() {
  const [notesArray, setNotesArray] = useState(SampleNotes);
  // function addNewNote(newNote) {
  //   console.log(newNote);
  //   setNotesArray((olderNotes) => [...olderNotes, newNote]);
  // }
  // function deleteANote(id) {
  //   console.log("one item has been deleted!");
  //   setNotesArray((olderNotes) => {
  //     return olderNotes.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }
  return (
    <div>
      <AddNote
        //storing a new note to the noteArray to display
        onAdd={(newNote) => {
          console.log(newNote);
          setNotesArray((olderNotes) => [...olderNotes, newNote]);
        }}
      />
      {notesArray.map((item, index) => (
        <EntryCard
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          //deleting a note from notesArray
          onDelete={(id) => {
            console.log("one item has been deleted!");
            setNotesArray((olderNotes) => {
              return olderNotes.filter((item, index) => {
                return index !== id;
              });
            });
          }}
        />
      ))}
    </div>
  );
}

export default NotesManage;
