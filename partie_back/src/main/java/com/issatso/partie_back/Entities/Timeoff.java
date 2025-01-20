package com.issatso.partie_back.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Timeoff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String type;
    private LocalDate start_date;
    private LocalDate end_date;
    private String files;
    private String status;

    //GEZZ commented this annotation
    //@JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User users;
}
