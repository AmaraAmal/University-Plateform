package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Classes;
import com.issatso.partie_back.Services.ClassesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/classes")
public class ClassesController {
    @Autowired
    private ClassesService classesService;

    @GetMapping
    public List<Classes> getClasses(){return classesService.getClasses();}

    @GetMapping(path = "/{id}")
    public Optional<Classes> getClassById(@PathVariable("id") Integer id){return classesService.getClassById(id);}

    @PostMapping(path = "/add")
    public void addNewClass(@RequestBody Classes classes){classesService.addClass(classes);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteClass(@PathVariable("id") Integer id){classesService.deleteClass(id);}

    @PutMapping(path = "update/{id}")
    public void updateClass(@PathVariable("id") Integer id,
                            @RequestBody Classes classes){
        classesService.updateClass(id,classes.getClass_name());
    }
}
