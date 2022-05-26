package com.nstu.coursemangementsystem.repositories;

import com.nstu.coursemangementsystem.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
  @Query(value = "SELECT * FROM student WHERE id = ?1", nativeQuery = true)
  Student getWithId(int id);
}