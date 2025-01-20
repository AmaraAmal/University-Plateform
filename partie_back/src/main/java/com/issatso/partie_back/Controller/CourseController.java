package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Course;
import com.issatso.partie_back.Entities.Subject;
import com.issatso.partie_back.Entities.User;
import com.issatso.partie_back.Services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/course")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Course> getCourse(){return courseService.getCourse();}

    @GetMapping(path = "/{id}")
    public Optional<Course> getCourseById(@PathVariable("id") Integer id){return courseService.getCourseById(id);}

    @GetMapping(path = "/subject/{id}")
    public List<Course> getCourseBySubjectId(@PathVariable("id") Subject subject){return courseService.getCourseBySubjectId(subject);}

    @GetMapping(path = "/user/{id}")
    public List<Course> getCourseByUserId(@PathVariable("id") User user){return courseService.getCourseByUserId(user);}

    @PostMapping(path = "/add")
    public void addNewCourse(@RequestBody Course course){courseService.addCourse(course);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteCourse(@PathVariable("id") Integer id){courseService.deleteCourse(id);}

    @PutMapping(path = "/update/{id}")
    public void updateCourse(@PathVariable("id") Integer id,@RequestBody Course course){
        courseService.updateCourse(id,course.getName(), course.getFiles(),course.getSubjects());
    }
}
