package com.practo.practo_backend;

import com.practo.practo_backend.entity.DoctorEntity;
import com.practo.practo_backend.entity.LookUpEntity;
import com.practo.practo_backend.repository.DoctorEntityRepository;
import com.practo.practo_backend.repository.LookUpEntityRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PractoBackendApplication implements CommandLineRunner {

    private final DoctorEntityRepository doctorEntityRepository;
    private final LookUpEntityRepository lookUpEntityRepository;

    public PractoBackendApplication(DoctorEntityRepository doctorEntityRepository, LookUpEntityRepository lookUpEntityRepository) {
        this.doctorEntityRepository = doctorEntityRepository;
        this.lookUpEntityRepository = lookUpEntityRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(PractoBackendApplication.class, args);
    }

    public void run(String... args) throws Exception {

        // Doctor
        doctorEntityRepository.save(new DoctorEntity(1L, "Dr. Sheelavathi Natraj", "Dentist", "Mumbai", 21, 800, 94));
        doctorEntityRepository.save(new DoctorEntity(2L, "Dr. Vani Roy", "Dentist", "Mumbai", 15, 750, 90));
        doctorEntityRepository.save(new DoctorEntity(3L, "Dr. Shyam Deshmukh", "Dermatologist", "Banglore", 12, 750, 97));
        doctorEntityRepository.save(new DoctorEntity(4L, "Dr. Siya Jain", "Dermatologist", "Banglore", 12, 850, 99));

        doctorEntityRepository.save(new DoctorEntity(5L, "Dr. Rajeev Natraj", "Dermatologist", "Mumbai", 21, 800, 94));
        doctorEntityRepository.save(new DoctorEntity(6L, "Dr. Soni Roy", "Dermatologist", "Mumbai", 15, 750, 90));
        doctorEntityRepository.save(new DoctorEntity(7L, "Dr. Pawan Deshmukh", "Dentist", "Banglore", 12, 750, 97));
        doctorEntityRepository.save(new DoctorEntity(8L, "Dr. Siya Jain", "Dentist", "Banglore", 12, 850, 99));


        // Lookup
        lookUpEntityRepository.save(new LookUpEntity(1L, "location", "Mumbai"));
        lookUpEntityRepository.save(new LookUpEntity(2L, "location", "Banglore"));
        lookUpEntityRepository.save(new LookUpEntity(3L, "specialty", "Dermatologist"));
        lookUpEntityRepository.save(new LookUpEntity(4L, "specialty", "Dentist"));
    }

}
