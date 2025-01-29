package com.victorreis.dsmovie.repositories;

import com.victorreis.dsmovie.entities.Score;
import com.victorreis.dsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
