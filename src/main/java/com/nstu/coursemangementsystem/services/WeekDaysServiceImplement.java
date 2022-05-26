package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.WeekDays;
import com.nstu.coursemangementsystem.repositories.WeekDaysRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WeekDaysServiceImplement implements WeekDaysService {
    @Autowired
    private WeekDaysRepository weekDaysRepository;

    @Override
    public WeekDays saveWeekDays(WeekDays WeekDays) {
        return weekDaysRepository.save(WeekDays);
    }

    @Override
    public List<WeekDays> getAllWeekDays() {
        return weekDaysRepository.findAll();
    }
}