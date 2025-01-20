package com.issatso.partie_back.Controller;

import com.issatso.partie_back.Entities.News;
import com.issatso.partie_back.Services.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/news")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class NewsController {
    @Autowired
    private NewsService newsService;

    @GetMapping
    public List<News> getNews(){return newsService.getNews();}

    @GetMapping(path = "/{id}")
    public Optional<News> getNewsById(@PathVariable("id") Integer id){return newsService.getNewsById(id);}

    @PostMapping(path = "/add")
    public void addNewNews(@RequestBody News news){
        newsService.addNews(news);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void deleteNews(@PathVariable("id") Integer id){
        newsService.deleteNews(id);
    }

    @PutMapping(path = "/update/{id}")
    public void updateNews(@PathVariable("id") Integer id,@RequestBody News news){
        newsService.updateNews(id,news.getTitle(),news.getDate(),news.getContent(),news.getFiles());
    }
}
