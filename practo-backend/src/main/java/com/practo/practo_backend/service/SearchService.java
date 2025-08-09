package com.practo.practo_backend.service;

import com.practo.practo_backend.entity.DoctorEntity;
import com.practo.practo_backend.pojo.SearchRequest;

import java.util.List;


public interface SearchService {
    List<DoctorEntity> searchBySpecialtyAndLocation(SearchRequest request);
}
