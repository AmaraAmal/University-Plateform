package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Classes;
import com.issatso.partie_back.Repo.ClassesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassesService {
    @Autowired
    private ClassesRepository classesRepository;

    public List<Classes> getClasses(){return classesRepository.findAll();}

    public Optional<Classes> getClassById(Integer id){return classesRepository.findById(id);}

    public void addClass(Classes classes){classesRepository.save(classes);}

    public void deleteClass(Integer id){
        boolean exist = classesRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("CLASS WITH ID = " + id + " DOESN'T EXIST !");
        }
        classesRepository.deleteById(id);
    }

    public void updateClass(Integer id, String class_name){
        Classes classes = classesRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("CLASS WITH ID = " + id + " DOESN'T EXIST !"));
        classes.setId(id);
        classes.setClass_name(class_name);

    }
}
