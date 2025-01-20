package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Results;
import com.issatso.partie_back.Repo.ResultsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResultsService {
    @Autowired
    private ResultsRepository resultsRepository;

    public List<Results> getResults(){return resultsRepository.findAll();}

    public Optional<Results> getResultsById(Integer id){
        boolean exist = resultsRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("RESULTS WITH ID = " + id + " DOESN'T EXIST !");
        }
        return resultsRepository.findById(id);}

    public void addResults(Results results){resultsRepository.save(results);}

    public void deleteResults(Integer id){
        boolean exist = resultsRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("RESULTS WITH ID = " + id + " DOESN'T EXIST !");
        }
        resultsRepository.deleteById(id);
    }

    @Transactional
    public void updateResults(Integer id, String files){
        Results results = resultsRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("RESULTS WITH ID = " + id + " DOESN'T EXIST !"));
        results.setFiles(files);
    }
}
