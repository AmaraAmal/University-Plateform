package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.Book;
import com.issatso.partie_back.Repo.BookRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getBook(){return bookRepository.findAll();}

    public Optional<Book> getBookById(Integer id){
        boolean exist = bookRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("BOOK WITH ID = " + id + " DOESN'T EXIST !");
        }
        return bookRepository.findById(id);}

    public void addBook(Book book){bookRepository.save(book);}

    public void deleteBook(Integer id){
        boolean exist = bookRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("BOOK WITH ID = " + id + " DOESN'T EXIST !");
        }
        bookRepository.deleteById(id);}

    @Transactional
    public void updateBook(Integer id, String name, String author_name, String cover,String status){
        Book book = bookRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("BOOK WITH ID = " + id + " DOESN'T EXIST !"));
        book.setName(name);
        book.setAuthor_name(author_name);
        book.setCover(cover);
        book.setStatus(status);
    }
}
