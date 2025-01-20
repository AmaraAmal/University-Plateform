package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Reclamation;
import com.issatso.partie_back.Entities.User;
import com.issatso.partie_back.Repo.ReclamationRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ReclamationService {

    @Autowired
    private ReclamationRepository reclamationRepository;

    public List<Reclamation> getReclamation(){return reclamationRepository.findAll();}

    public Optional<Reclamation> getReclamationById(Integer id){
        boolean exist = reclamationRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("RECLAMATION WITH ID = " + id + " DOESN'T EXIST !");
        }
        return reclamationRepository.findById(id);}

    public List<Reclamation> getReclamationByUserId(User user){
        return reclamationRepository.findByUserId(user);}

    public void addReclamation(Reclamation reclamation){reclamationRepository.save(reclamation);}

    public void deleteReclamation(Integer id){
        boolean exist = reclamationRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("RECLAMATION WITH ID = " + id + " DOESN'T EXIST !");
        }
        reclamationRepository.deleteById(id);
    }

    @Transactional
    public void updateReclamation(Integer id, String files, String content, String status, LocalDate date_reclamation){
        Reclamation reclamation = reclamationRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("RECLAMATION WITH ID = " + id + " DOESN'T EXIST !"));
        reclamation.setFiles(files);
        reclamation.setContent(content);
        reclamation.setStatus(status);
        reclamation.setDateReclamation(date_reclamation);
    }
}
