package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.DTOs.VerificationTokenDto;
import com.example.onlinePharmacy.Mappers.VerificationTokenMapper;
import com.example.onlinePharmacy.Model.User;
import com.example.onlinePharmacy.Model.VerificationToken;
import com.example.onlinePharmacy.Repositries.UserRepo;
import com.example.onlinePharmacy.Repositries.VerificationTokenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
public class TokenService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    VerificationTokenRepo tokenRepo;

    public String getToken(UserDto userDto) {
        VerificationToken verificationToken = tokenRepo.findByUserId(userDto.getUserId());
        if(verificationToken == null) return createToken(userDto);
        else return updateToken(verificationToken);
    }

    private String createToken(UserDto userDto) {
        VerificationTokenDto tokenDto = new VerificationTokenDto(userDto);
        User user = userRepo.findUserByEmail(userDto.getEmail());
        VerificationToken token = VerificationTokenMapper.mapDtoToVerificationToken(tokenDto, user);
        tokenRepo.save(token);
        return token.getToken();
    }

    private String updateToken(VerificationToken verificationToken) {
        String newToken = UUID.randomUUID().toString();
        verificationToken.setToken(newToken);
        verificationToken.setExpiryDate(VerificationTokenDto.calculateExpiryDate());
        tokenRepo.save(verificationToken);
        return newToken;
    }

    public boolean isValidToken(String enteredToken, User user) {
        VerificationToken verificationToken = tokenRepo.findByUserId(user.getId());
        if(verificationToken == null) return false;
        String token = verificationToken.getToken();
        return enteredToken.equals(token);
    }

    private Date getExpiryDate(String token) {
        return tokenRepo.findByToken(token).getExpiryDate();
    }

    public boolean isTokenExpired(String token) {
        Date expiryDate = getExpiryDate(token);
        long expiryTime = expiryDate.getTime();
        long timeNow = new Date().getTime();
        return expiryTime - timeNow <= 0;
    }
}
