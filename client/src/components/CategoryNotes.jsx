import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotesCard from "./NotesCard";

const CategoryNotes = () => {
  const { mood } = useParams();
  const decodedMood = decodeURIComponent(mood);

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/notes/category/${encodeURIComponent(decodedMood)}`,
        { withCredentials: true }
      );

      setNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [mood]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">{decodedMood} Notes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {notes.map((note) => (
          <NotesCard
            key={note.id}
            date={new Date(note.created_at).toDateString()}
            title={note.title}
            description={note.content}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryNotes;