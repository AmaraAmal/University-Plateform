package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.AcademicDoc;
import com.issatso.partie_back.Services.AcademicDocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/academicdoc")
public class AcademicDocController {

    @Autowired
    private AcademicDocService academicDocService;

    @GetMapping
    public List<AcademicDoc> getAcademicDoc(){return academicDocService.getAcademicDoc();}
    @GetMapping(path = "/{id}")
    public Optional<AcademicDoc> getAcademicDocById(@PathVariable("id") Integer id){return academicDocService.getAcademicDocById(id);}

    @PostMapping(path = "/add")
    public void addNewAcademicDocs(@RequestBody AcademicDoc academicDoc){academicDocService.addAcademicDoc(academicDoc);}

    @DeleteMapping(path="/delete/{id}")
    public void deleteAcademicDoc(@PathVariable("id") Integer id){academicDocService.deleteAcademicDoc(id);}

    @PutMapping(path = "/update/{id}")
    public void updateAcademicDoc(@PathVariable("id") Integer id, @RequestBody AcademicDoc academicDoc){
        academicDocService.updateAcademicDoc(id, academicDoc.getType(),academicDoc.getFiles(),academicDoc.getStatus());}

}
