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
public class Mark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Float mark;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "result_id")
    private Results results;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;
}
