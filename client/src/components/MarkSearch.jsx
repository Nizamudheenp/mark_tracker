import React, { useState } from "react";
import axios from "axios";
import MarkResult from "./MarkResult";

function MarkSearch({ setView }) {
  const [registerNumber, setRegisterNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const fetchMarks = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/student/getresult`, {
        params: { registerNumber, studentClass },
      });
      console.log("Response Data:", response.data);
      if (response.data.isAdmin) {
        setView("admin"); 
      } else {
        setResult(response.data);
      }
    } catch (err) {
      setError("No record found. Please check your details.");
      setResult(null);
    }
  };

  return (
    <div>
    <h2>Check Your Mark List</h2>
    <form onSubmit={fetchMarks}>
      <input type='text' placeholder='Enter Register Number' value={registerNumber} onChange={(e) => setRegisterNumber(e.target.value)} required />
      <input type='text' placeholder='Enter Class' value={studentClass} onChange={(e) => setStudentClass(e.target.value)} required />
      <button type='submit'>Get Marks</button>
    </form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {result && <MarkResult data={result} />}
  </div>
  );
}

export default MarkSearch;
