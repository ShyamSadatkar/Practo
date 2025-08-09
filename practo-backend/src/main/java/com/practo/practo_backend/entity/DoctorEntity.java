package com.practo.practo_backend.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "Doctor")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class DoctorEntity {

    @Id
    private Long id;
    private String name;
    private String specialty;
    private String location;
    private Integer experience;
    private Integer consultationFee;
    private Integer rating;
}
