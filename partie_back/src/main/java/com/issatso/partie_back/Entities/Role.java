package com.issatso.partie_back.Entities;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


public enum Role {
    USER("USER"),
    ADMIN("ADMIN"),
    ENSEIGNANT("ENSEIGNANT"),
    ETUDIANT("ETUDIANT");

    private final String value;

    Role(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }
}
