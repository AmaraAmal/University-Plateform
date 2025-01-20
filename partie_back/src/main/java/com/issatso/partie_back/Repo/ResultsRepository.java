package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Results;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultsRepository extends JpaRepository<Results,Integer> {
}
