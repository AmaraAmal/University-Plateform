package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Borrowing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BorrowingRepository extends JpaRepository<Borrowing,Integer> {
}
