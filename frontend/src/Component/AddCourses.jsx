import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function AddCourses() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[year,setYear]=useState('')
    const[term,setTerm]=useState('')
    const[code,setCode]=useState('')
    const[credit,setCredit]=useState('')
    const[teacher,setTeacher]=useState('')
    const[courses,setCourses]=useState([])
    const[time, setTime]=useState("")
    const[batch, setBatch]=useState("")
    const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,year,teacher,term,code,credit}
    console.log(student)
    fetch("http://localhost:8080/course/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New course added")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/course/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setCourses(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Student</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Course Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Course Teacher" variant="outlined" fullWidth 
      value={teacher}
      onChange={(e)=>setTeacher(e.target.value)}
      />
      <TextField id="outlined-basic" label="Course year" variant="outlined" fullWidth
      value={year}
      onChange={(e)=>setYear(e.target.value)}
      />
      <TextField id="outlined-basic" label="Course term" variant="outlined" fullWidth
      value={term}
      onChange={(e)=>setTerm(e.target.value)}
      />
      <TextField id="outlined-basic" label="Course Code" variant="outlined" fullWidth
      value={code}
      onChange={(e)=>setCode(e.target.value)}
      />
      <TextField id="outlined-basic" label="Course Credit" variant="outlined" fullWidth
      value={credit}
      onChange={(e)=>setCredit(e.target.value)}
      />
      <TextField id="outlined-basic" label="Course Time" variant="outlined" fullWidth
      value={time}
      onChange={(e)=>setTime(e.target.value)}
      />
      <TextField id="outlined-basic" label="Batch" variant="outlined" fullWidth
      value={batch}
      onChange={(e)=>setBatch(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Courses</h1>

    <Paper elevation={3} style={paperStyle}>

      {courses.map(course=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={course.id}>
         Id:{course.id}<br/>
         Name:{course.name}<br/>
         year:{course.year}
         Teacher:{course.teacher}
         Term:{course.term}
        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}
