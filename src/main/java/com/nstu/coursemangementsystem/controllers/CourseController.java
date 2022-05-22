package com.nstu.coursemangementsystem.controllers;

import com.nstu.coursemangementsystem.models.Course;
import com.nstu.coursemangementsystem.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/get/{id}")
    public Course getById(@PathVariable int id) {
        return courseService.getCourseById(id);
    }

    @PostMapping("/update/{id}")
    public void updateById(@PathVariable int id, @RequestBody Course course) {
        courseService.updateCourse(id, course);
    }
}