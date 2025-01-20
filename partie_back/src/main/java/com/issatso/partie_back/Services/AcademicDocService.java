package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.AcademicDoc;
import com.issatso.partie_back.Repo.AcademicDocRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AcademicDocService {
    @Autowired
    private AcademicDocRepository academicDocRepository;

    public List<AcademicDoc> getAcademicDoc() {
        return academicDocRepository.findAll();
    }

    public Optional<AcademicDoc> getAcademicDocById(Integer id) {
        boolean exist = academicDocRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("ACADEMIC DOCUMENT WITH ID = " + id + " DOESN'T EXIST !");
        }
        return academicDocRepository.findById(id);
    }

    public void addAcademicDoc(AcademicDoc academicDoc){
        academicDocRepository.save(academicDoc);
    }

    public void deleteAcademicDoc(Integer id){
        boolean exist = academicDocRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("ACADEMIC DOCUMENT WITH ID = " + id + " DOESN'T EXIST !");
        }
        academicDocRepository.deleteById(id);
    }

    @Transactional
    public void updateAcademicDoc(Integer id, String type, String files, String status){
        AcademicDoc academicDoc = academicDocRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("ACADEMIC DOCUMENT WITH ID = " + id + " DOESN'T EXIST !"));
        academicDoc.setType(type);
        academicDoc.setFiles(files);
        academicDoc.setStatus(status);
    }


}
