package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Resources;

import java.util.List;
import java.util.Optional;

public interface ResourcesService {
    public Resources saveResources(Resources resources);
    public List<Resources> getAllResources();
    public Resources getResourcesById(int id);
    public void updateResources(int id, Resources resources);
}