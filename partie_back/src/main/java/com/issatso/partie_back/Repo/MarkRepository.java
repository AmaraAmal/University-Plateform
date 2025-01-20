package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Mark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarkRepository extends JpaRepository<Mark,Integer> {
}
