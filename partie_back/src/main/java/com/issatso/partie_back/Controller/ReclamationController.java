package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Reclamation;
import com.issatso.partie_back.Entities.User;
import com.issatso.partie_back.Services.ReclamationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/reclamation")
public class ReclamationController {
    @Autowired
    private ReclamationService reclamationService;

    @GetMapping
    public List<Reclamation> getReclamation(){return reclamationService.getReclamation();}

    @GetMapping(path = "/{id}")
    public Optional<Reclamation> getReclamationById(@PathVariable("id") Integer id){return reclamationService.getReclamationById(id);}

    @GetMapping(path = "/user/{id}")
    public List<Reclamation> getReclamationByUserId(@PathVariable("id") User user){return reclamationService.getReclamationByUserId(user);}

    @PostMapping(path = "/add")
    public void addNewReclamation(@RequestBody Reclamation reclamation){reclamationService.addReclamation(reclamation);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteReclamation(@PathVariable("id") Integer id){reclamationService.deleteReclamation(id);}

    /*@PutMapping(path = "/update/{id}")
    public void updateReclamation(@PathVariable("id") Integer id,
                                  @RequestBody Reclamation reclamation){
        reclamationService.updateReclamation(id,reclamation.getFiles());
    }*/

    @PutMapping(path = "/update/{id}")
    public void updateReclamation(@PathVariable("id") Integer id,
                                  @RequestBody Reclamation reclamation){
        reclamationService.updateReclamation(id,reclamation.getFiles(),reclamation.getContent(),reclamation.getStatus(),reclamation.getDateReclamation());
    }
}
