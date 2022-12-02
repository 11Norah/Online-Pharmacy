package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.Consultation;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component
@Qualifier("consultations")
public interface ConsultationRepo extends CrudRepository<Consultation, Integer> {
}
