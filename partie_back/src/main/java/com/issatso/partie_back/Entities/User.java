package com.issatso.partie_back.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    private Role role;

    // AMAL ADDED THE FOLLOWING LINES:
    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<News> news;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Schedule> schedules;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Subject> subjects;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Results> results;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Reclamation> reclamations;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Timeoff> timeoffs;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<AcademicDoc> academicDocs;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Borrowing> borrowings;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Book> books;

    @JsonIgnore
    @OneToMany(mappedBy = "users")
    private List<Course> Courses;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_departement")
    private Departement departement;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_class")
    private Classes classes;
    // AMAL ;


    //cette methode est utilisee dans la gestion des autorisations
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    public Integer getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public Role getRole() {
        return role;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
