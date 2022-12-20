package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.VerificationTokenDto;
import com.example.onlinePharmacy.Model.User;
import com.example.onlinePharmacy.Model.VerificationToken;
import com.example.onlinePharmacy.Repositries.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class VerificationTokenMapper {

    public static VerificationToken mapDtoToVerificationToken(VerificationTokenDto dto, User user) {
        return VerificationToken.builder()
                .token(dto.getToken())
                .user(user)
                .expiryDate(dto.getExpiryDate())
                .id(dto.getId())
                .build();
    }
}
