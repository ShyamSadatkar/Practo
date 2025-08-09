package com.practo.practo_backend.service.implementation;

import com.practo.practo_backend.entity.DoctorEntity;
import com.practo.practo_backend.pojo.SearchRequest;
import com.practo.practo_backend.repository.DoctorEntityRepository;
import com.practo.practo_backend.service.SearchService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {

    private final DoctorEntityRepository doctorEntityRepository;

    public SearchServiceImpl(DoctorEntityRepository doctorEntityRepository) {
        this.doctorEntityRepository = doctorEntityRepository;
    }

    @Override
    public List<DoctorEntity> searchBySpecialtyAndLocation(SearchRequest request) {
        List<DoctorEntity> doctorEntities = new ArrayList<>();
        doctorEntities = doctorEntityRepository.findBySpecialtyAndLocation(request.getSpecialty(), request.getLocation());
        return doctorEntities;
    }
}
