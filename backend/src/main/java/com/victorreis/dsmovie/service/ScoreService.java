package com.victorreis.dsmovie.service;

import com.victorreis.dsmovie.dto.MovieDTO;
import com.victorreis.dsmovie.dto.ScoreDTO;
import com.victorreis.dsmovie.entities.Movie;
import com.victorreis.dsmovie.entities.Score;
import com.victorreis.dsmovie.entities.User;
import com.victorreis.dsmovie.repositories.MovieRepository;
import com.victorreis.dsmovie.repositories.ScoreRepository;
import com.victorreis.dsmovie.repositories.UserRepository;
import org.apache.tomcat.util.buf.UDecoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public MovieDTO saveScore(ScoreDTO scoreDTO){
        User user = userRepository.findByEmail(scoreDTO.email());

        if(user == null){
            user = new User();
            user.setEmail(scoreDTO.email());
            user = userRepository.saveAndFlush(user);
        }

        Movie movie = movieRepository.findById(scoreDTO.movieId()).get();
        Score score = new Score();

        score.setMovie(movie);
        score.setUser(user);
        score.setValue(scoreDTO.value());

        score = scoreRepository.saveAndFlush(score);


        Double sum = 0.0;
        for (Score s : movie.getScoreSet()){
            sum += s.getValue();
        }

        movie.setScore(sum/movie.getScoreSet().size());
        movie.setCount(movie.getScoreSet().size());
        movieRepository.save(movie);

        return new MovieDTO(movie);
    }
}
