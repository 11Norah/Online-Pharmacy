package com.example.onlinePharmacy.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;


@AllArgsConstructor
@Getter
public class VerificationTokenDto {
    private static final int EXPIRATION = 10; //token expires after 10 minutes of creation.

    private Long id;
    private String token;
    private UserDto userDto;
    private Date expiryDate;

    public VerificationTokenDto(UserDto userDto) {
        token = UUID.randomUUID().toString();
        this.userDto = userDto;
        expiryDate = calculateExpiryDate();
    }
    public static Date calculateExpiryDate() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, EXPIRATION);
        return new Date(cal.getTime().getTime());
    }
}
