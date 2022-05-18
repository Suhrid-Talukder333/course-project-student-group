package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Course;
import com.nstu.coursemangementsystem.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImplement implements CourseService {

    @Autowired
    private CourseRepository CourseRepository;

    @Override
    public Course saveCourse(Course course) {
        return CourseRepository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return CourseRepository.findAll();
    }
}