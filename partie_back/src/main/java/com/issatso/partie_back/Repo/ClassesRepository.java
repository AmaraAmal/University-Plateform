package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Classes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface ClassesRepository extends JpaRepository<Classes,Integer> {
    @Query("SELECT c FROM Classes c WHERE c.class_name = ?1")
    Optional<Classes> findByClassName(String class_name);
}
