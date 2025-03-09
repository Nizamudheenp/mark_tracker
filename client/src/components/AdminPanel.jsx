import React, { useState } from "react";
import axios from "axios";

function AdminPanel() {
  const [formData, setFormData] = useState({
    registerNumber: "",
    name: "",
    studentClass: "",
    date: "",
    subjects: [{ title: "", totalMark: "", maxMark: "", status: "" }],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubjectChange = (index, e) => {
    const newSubjects = [...formData.subjects];
    newSubjects[index][e.target.name] = e.target.value;
    setFormData({ ...formData, subjects: newSubjects });
  };

  const addSubject = () => {
    setFormData({
      ...formData,
      subjects: [...formData.subjects, { title: "", totalMark: "", maxMark: "", status: "" }],
    });
  };

  const removeSubject = (index) => {
    const newSubjects = formData.subjects.filter((_, i) => i !== index);
    setFormData({ ...formData, subjects: newSubjects });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/addresults`, formData);
      alert("Marks added successfully!");
      setFormData({
        registerNumber: "",
        name: "",
        studentClass: "",
        date: "",
        subjects: [{ title: "", totalMark: "", maxMark: "", status: "" }],
      });
    } catch (error) {
      alert("Error adding marks.");
    }
  };

  return (
    <div>
      <h2>Admin Panel - Add Student Marks</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="registerNumber" placeholder="Register Number" value={formData.registerNumber} onChange={handleChange} required />
        <input type="text" name="name" placeholder="Student Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="studentClass" placeholder="Class" value={formData.studentClass} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <h3>Subjects</h3>
        {formData.subjects.map((subject, index) => (
          <div key={index}>
            <input type="text" name="title" placeholder="Subject Title" value={subject.title} onChange={(e) => handleSubjectChange(index, e)} required />
            <input type="number" name="totalMark" placeholder="Total Mark" value={subject.totalMark} onChange={(e) => handleSubjectChange(index, e)} required />
            <input type="number" name="maxMark" placeholder="Max Mark" value={subject.maxMark} onChange={(e) => handleSubjectChange(index, e)} required />
            <select name="status" value={subject.status} onChange={(e) => handleSubjectChange(index, e)} required>
              <option value="">Select Status</option>
              <option value="P">Pass</option>
              <option value="F">Fail</option>
            </select>
            <button type="button" onClick={() => removeSubject(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={addSubject}>+ Add Subject</button>
        <button type="submit">Submit Marks</button>
      </form>
    </div>
  );
}

export default AdminPanel;
