package com.example.swbackend.services;

import com.example.swbackend.models.Lesson;

import java.util.List;

public interface ILessonService {
    List<Lesson> findAll();
}
