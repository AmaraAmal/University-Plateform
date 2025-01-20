package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.Book;
import com.issatso.partie_back.Services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/book")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping
    public List<Book> getBook(){return bookService.getBook();}

    @GetMapping(path = "/{id}")
    public Optional<Book> getBookById(@PathVariable("id") Integer id){return bookService.getBookById(id);}

    @PostMapping(path = "/add")
    public void addNewBook(@RequestBody Book book){bookService.addBook(book);}

    @DeleteMapping(path = "/delete/{id}")
    public void deleteBook(@PathVariable("id") Integer id){bookService.deleteBook(id);}

    @PutMapping(path = "/update/{id}")
    public void updateBook(@PathVariable("id") Integer id,@RequestBody Book book){
        bookService.updateBook(id,book.getName(),book.getAuthor_name(),book.getCover(),book.getStatus());
    }
}
