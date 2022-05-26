package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Teacher;
import com.nstu.coursemangementsystem.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImplement implements TeacherService {

    @Autowired
    private TeacherRepository TeacherRepository;

    @Override
    public Teacher saveTeacher(Teacher teacher) {
        return TeacherRepository.save(teacher);
    }

    @Override
    public List<Teacher> getAllTeachers() {
        return TeacherRepository.findAll();
    }

    @Override
    public Teacher getTeacherById(int id) {
        return TeacherRepository.getWithId(id);
    }

    @Override
    public void updateTeacher(int id, Teacher teacher) {
        Teacher c = TeacherRepository.getWithId(id);
        c.setName(teacher.getName());
        c.setAddress(teacher.getAddress());
        c.setBlood(teacher.getBlood());
        c.setEmail(teacher.getEmail());
        c.setPassword(teacher.getPassword());
        c.setPhone(teacher.getPhone());

        TeacherRepository.save(c);
    }
}