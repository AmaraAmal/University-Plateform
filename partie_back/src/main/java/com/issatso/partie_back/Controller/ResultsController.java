package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Results;
import com.issatso.partie_back.Services.ResultsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/results")
public class ResultsController {
    @Autowired
    private ResultsService resultsService;

    @GetMapping
    public List<Results> getResults(){return resultsService.getResults();}

    @GetMapping(path = "/{id}")
    public Optional<Results> getResultsById(@PathVariable("id") Integer id){return resultsService.getResultsById(id);}

    @PostMapping(path = "/add")
    public void addNewResults(@RequestBody Results results){resultsService.addResults(results);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteResults(@PathVariable("id") Integer id){resultsService.deleteResults(id);}

    @PutMapping(path = "/update/{id}")
    public void deleteResults(@PathVariable("id") Integer id,@RequestBody Results results){
        resultsService.updateResults(id,results.getFiles());
    }
}
