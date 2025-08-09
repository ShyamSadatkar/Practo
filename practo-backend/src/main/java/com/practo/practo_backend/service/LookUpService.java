package com.practo.practo_backend.service;

import com.practo.practo_backend.pojo.LookUpRequest;

import java.util.List;

public interface LookUpService {
    List<String> getLookupValue(LookUpRequest request);
}
