package com.example.swbackend.repositories;

import com.example.swbackend.models.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILessonRepo extends JpaRepository<Lesson,Long> {
}
