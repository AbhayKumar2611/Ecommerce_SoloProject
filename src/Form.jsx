import React, { useState } from "react";

const Form = () => {
  const [days, setDays] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [res, setRes] = useState([]);

  const newObj = { id: Date.now(), days, start, end };
  setRes([...res, newObj]);

  function handleSubmit() {
    setDays("");
    setStart("");
    setEnd("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={days} onChange={(e) => setDays(e.target.value)}>
          <option value="">Select</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <input
          type="date"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
