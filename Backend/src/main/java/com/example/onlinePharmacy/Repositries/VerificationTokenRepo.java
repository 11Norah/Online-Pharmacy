package com.example.onlinePharmacy.Repositries;
import com.example.onlinePharmacy.Model.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VerificationTokenRepo extends JpaRepository<VerificationToken, Long> {

    VerificationToken findByUserId(Long userId);
    VerificationToken findByToken(String token);
}
