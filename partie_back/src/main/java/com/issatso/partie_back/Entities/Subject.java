package com.issatso.partie_back.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String files;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User users;

    @JsonIgnore
    @OneToMany(mappedBy = "subjects")
    private List<Course> courses;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "mark_id")
    private Mark mark;


}
