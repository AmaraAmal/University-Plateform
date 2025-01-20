package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Timeoff;
import com.issatso.partie_back.Entities.User;
import com.issatso.partie_back.Services.TimeoffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/timeoff")
public class TimeoffController {
    @Autowired
    private TimeoffService timeoffService;

    @GetMapping
    public List<Timeoff> getTimeoff(){return timeoffService.getTimeoff();}

    @GetMapping(path = "/{id}")
    public Optional<Timeoff> getTimeoffById(@PathVariable("id") Integer id){return timeoffService.getTimeoffById(id);}

    @GetMapping(path = "/user/{id}")
    public List<Timeoff> getTimeoffByUserId(@PathVariable("id") User user){return timeoffService.getTimeoffByUserId(user);}

    @PostMapping(path = "/add")
    public void addNewTimeoff(@RequestBody Timeoff timeoff){timeoffService.addTimeOff(timeoff);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteTimeoff(@PathVariable("id") Integer id){timeoffService.deleteTimeoff(id);}

    @PutMapping(path = "/update/{id}")
    public void updateTimeoff(@PathVariable("id") Integer id,@RequestBody Timeoff timeoff){
        timeoffService.updateTimeoff(id,timeoff.getType(),timeoff.getStart_date(),timeoff.getEnd_date(),timeoff.getFiles(),timeoff.getStatus());
    }
}
