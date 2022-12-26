package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ProfileDto;
import com.example.onlinePharmacy.Model.User;

import java.time.LocalDate;
import java.time.Period;

public class ProfileMapper {
    public static ProfileDto UserToProfileDto(User user){
        LocalDate curDate = LocalDate.now();
        return ProfileDto.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .address(user.getAddress())
                .birthDate(user.getBirth_date().toString())
                .phoneNumber(user.getPhoneNumber())
                .build();
    }
}
