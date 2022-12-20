package io.github.jfrts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.jfrts.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {

}
