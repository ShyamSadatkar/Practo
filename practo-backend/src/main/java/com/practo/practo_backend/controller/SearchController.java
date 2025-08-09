package com.practo.practo_backend.controller;

import com.practo.practo_backend.entity.DoctorEntity;
import com.practo.practo_backend.pojo.LookUpRequest;
import com.practo.practo_backend.pojo.SearchRequest;
import com.practo.practo_backend.service.LookUpService;
import com.practo.practo_backend.service.SearchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/v0")
public class SearchController {

    private final SearchService searchService;
    private final LookUpService lookUpService;

    public SearchController(SearchService searchService, LookUpService lookUpService) {
        this.searchService = searchService;
        this.lookUpService = lookUpService;
    }

    @PostMapping("/search")
    public List<DoctorEntity> searchDoctors(@RequestBody SearchRequest request) {
        return searchService.searchBySpecialtyAndLocation(request);
    }

    @PostMapping("/lookup")
    public List<String> getLookupValue(@RequestBody LookUpRequest request) {
        System.out.println(request.getKey());
        return lookUpService.getLookupValue(request);
    }




}
