package com.nstu.coursemangementsystem.repositories;

import com.nstu.coursemangementsystem.models.Announcements;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnouncementsRepository extends JpaRepository<Announcements,Integer> {
  @Query(value = "SELECT * FROM announcements WHERE id = ?1", nativeQuery = true)
  Announcements getWithId(int id);
}
