package com.victorreis.dsmovie.dto;

import com.victorreis.dsmovie.entities.Movie;

public record MovieDTO(
        Long id,
        String title,
        Double score,
        Integer count,
        String image
) {

    public MovieDTO(Movie movie){
        this(movie.getId(),movie.getTitle(), movie.getScore(),movie.getCount(), movie.getImage());
    }
}
