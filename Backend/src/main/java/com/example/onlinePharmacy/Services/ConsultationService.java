package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.DTOs.ConsultationDto;
import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Mappers.ConsultationMapper;
import com.example.onlinePharmacy.Mappers.ProductMapper;
import com.example.onlinePharmacy.Model.Consultation;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Repositries.ConsultationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@Component
public class ConsultationService {
    @Autowired
    public ConsultationRepo consultationRepo;

    public Consultation getConsultation(String diagnosis) {
        return consultationRepo.findByDiagnosis(diagnosis);
    }

    public ConsultationDto getConsultationDTO(Consultation consultation) {
        return ConsultationMapper.mapConsultationToDTO(consultation);
    }

    public List<ProductDto> diagnose(String diagnosis) {
        ConsultationDto consultationDto = getConsultationDTO(getConsultation(diagnosis));
        List<ProductDto> treatments = new ArrayList<>();
        for(Product p : consultationDto.getProducts()) {
            treatments.add(ProductMapper.mapProductToDto(p));
        }
        return treatments;
    }

}
