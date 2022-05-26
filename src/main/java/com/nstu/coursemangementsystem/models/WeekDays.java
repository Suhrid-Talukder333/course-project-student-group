package com.nstu.coursemangementsystem.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WeekDays {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String day;
    private String courseName;

    public WeekDays() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
      this.id = id;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseName() {
      return courseName;
    }

    public void setDay(String day) {
      this.day = day;
    }

    public String getDay() {
      return day;
    }

}
