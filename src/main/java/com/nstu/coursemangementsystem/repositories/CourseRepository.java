package com.nstu.coursemangementsystem.repositories;

import com.nstu.coursemangementsystem.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
  @Query(value = "SELECT * FROM course WHERE id = ?1", nativeQuery = true)
  Course getWithId(int id);
}
