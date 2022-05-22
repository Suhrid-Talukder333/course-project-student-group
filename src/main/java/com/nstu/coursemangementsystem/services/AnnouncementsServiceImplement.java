package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Announcements;
import com.nstu.coursemangementsystem.repositories.AnnouncementsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnnouncementsServiceImplement implements AnnouncementsService {

    @Autowired
    private AnnouncementsRepository AnnouncementsRepository;

    @Override
    public Announcements saveAnnouncements(Announcements announcements) {
        return AnnouncementsRepository.save(announcements);
    }

    @Override
    public List<Announcements> getAllAnnouncements() {
        return AnnouncementsRepository.findAll();
    }

    @Override
    public Announcements getAnnouncementsById(int id) {
        return AnnouncementsRepository.getWithId(id);
    }

    @Override
    public void updateAnnouncements(int id, Announcements announcements) {
        Announcements c = AnnouncementsRepository.getWithId(id);
        c.setTitle(announcements.getTitle());
        c.setTime(announcements.getTime());
        c.setDetail(announcements.getDetail());
        c.setCourseId(announcements.getCourseId());
        AnnouncementsRepository.save(c);
    }
}