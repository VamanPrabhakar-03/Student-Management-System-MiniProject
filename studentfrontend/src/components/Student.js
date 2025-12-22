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
    const handleClick=async()=>{
        const student={name,address};
        console.log(student)
        fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{
        console.log("New Student added")
    } )      
  }
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
    </Container>
  );
}

