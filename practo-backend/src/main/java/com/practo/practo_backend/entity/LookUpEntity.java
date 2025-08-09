package com.practo.practo_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "LookUp")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class LookUpEntity {

    @Id
    private Long id;
    private String lookUpKey;
    private String lookUpValue;
}
