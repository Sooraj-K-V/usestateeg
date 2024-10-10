import { useState } from "react";
import "./App.css";
import ProCard from "./profileCard.jsx";

function App() {
  const [name, setName] = useState("");
  const [about, setabout] = useState("");
  
  // Instead of storing JSX components, store data
  const [procards, setProcards] = useState([]);

  const addValues = (event) => {
    event.preventDefault();  // Prevent form from reloading the page
    if (name && about) {
      setProcards([...procards, { name, about }]); // Store name and about in the state
      setName("");  // Reset form inputs after adding
      setabout("");
    }
  };

  return (
    <div className="d-flex">
      <form onSubmit={addValues}>
        <div
          style={{
            width: "250px",
            height: "50vh",
            border: "2px solid #fff",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            className="form-control my-1"
            value={name}
            onChange={(e) => setName(e.target.value)} // Two-way binding for inputs
            required
          />

          <label htmlFor="about">About me: </label>
          <textarea
            id="about"
            className="form-control my-1"
            rows="4"
            value={about}
            onChange={(e) => setabout(e.target.value)} // Two-way binding for textarea
            required
          ></textarea>

          <button type="submit" className="form-control my-3">
            Submit
          </button>
        </div>
      </form>

      <div
      className="cardsSection"
        style={{
          width: "250px",
          height: "90vh",
          border: "2px solid #fff",
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
          overflowY: "scroll",  // In case the list gets long
        }}
      >
        {procards.map((card, index) => (
          <ProCard key={index} name={card.name} about={card.about} />
        ))}
      </div>
    </div>
  );
}

export default App;
