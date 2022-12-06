package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ConsultationDto;
import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Model.Consultation;
import com.example.onlinePharmacy.Model.Product;

import java.util.ArrayList;
import java.util.List;

public class ConsultationMapper {
    public static Consultation mapDTOtoConsultation(ConsultationDto consultationDto) {
        return Consultation.builder()
                .products(ProductMapper.bulkMappingFromDtoToProduct(consultationDto.getProducts()))
                .diagnosis(consultationDto.getDiagnosis())
                .build();
    }

    public static ConsultationDto mapConsultationToDTO(Consultation consultation) {
        return ConsultationDto.builder()
                .products(ProductMapper.bulkMappingFromProductToDto(consultation.getProducts()))
                .diagnosis(consultation.getDiagnosis())
                .build();
    }

    public static ArrayList<Consultation> bulkMappingFromDtoToConsultation(List<ConsultationDto> consultationDtoList) {
        ArrayList<Consultation> consultations = new ArrayList<>();
        for (ConsultationDto consultationDto : consultationDtoList) {
            consultations.add(mapDTOtoConsultation(consultationDto));
        }
        return consultations;
    }

    public static ArrayList<String> getDiagnosisFromConsultation(List<Consultation> consultations) {
        ArrayList<String> diagnosis = new ArrayList<>();
        for (Consultation consultation : consultations) {
            diagnosis.add(consultation.getDiagnosis());
        }
        return diagnosis;
    }

    public static ArrayList<String> getDiagnosisFromConsultationDto(List<ConsultationDto> consultations) {
        ArrayList<String> diagnosis = new ArrayList<>();
        for (ConsultationDto consultation : consultations) {
            diagnosis.add(consultation.getDiagnosis());
        }
        return diagnosis;
    }


    public static ArrayList<ConsultationDto> bulkMappingToConsultationDto(List<Consultation> consultations) {
        ArrayList<ConsultationDto> consultationDtos = new ArrayList<>();
        for (Consultation consultation : consultations) {
            consultationDtos.add(mapConsultationToDTO(consultation));
        }
        return consultationDtos;
    }
}
