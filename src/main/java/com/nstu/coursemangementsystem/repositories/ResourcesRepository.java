package com.nstu.coursemangementsystem.repositories;

import com.nstu.coursemangementsystem.models.Resources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourcesRepository extends JpaRepository<Resources,Integer> {
  @Query(value = "SELECT * FROM resources WHERE id = ?1", nativeQuery = true)
  Resources getWithId(int id);
}
