package com.example.onlinePharmacy.DTOs;

import com.example.onlinePharmacy.Model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;


@AllArgsConstructor
@Getter
public class VerificationTokenDto {
    private static final int EXPIRATION = 5; //token expires after 5 minutes of creation.

    private Long id;
    private String token;
    private UserDto userDto;
    private Date expiryDate;

    public VerificationTokenDto(UserDto userDto) {
        token = UUID.randomUUID().toString();
        this.userDto = userDto;
        expiryDate = calculateExpiryDate();
    }
    private Date calculateExpiryDate() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, EXPIRATION);
        return new Date(cal.getTime().getTime());
    }
}
