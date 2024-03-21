package com.example.swbackend.services.impl;

import com.example.swbackend.models.Lesson;
import com.example.swbackend.repositories.ILessonRepo;
import com.example.swbackend.services.ILessonService;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LessonService implements ILessonService {
    @Autowired
    private ILessonRepo iLessonRepo;

    @Override
    public List<Lesson> findAll() {
        return iLessonRepo.findAll();
    }
}
