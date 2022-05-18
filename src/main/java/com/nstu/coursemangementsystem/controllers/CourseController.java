package com.nstu.coursemangementsystem.controllers;

import com.nstu.coursemangementsystem.models.Course;
import com.nstu.coursemangementsystem.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/course")
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService courseService;

    @PostMapping("/add")
    public String add(@RequestBody Course course){
        courseService.saveCourse(course);
        return "New Course is added";
    }
    
    @GetMapping("/getAll")
    public List<Course> list(){
        return courseService.getAllCourses();
    }
}