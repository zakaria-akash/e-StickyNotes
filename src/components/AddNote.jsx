import React, { useState } from "react";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  return (
    <div>
      <form>
        <input
          //geting the inputs from title input field
          onChange={(e) => {
            const { name, value } = e.target;

            setNote((oldObjects) => {
              return {
                ...oldObjects,
                [name]: value
              };
            });
          }}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          //geting the inputs from title content field
          onChange={(e) => {
            const { name, value } = e.target;

            setNote((oldObjects) => {
              return {
                ...oldObjects,
                [name]: value
              };
            });
          }}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          // passing the inputs as a new note by the submission of Add button
          onClick={(e) => {
            props.onAdd(note);
            setNote({
              title: "",
              content: ""
            });
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNote;
