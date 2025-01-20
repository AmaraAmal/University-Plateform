package com.issatso.partie_back.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String files;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subjects;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User users;

}
