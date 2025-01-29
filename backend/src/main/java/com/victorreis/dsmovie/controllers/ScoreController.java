package com.victorreis.dsmovie.controllers;

import com.victorreis.dsmovie.dto.MovieDTO;
import com.victorreis.dsmovie.dto.ScoreDTO;
import com.victorreis.dsmovie.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/scores")
public class ScoreController {
    @Autowired
    ScoreService scoreService;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO scoreDTO){
        return scoreService.saveScore(scoreDTO);
    }
}
