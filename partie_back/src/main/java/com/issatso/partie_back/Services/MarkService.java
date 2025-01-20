package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Mark;
import com.issatso.partie_back.Entities.Subject;
import com.issatso.partie_back.Repo.MarkRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MarkService {
    @Autowired
    private MarkRepository markRepository;

    public List<Mark> getMark(){return markRepository.findAll();}

    public Optional<Mark> getMarkById(Integer id){
        boolean exist = markRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("MARK WITH ID = " + id + " DOESN'T EXIST !");
        }
        return markRepository.findById(id);}

    public void addMark(Mark mark){markRepository.save(mark);}

    public void deleteMark(Integer id){
        boolean exist = markRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("MARK WITH ID = " + id + " DOESN'T EXIST !");
        }
        markRepository.deleteById(id);
    }

    @Transactional
    public void updateMark(Integer id, Float marks, Subject subject){
        Mark mark = markRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("MARK WITH ID = " + id + " DOESN'T EXIST !"));
        mark.setMark(marks);
        mark.setSubject(subject);
    }
}
