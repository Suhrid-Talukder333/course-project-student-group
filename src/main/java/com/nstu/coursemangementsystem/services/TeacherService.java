package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Teacher;

import java.util.List;

public interface TeacherService {
    public Teacher saveTeacher(Teacher teacher);
    public List<Teacher> getAllTeachers();
}