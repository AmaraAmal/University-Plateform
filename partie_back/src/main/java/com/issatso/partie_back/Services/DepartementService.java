package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Departement;
import com.issatso.partie_back.Repo.DepartementRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartementService {
    @Autowired
    private DepartementRepository departementRepository;

    public List<Departement> getDepartment(){return departementRepository.findAll();}

    public Optional<Departement> getDepartmentById(Integer id){
        boolean exist = departementRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("DEPARTMENT WITH ID = " + id + " DOESN'T EXIST !");
        }
        return departementRepository.findById(id);}

    public void addDepartment(Departement departement){departementRepository.save(departement);}

    public void deleteDepartment(Integer id){
        boolean exist = departementRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("DEPARTMENT WITH ID = " + id + " DOESN'T EXIST !");
        }
        departementRepository.deleteById(id);}

    @Transactional
    public void updateDepartment(Integer id, String name, Integer nb_professors){
        Departement departement = departementRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("DEPARTMENT WITH ID = " + id + " DOESN'T EXIST !"));
        departement.setName(name);
        departement.setNb_professors(nb_professors);
    }
}
