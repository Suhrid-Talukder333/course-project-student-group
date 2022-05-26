package com.nstu.coursemangementsystem.repositories;

import com.nstu.coursemangementsystem.models.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher,Integer> {
  @Query(value = "SELECT * FROM teacher WHERE id = ?1", nativeQuery = true)
  Teacher getWithId(int id);
}