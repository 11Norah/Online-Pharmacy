package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.Consultation;
import com.example.onlinePharmacy.Model.Product;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
@Component
@Qualifier("consultations")
public interface ConsultationRepo extends CrudRepository<Consultation, Integer> {
    public Consultation findByDiagnosis(String diagnosis);
}
