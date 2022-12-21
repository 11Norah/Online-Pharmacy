package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ProfileDto;
import com.example.onlinePharmacy.Model.User;

import java.time.LocalDate;
import java.time.Period;

public class ProfileMapper {
    public static ProfileDto UserToProfileDto(User user){
        LocalDate curDate = LocalDate.now();
        return ProfileDto.builder()
                .name(user.getFirstName() + " " + user.getLastName())
                .email(user.getEmail())
                .address(user.getAddress())
                .age(Period.between(user.getBirth_date(), curDate).getYears())
                .phoneNumber(user.getPhoneNumber())
                .build();
    }
}
