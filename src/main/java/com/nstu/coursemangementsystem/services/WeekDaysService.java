package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.WeekDays;
import java.util.List;


public interface WeekDaysService {
  public WeekDays saveWeekDays(WeekDays weekDays);
  public List<WeekDays> getAllWeekDays();
}
