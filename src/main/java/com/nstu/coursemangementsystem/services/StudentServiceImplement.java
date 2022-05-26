package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Student;
import com.nstu.coursemangementsystem.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImplement implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(int id) {
        return studentRepository.getWithId(id);
    }

    @Override
    public void updateStudent(int id, Student student) {
        Student c = studentRepository.getWithId(id);
        c.setName(student.getName());
        c.setAddress(student.getAddress());
        c.setBlood(student.getBlood());
        c.setEmail(student.getEmail());
        c.setPassword(student.getPassword());
        c.setYear(student.getYear());
        c.setTerm(student.getTerm());
        c.setRoll(student.getRoll());
        c.setPhone(student.getPhone());

        studentRepository.save(c);
    }
}