package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Departement;
import com.issatso.partie_back.Services.DepartementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/department")
public class DepartementController {
    @Autowired
    private DepartementService departementService;

    @GetMapping
    public List<Departement> getDepartment(){return departementService.getDepartment();}

    @GetMapping(path = "/{id}")
    public Optional<Departement> getDepartmentById(@PathVariable("id") Integer id){return departementService.getDepartmentById(id);}

    @PostMapping(path = "/add")
    public void addNewDepartment(@RequestBody Departement departement){departementService.addDepartment(departement);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteDepartment(@PathVariable("id") Integer id){departementService.deleteDepartment(id);}

    @PutMapping(path = "/update/{id}")
    public void updateDepartment(@PathVariable("id") Integer id,@RequestBody Departement departement){
        departementService.updateDepartment(id,departement.getName(), departement.getNb_professors());
    }
}
