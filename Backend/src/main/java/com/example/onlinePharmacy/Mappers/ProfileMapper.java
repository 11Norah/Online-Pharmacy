package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ProfileDto;
import com.example.onlinePharmacy.Model.User;

public class ProfileMapper {
    public static ProfileDto UserToProfileDto(User user){
        return ProfileDto.builder()
                .name(user.getFirstName() + " " + user.getLastName())
                .email(user.getEmail())
                .address(user.getAddress())
                .age(user.getAge())
                .build();
    }
}
