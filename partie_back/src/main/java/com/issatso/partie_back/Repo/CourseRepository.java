package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Course;
import com.issatso.partie_back.Entities.Subject;
import com.issatso.partie_back.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course,Integer> {
    @Query("SELECT c FROM Course c WHERE c.subjects = ?1")
    List<Course> findBySubjectId(Subject subject);

    @Query("SELECT c FROM Course c WHERE c.users = ?1")
    List<Course> findByUserId(User user);

}
