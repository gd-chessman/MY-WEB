package com.example.swbackend.controllers;

import com.example.swbackend.models.Lesson;
import com.example.swbackend.services.ILessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/course")
public class LessonController {
    @Autowired
    private ILessonService iLessonService;
    @GetMapping("")
    @ResponseBody
    public List<Lesson> showLesson(){
        return iLessonService.findAll();
    }
}
