package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Course;
import com.issatso.partie_back.Entities.Subject;
import com.issatso.partie_back.Entities.User;
import com.issatso.partie_back.Repo.CourseRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getCourse(){return courseRepository.findAll();}

    public Optional<Course> getCourseById(Integer id){
        boolean exist = courseRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("COURSE WITH ID = " + id + " DOESN'T EXIST !");
        }
        return courseRepository.findById(id);}

    public List<Course> getCourseBySubjectId(Subject subject){
        return courseRepository.findBySubjectId(subject);}

    public List<Course> getCourseByUserId(User user){
        return courseRepository.findByUserId(user);}

    public void addCourse(Course course){courseRepository.save(course);}

    public void deleteCourse(Integer id){
        boolean exist = courseRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("COURSE WITH ID = " + id + " DOESN'T EXIST !");
        }
        courseRepository.deleteById(id);
    }

    @Transactional
    public void updateCourse(Integer id, String name, String files, Subject subject){
        Course course = courseRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("COURSE WITH ID = " + id + " DOESN'T EXIST !"));
        course.setName(name);
        course.setFiles(files);
        course.setSubjects(subject);
    }

}
