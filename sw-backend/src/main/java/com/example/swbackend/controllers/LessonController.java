package com.example.swbackend.controllers;

import com.example.swbackend.models.Lesson;
import com.example.swbackend.services.ILessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/course")
public class LessonController {
    @Autowired
    private ILessonService iLessonService;
    @GetMapping("/{name}")
    @ResponseBody
    public List<Lesson> showLesson(@PathVariable String name) {
        List<Lesson> lessonList = iLessonService.findByCourseName(name);
        return lessonList;
    }
}
