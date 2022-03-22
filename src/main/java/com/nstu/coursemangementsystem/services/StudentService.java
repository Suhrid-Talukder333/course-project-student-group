package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}