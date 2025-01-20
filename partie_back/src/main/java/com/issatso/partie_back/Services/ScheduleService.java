package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Classes;
import com.issatso.partie_back.Entities.Schedule;
import com.issatso.partie_back.Repo.ClassesRepository;
import com.issatso.partie_back.Repo.ScheduleRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService {
    @Autowired
    private ScheduleRepository scheduleRepository;
    @Autowired
    private ClassesRepository classesRepository;

    public List<Schedule> getSchedule(){return scheduleRepository.findAll();}

    public Optional<Schedule> getScheduleById(Integer id){
        boolean exist = scheduleRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("SCHEDULE WITH ID = " + id + " DOESN'T EXIST !");
        }
        return scheduleRepository.findById(id);}

    public Optional<Schedule> getScheduleByClass(String class_name){
        Optional<Classes> classes = classesRepository.findByClassName(class_name);
        return scheduleRepository.findByClass(classes);}


    public void addSchedule(Schedule schedule){scheduleRepository.save(schedule);}

    public void deleteSchedule(Integer id){
        boolean exist = scheduleRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("SCHEDULE WITH ID = " + id + " DOESN'T EXIST !");
        }
        scheduleRepository.deleteById(id);
    }

    @Transactional
    public void updateSchedule(Integer id, String files){
        Schedule schedule = scheduleRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("SCHEDULE WITH ID = " + id + " DOESN'T EXIST !"));
        schedule.setFiles(files);
    }
}
