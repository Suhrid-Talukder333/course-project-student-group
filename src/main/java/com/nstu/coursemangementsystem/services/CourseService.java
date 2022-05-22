package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Course;

import java.util.List;
import java.util.Optional;

public interface CourseService {
    public Course saveCourse(Course course);
    public List<Course> getAllCourses();
    public Course getCourseById(int id);
    public void updateCourse(int id, Course course);
}