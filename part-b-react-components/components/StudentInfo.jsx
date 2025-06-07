import { useState } from 'react';


export default function StudentInfo() {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    age: '',
    major: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(formData);
  }

  return (
    <div style={{

      padding: "20px",
      marginTop: "20px",
      border: "2px solid #FBF3C1",
      borderRadius: "10px",
      textAlign: "center"

    }}>
      <h2 style={{marginBottom: "20px"}}>Student Information Form</h2>
{/* student information input with error handling(required input) */}
      <form onSubmit={handleSubmit}> 
        
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name: <br />
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Student ID: <br />
            <input type="text" name="id" value={formData.id} onChange={handleChange} required />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Age: <br />
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Major: <br />
            <input type="text" name="major" value={formData.major} onChange={handleChange} required />
          </label>
        </div>

        <button type="submit" style={{marginTop: "15px"}}>Submit</button>

      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Student ID: {submittedData.id}</p>
          <p>Age: {submittedData.age}</p>
          <p>Major: {submittedData.major}</p>
        </div>
      )}
    </div>
  );
}
