package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Departement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartementRepository extends JpaRepository<Departement,Integer> {
}
