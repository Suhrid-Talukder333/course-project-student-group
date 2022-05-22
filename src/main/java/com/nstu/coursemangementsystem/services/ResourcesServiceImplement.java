package com.nstu.coursemangementsystem.services;

import com.nstu.coursemangementsystem.models.Resources;
import com.nstu.coursemangementsystem.repositories.ResourcesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResourcesServiceImplement implements ResourcesService {

    @Autowired
    private ResourcesRepository ResourcesRepository;

    @Override
    public Resources saveResources(Resources resources) {
        return ResourcesRepository.save(resources);
    }

    @Override
    public List<Resources> getAllResources() {
        return ResourcesRepository.findAll();
    }

    @Override
    public Resources getResourcesById(int id) {
        return ResourcesRepository.getWithId(id);
    }

    @Override
    public void updateResources(int id, Resources resources) {
        Resources c = ResourcesRepository.getWithId(id);
        c.setTitle(resources.getTitle());
        c.setLink(resources.getLink());
        c.setDetail(resources.getDetail());
        c.setCourseId(resources.getCourseId());
        ResourcesRepository.save(c);
    }
}