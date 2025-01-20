package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Reclamation;
import com.issatso.partie_back.Entities.Timeoff;
import com.issatso.partie_back.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReclamationRepository extends JpaRepository<Reclamation,Integer> {
    @Query("SELECT r FROM Reclamation r WHERE r.users = ?1")
    List<Reclamation> findByUserId(User user);
}
