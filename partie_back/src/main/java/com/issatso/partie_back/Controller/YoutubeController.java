package com.issatso.partie_back.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class YoutubeController {

    @GetMapping("/youtube/videos")
    public ResponseEntity<?> getYouTubeVideos(@RequestParam("query") String query) {
        String url = "http://localhost:5000/youtube/videos?query=" + query;

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        // Return the response entity directly
        return response;
    }
}
