package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Announcements;

import java.util.List;
import java.util.Optional;

public interface AnnouncementsService {
    public Announcements saveAnnouncements(Announcements announcements);
    public List<Announcements> getAllAnnouncements();
    public Announcements getAnnouncementsById(int id);
    public void updateAnnouncements(int id, Announcements announcements);
}