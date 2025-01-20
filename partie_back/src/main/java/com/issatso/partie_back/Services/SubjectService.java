package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Subject;
import com.issatso.partie_back.Entities.User;
import com.issatso.partie_back.Repo.SubjectRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubjectService {
    @Autowired
    private SubjectRepository subjectRepository;

    public List<Subject> getSubject(){return subjectRepository.findAll();}

    public Optional<Subject> getSubjectById(Integer id){
        boolean exist = subjectRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("SUBJECT WITH ID = " + id + " DOESN'T EXIST !");
        }
        return subjectRepository.findById(id);}

    public List<Subject> getSubjectByUserId(User user){
        return subjectRepository.findByUserId(user);}

    public void addSubject(Subject subject){subjectRepository.save(subject);}

    public void deleteSubject(Integer id){
        boolean exist = subjectRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("SUBJECT WITH ID = " + id + " DOESN'T EXIST !");
        }
        subjectRepository.deleteById(id);
    }

    @Transactional
    public void updateSubject(Integer id, String files){
        Subject subject = subjectRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("SUBJECT WITH ID = " + id + " DOESN'T EXIST !"));
        subject.setFiles(files);
    }
}
