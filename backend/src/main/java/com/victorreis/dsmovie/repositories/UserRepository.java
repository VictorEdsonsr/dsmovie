package com.victorreis.dsmovie.repositories;

import com.victorreis.dsmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String emaiil);
}
