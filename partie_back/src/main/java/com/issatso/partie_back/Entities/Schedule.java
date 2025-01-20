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
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String files;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User users;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "class_id")
    private Classes classes;

}
