package com.nstu.coursemangementsystem.controllers;

import com.nstu.coursemangementsystem.models.WeekDays;
import com.nstu.coursemangementsystem.services.WeekDaysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/weekdays")
@CrossOrigin
public class WeekDaysController {
    @Autowired
    private WeekDaysService WeekDaysService;

    @PostMapping("/add")
    public String add(@RequestBody WeekDays WeekDays){
        WeekDaysService.saveWeekDays(WeekDays);
        return "New WeekDays is added";
    }
    
    @GetMapping("/getAll")
    public List<WeekDays> list(){
        return WeekDaysService.getAllWeekDays();
    }

}