package com.example.swbackend.repositories;

import com.example.swbackend.models.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ILessonRepo extends JpaRepository<Lesson,Long> {
    List<Lesson> findByCourse_Name(String courseName);
}
