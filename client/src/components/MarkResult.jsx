import React from "react";

function MarkResult({ data }) {
  return (
    <div>
      <h3>Examination Result</h3>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Register No:</strong> {data.registerNumber}</p>
      <p><strong>Class:</strong> {data.studentClass}</p>
      <p><strong>Date:</strong> {new Date(data.date).toLocaleDateString()}</p>

      <table border="1">
        <thead>
          <tr>
            <th>Title of the Paper</th>
            <th>Total Mark</th>
            <th>Max Mark</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.title}</td>
              <td>{subject.totalMark}</td>
              <td>{subject.maxMark}</td>
              <td style={{ color: subject.status === "F" ? "red" : "green" }}>
                {subject.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarkResult;
