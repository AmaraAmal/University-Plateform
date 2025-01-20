package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Timeoff;
import com.issatso.partie_back.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TimeoffRepository extends JpaRepository<Timeoff,Integer> {

    @Query("SELECT t FROM Timeoff t WHERE t.users = ?1")
    List<Timeoff> findByUserId(User user);
}
