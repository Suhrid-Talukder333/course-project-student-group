package com.nstu.coursemangementsystem.controllers;

import com.nstu.coursemangementsystem.models.Resources;
import com.nstu.coursemangementsystem.services.ResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/resources")
@CrossOrigin
public class ResourcesController {
    @Autowired
    private ResourcesService ResourcesService;

    @PostMapping("/add")
    public String add(@RequestBody Resources resources){
        ResourcesService.saveResources(resources);
        return "New Resources is added";
    }
    
    @GetMapping("/getAll")
    public List<Resources> list(){
        return ResourcesService.getAllResources();
    }

    @GetMapping("/get/{id}")
    public Resources getById(@PathVariable int id) {
        return ResourcesService.getResourcesById(id);
    }

    @PostMapping("/update/{id}")
    public void updateById(@PathVariable int id, @RequestBody Resources resources) {
        ResourcesService.updateResources(id, resources);
    }
}