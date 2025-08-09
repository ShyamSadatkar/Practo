package com.practo.practo_backend.pojo;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class LookUpRequest {
    public String key;
    public String value;
}
