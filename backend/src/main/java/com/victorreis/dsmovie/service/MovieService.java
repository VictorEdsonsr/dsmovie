package com.victorreis.dsmovie.service;

import com.victorreis.dsmovie.dto.MovieDTO;
import com.victorreis.dsmovie.entities.Movie;
import com.victorreis.dsmovie.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    @Transactional
    public Page<MovieDTO> findAll(Pageable pageable){
        Page<Movie> result = movieRepository.findAll(pageable);
        return result.map(MovieDTO::new);
    }

    @Transactional
    public MovieDTO findById(Long id){
        Movie result = movieRepository.findById(id).get();
        return new MovieDTO(result);
    }
}
