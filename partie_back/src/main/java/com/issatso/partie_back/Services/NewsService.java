package com.issatso.partie_back.Services;

import com.issatso.partie_back.Entities.News;
import com.issatso.partie_back.Repo.NewsRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class NewsService {
    @Autowired
    private NewsRepository newsRepository;

    public List<News> getNews(){return newsRepository.findAll();}

    public Optional<News> getNewsById(Integer id){
        boolean exist = newsRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("NEWS WITH ID = " + id + " DOESN'T EXIST !");
        }
        return newsRepository.findById(id);}

    public void addNews(News news){newsRepository.save(news);}

    public void deleteNews(Integer id){
        boolean exist = newsRepository.existsById(id);
        if(!exist){
            throw new IllegalStateException("NEWS WITH ID = " + id + " DOESN'T EXIST !");
        }
        newsRepository.deleteById(id);
    }

    @Transactional
    public void updateNews(Integer id, String title,LocalDate date,String content,String files){
        News news = newsRepository.findById(id).orElseThrow(() ->
                new IllegalStateException("NEWS WITH ID = " + id + " DOESN'T EXIST !"));
        news.setTitle(title);
        news.setDate(date);
        news.setContent(content);
        news.setFiles(files);
    }
}
