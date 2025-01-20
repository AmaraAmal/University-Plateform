package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Subject;
import com.issatso.partie_back.Entities.User;
import com.issatso.partie_back.Services.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/subject")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @GetMapping
    public List<Subject> getSubject(){return subjectService.getSubject();}

    @GetMapping(path = "/{id}")
    public Optional<Subject> getSubjectById(@PathVariable("id") Integer id){return subjectService.getSubjectById(id);}

    @GetMapping(path = "/user/{id}")
    public List<Subject> getSubjectByUserId(@PathVariable("id") User user){return subjectService.getSubjectByUserId(user);}

    @PostMapping(path = "/add")
    public void addNewSubject(@RequestBody Subject subject){subjectService.addSubject(subject);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteSubject(@PathVariable("id") Integer id){subjectService.deleteSubject(id);}

    @PutMapping(path = "/update/{id}")
    public void updateSubject(@PathVariable("id") Integer id,@RequestBody Subject subject){
        subjectService.updateSubject(id,subject.getFiles());
    }
}
