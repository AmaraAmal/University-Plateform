package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.AcademicDoc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademicDocRepository extends JpaRepository<AcademicDoc,Integer> {
}
