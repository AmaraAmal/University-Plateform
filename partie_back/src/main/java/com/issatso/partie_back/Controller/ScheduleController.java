package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Schedule;
import com.issatso.partie_back.Services.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/schedule")
public class ScheduleController {
    @Autowired
    private ScheduleService scheduleService;

    @GetMapping
    public List<Schedule> getSchedule(){return scheduleService.getSchedule();}

    @GetMapping(path = "/{id}")
    public Optional<Schedule> getScheduleById(@PathVariable("id") Integer id){return scheduleService.getScheduleById(id);}

    @GetMapping(path = "/class/{name}")
    public Optional<Schedule> getScheduleByClass(@PathVariable("name") String class_name){return scheduleService.getScheduleByClass(class_name);}

    @PostMapping(path = "/add")
    public void addNewSchedule(@RequestBody Schedule schedule){scheduleService.addSchedule(schedule);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteSchedule(@PathVariable("id") Integer id){scheduleService.deleteSchedule(id);}

    @PutMapping(path = "/update/{id}")
    public void updateSchedule(@PathVariable("id") Integer id,@RequestBody Schedule schedule){
        scheduleService.updateSchedule(id,schedule.getFiles());
    }
}
