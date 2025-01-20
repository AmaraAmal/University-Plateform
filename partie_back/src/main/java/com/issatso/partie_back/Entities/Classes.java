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
public class Classes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String class_name;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="schedule_id")
    private Schedule schedules;

    @JsonIgnore
    @OneToMany(mappedBy = "classes")
    private List<User> users;
}
