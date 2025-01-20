package com.issatso.partie_back.Repo;

import com.issatso.partie_back.Entities.Classes;
import com.issatso.partie_back.Entities.Role;
import com.issatso.partie_back.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    //permet de gérer les cas où la valeur peut être absente
    Optional<User> findByEmail(String email);
    List<User> findByRole(Role role);

    @Query("SELECT u FROM User u WHERE u.classes = ?1")
    List<User> findByClass(Optional<Classes> classes);

}
