package com.practo.practo_backend.repository;

import com.practo.practo_backend.entity.LookUpEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LookUpEntityRepository extends JpaRepository<LookUpEntity, Long> {

  List<LookUpEntity> findByLookUpKeyAndLookUpValueContainingIgnoreCase(String key, String value);
}