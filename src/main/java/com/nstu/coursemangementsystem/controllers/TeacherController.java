package com.nstu.coursemangementsystem.controllers;

import com.nstu.coursemangementsystem.models.Teacher;
import com.nstu.coursemangementsystem.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teacher")
@CrossOrigin
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @PostMapping("/add")
    public String add(@RequestBody Teacher teacher){
        teacherService.saveTeacher(teacher);
        return "New teacher is added";
    }

    @GetMapping("/getAll")
    public List<Teacher> list(){
        return teacherService.getAllTeachers();
    }
}