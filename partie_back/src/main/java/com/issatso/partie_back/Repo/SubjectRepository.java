package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Subject;
import com.issatso.partie_back.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubjectRepository extends JpaRepository<Subject,Integer> {
    @Query("SELECT s FROM Subject s WHERE s.users = ?1")
    List<Subject> findByUserId(User user);
}
