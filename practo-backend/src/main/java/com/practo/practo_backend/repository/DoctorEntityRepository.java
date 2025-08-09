package com.practo.practo_backend.repository;

import com.practo.practo_backend.entity.DoctorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorEntityRepository extends JpaRepository<DoctorEntity, Long> {

    List<DoctorEntity> findBySpecialtyAndLocation(String specialty, String location);
}