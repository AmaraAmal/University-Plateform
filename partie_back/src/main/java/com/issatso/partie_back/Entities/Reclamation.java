package com.issatso.partie_back.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Reclamation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String files;
    private String content;
    private String status;
    private LocalDate dateReclamation;

    //GEZZ commented this annotation
    //@JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User users;
}
