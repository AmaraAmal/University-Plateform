package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Timeoff;
import com.issatso.partie_back.Entities.User;
import com.issatso.partie_back.Repo.TimeoffRepository;
import com.issatso.partie_back.Repo.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TimeoffService {
    @Autowired
    private TimeoffRepository timeoffRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Timeoff> getTimeoff(){return timeoffRepository.findAll();}

    public Optional<Timeoff> getTimeoffById(Integer id){
        boolean exist = timeoffRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("TIMEOFF WITH ID = " + id + " DOESN'T EXIST !");
        }
        return timeoffRepository.findById(id);}

    public List<Timeoff> getTimeoffByUserId(User user){
        return timeoffRepository.findByUserId(user);}

    public void addTimeOff(Timeoff timeoff){timeoffRepository.save(timeoff);}

    public void deleteTimeoff(Integer id){
        boolean exist = timeoffRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("TIMEOFF WITH ID = " + id + " DOESN'T EXIST !");
        }
        timeoffRepository.deleteById(id);
    }

    @Transactional
    public void updateTimeoff(Integer id, String type, LocalDate start_date, LocalDate end_date, String files, String status){
        Timeoff timeoff = timeoffRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("TIMEOFF WITH ID = " + id + " DOESN'T EXIST !"));
        timeoff.setType(type);
        timeoff.setStart_date(start_date);
        timeoff.setEnd_date(end_date);
        timeoff.setFiles(files);
        timeoff.setStatus(status);
    }
}
