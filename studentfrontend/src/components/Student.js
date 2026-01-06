import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Button } from '@mui/material';


export default function Student() {
    const paperstyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const[name,setName]=React.useState('');
    const[address,setAddress]=React.useState('');
    const[students,setStudents]=React.useState([]); 
    const classes= React.useState('');
    const handleClick = async () => {
  const student = { name, address };

  await fetch("http://localhost:8080/student/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });

  // Fetch updated list
  fetch("http://localhost:8080/student/getAll")
    .then(res => res.json())
    .then(result => setStudents(result));

  setName('');
  setAddress('');
};

  return (
    <Container maxWidth="sm">
        <Paper sx={paperstyle}>
            <h1 style={{ color: 'black' }}><u>Add Student</u></h1>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Student Name"
          sx={{ '& > :not(style)': { m: 1 } }}
          variant="outlined"
          fullWidth
          value={name} onChange={(e)=>setName(e.target.value)}
        />
        <TextField
          label="Student Address"
          sx={{ '& > :not(style)': { m: 1 } }}
          variant="outlined"
          fullWidth
          value={address} onChange={(e)=>setAddress(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick ={handleClick}>
            Submit
        </Button>
      </Box>
      </Paper>
      <h2>Students List</h2>
<Paper elevation={3} sx={{ padding: 2 }}>
  {students.length === 0 ? (
    <p>No students found</p>
  ) : (
    students.map((student, index) => (
      <Paper key={index} sx={{ margin: 1, padding: 1 }}>
        <p><b>Name:</b> {student.name}</p>
        <p><b>Address:</b> {student.address}</p>
      </Paper>
    ))
  )}
</Paper>
    </Container>
  );
}

