package com.nstu.coursemangementsystem.controllers;

import com.nstu.coursemangementsystem.models.Student;
import com.nstu.coursemangementsystem.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> list(){
        return studentService.getAllStudents();
    }

    @GetMapping("/get/{id}")
    public Student getById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @PostMapping("/update/{id}")
    public void updateById(@PathVariable int id, @RequestBody Student student) {
        studentService.updateStudent(id, student);
    }
}