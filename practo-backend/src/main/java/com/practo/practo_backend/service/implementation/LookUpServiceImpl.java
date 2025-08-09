package com.practo.practo_backend.service.implementation;

import com.practo.practo_backend.entity.DoctorEntity;
import com.practo.practo_backend.entity.LookUpEntity;
import com.practo.practo_backend.pojo.LookUpRequest;
import com.practo.practo_backend.repository.LookUpEntityRepository;
import com.practo.practo_backend.service.LookUpService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LookUpServiceImpl implements LookUpService {

    private final LookUpEntityRepository lookUpEntityRepository;

    public LookUpServiceImpl(LookUpEntityRepository lookUpEntityRepository) {
        this.lookUpEntityRepository = lookUpEntityRepository;
    }

    @Override
    public List<String> getLookupValue(LookUpRequest request) {
        List<LookUpEntity> lookUpEntities = new ArrayList<>();
        lookUpEntities = lookUpEntityRepository.findByLookUpKeyAndLookUpValueContainingIgnoreCase(request.getKey(),request.getValue());
        List<String> lookUpValues = new ArrayList<>();
        if(!lookUpEntities.isEmpty()){
            for(LookUpEntity data : lookUpEntities){
                lookUpValues.add(data.getLookUpValue());
            }
        }
        return lookUpValues;
    }
}
