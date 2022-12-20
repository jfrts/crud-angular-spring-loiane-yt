package io.github.jfrts.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.jfrts.model.Course;
import io.github.jfrts.repository.CourseRepository;
import lombok.AllArgsConstructor;

@RestController()
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;

    // @AllArgsConstructor -> Lombok automaticamente cria esse construtor.
    // public CourseController(CourseRepository courseRepository) {
    //     this.courseRepository = courseRepository;
    // }

    @GetMapping
    public List<Course> list() {
        // Em um projeto real é importante adicionar paginação.
        return courseRepository.findAll();
    }

}
