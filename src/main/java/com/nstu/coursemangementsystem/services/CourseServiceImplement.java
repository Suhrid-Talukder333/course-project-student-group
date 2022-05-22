package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Course;
import com.nstu.coursemangementsystem.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public Course getCourseById(int id) {
        return CourseRepository.getWithId(id);
    }

    @Override
    public void updateCourse(int id, Course course) {
        Course c = CourseRepository.getWithId(id);
        System.out.println(course.getTime());
        c.setAnnouncements(course.getAnnouncements());
        c.setCode(course.getCode());
        c.setCredit(course.getCredit());
        c.setTeacher(course.getTeacher());
        c.setName(course.getName());
        c.setYear(course.getYear());
        c.setTime(course.getTime());
        c.setTerm(course.getTerm());
        c.setStatus(course.getStatus());
        CourseRepository.save(c);
    }
}