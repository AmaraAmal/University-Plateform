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
public class Results {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String files;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User users;

    @JsonIgnore
    @OneToMany(mappedBy = "results")
    private List<Mark> marks;
}
