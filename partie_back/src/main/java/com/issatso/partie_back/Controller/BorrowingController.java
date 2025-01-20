package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Borrowing;
import com.issatso.partie_back.Services.BorrowingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/borrowing")
public class BorrowingController {
    @Autowired
    private BorrowingService borrowingService;

    @GetMapping
    public List<Borrowing> getBorrowing(){return borrowingService.getBorrowing();}

    @GetMapping(path = "/{id}")
    public Optional<Borrowing> getBorrowingById(@PathVariable("id") Integer id){return borrowingService.getBorrowingById(id);}

    @PostMapping(path = "/add")
    public void addNewBorrowing(@RequestBody Borrowing borrowing){borrowingService.addBorrowing(borrowing);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteBorrowing(@PathVariable("id") Integer id){borrowingService.deleteBorrowing(id);}

    @PutMapping(path = "/update/{id}")
    public void updateBorrowing(@PathVariable("id") Integer id,@RequestBody Borrowing borrowing){
        borrowingService.updateBorrowing(id,borrowing.getStart_date(),borrowing.getEnd_date(),borrowing.getFiles(), borrowing.getBooks());
    }
}
