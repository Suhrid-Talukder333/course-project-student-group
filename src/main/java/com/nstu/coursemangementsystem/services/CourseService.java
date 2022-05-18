package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Course;

import java.util.List;

public interface CourseService {
    public Course saveCourse(Course course);
    public List<Course> getAllCourses();
}