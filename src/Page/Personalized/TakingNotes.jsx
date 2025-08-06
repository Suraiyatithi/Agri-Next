import { useState, useEffect } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const AddNote = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [description, setDescription] = useState('');
  const [customDateTime, setCustomDateTime] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = async () => {
    const note = {
      email: user.email,
      description,
      date: customDateTime || new Date().toISOString(),
    };

    const res = await axiosSecure.post('/notes', note);
    if (res.data.insertedId) {
      setDescription('');
      setCustomDateTime('');
      fetchNotes(); // Refresh notes
    }
  };

  const fetchNotes = async () => {
    const res = await axiosSecure.get(`/notes/${user.email}`);
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, [user.email]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add a Note</h2>

      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={4}
        placeholder="Write your note here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="datetime-local"
        className="p-2 border rounded mb-2 w-full"
        value={customDateTime}
        onChange={(e) => setCustomDateTime(e.target.value)}
      />

      <button onClick={handleAddNote} className="bg-lime-800 text-white px-4 py-2 rounded hover:bg-green-700">
        Add Note
      </button>

      <h3 className="text-xl text-lime-700 font-semibold mt-6 mb-2">Your Notes</h3>
      <div className="overflow-x-auto">
        <table className="table w-full border text-center">
          <thead className="bg-green-200">
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, idx) => (
              <tr key={note._id}>
                <td>{idx + 1}</td>
                <td>{note.description}</td>
                <td>{new Date(note.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddNote;
