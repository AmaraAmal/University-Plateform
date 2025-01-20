package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Book;
import com.issatso.partie_back.Entities.Borrowing;
import com.issatso.partie_back.Repo.BorrowingRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BorrowingService {
    @Autowired
    private BorrowingRepository borrowingRepository;

    public List<Borrowing> getBorrowing(){return borrowingRepository.findAll();}

    public Optional<Borrowing> getBorrowingById(Integer id){
        boolean exist = borrowingRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("BORROWING WITH ID = " + id + " DOESN'T EXIST !");
        }
        return borrowingRepository.findById(id);}

    public void addBorrowing(Borrowing borrowing){borrowingRepository.save(borrowing);}

    public void deleteBorrowing(Integer id){
        boolean exist = borrowingRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("BORROWING WITH ID = " + id + " DOESN'T EXIST !");
        }
        borrowingRepository.deleteById(id);
    }

    @Transactional
    public void updateBorrowing(Integer id, LocalDate start_date, LocalDate end_date, String files, Book book){
        Borrowing borrowing = borrowingRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("BORROWING WITH ID = " + id + " DOESN'T EXIST !"));
        borrowing.setStart_date(start_date);
        borrowing.setEnd_date(end_date);
        borrowing.setFiles(files);
        borrowing.setBooks(book);
    }
}
