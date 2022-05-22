package com.nstu.coursemangementsystem.controllers;

import com.nstu.coursemangementsystem.models.Announcements;
import com.nstu.coursemangementsystem.services.AnnouncementsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/announcements")
@CrossOrigin
public class AnnouncementsController {
    @Autowired
    private AnnouncementsService announcementsService;

    @PostMapping("/add")
    public String add(@RequestBody Announcements announcements){
        announcementsService.saveAnnouncements(announcements);
        return "New Announcements is added";
    }
    
    @GetMapping("/getAll")
    public List<Announcements> list(){
        return announcementsService.getAllAnnouncements();
    }

    @GetMapping("/get/{id}")
    public Announcements getById(@PathVariable int id) {
        return announcementsService.getAnnouncementsById(id);
    }

    @PostMapping("/update/{id}")
    public void updateById(@PathVariable int id, @RequestBody Announcements announcements) {
        announcementsService.updateAnnouncements(id, announcements);
    }
}