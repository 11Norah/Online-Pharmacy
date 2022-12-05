package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Services.ConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ConsultationController {

    @Autowired
    ConsultationService service;
    @GetMapping("/consultations")
    List<ProductDto> getTreatments(@RequestParam String diagnosis) {
        return service.diagnose(diagnosis);
    }
}
