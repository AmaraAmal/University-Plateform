package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Mark;
import com.issatso.partie_back.Services.MarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/mark")
public class MarkController {
    @Autowired
    private MarkService markService;

    @GetMapping
    public List<Mark> getMark(){return markService.getMark();}

    @GetMapping(path = "/{id}")
    public Optional<Mark> getMarkById(@PathVariable("id") Integer id){return markService.getMarkById(id);}

    @PostMapping(path = "/add")
    public void addNewMark(@RequestBody Mark mark){markService.addMark(mark);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteMArk(@PathVariable("id") Integer id){markService.deleteMark(id);}

    @PutMapping(path = "/update/{id}")
    public void updateMark(@PathVariable("id") Integer id,@RequestBody Mark mark){
        markService.updateMark(id,mark.getMark(), mark.getSubject());
    }
}
