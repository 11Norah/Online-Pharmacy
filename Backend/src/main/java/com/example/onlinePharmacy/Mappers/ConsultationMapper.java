package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ConsultationDto;
import com.example.onlinePharmacy.Model.Consultation;

public class ConsultationMapper {
    public static Consultation mapDTOtoConsultation(ConsultationDto consultationDto) {
        return Consultation.builder()
                .products(consultationDto.getProducts())
                .diagnosis(consultationDto.getDiagnosis())
                .build();
    }

    public static ConsultationDto mapConsultationToDTO(Consultation consultation) {
        return ConsultationDto.builder()
                .products(consultation.getProducts())
                .diagnosis(consultation.getDiagnosis())
                .build();
    }
}
