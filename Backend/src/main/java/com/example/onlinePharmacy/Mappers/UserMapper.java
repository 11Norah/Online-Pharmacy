package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.Model.User;

import java.time.LocalDate;

public class UserMapper {
    public static UserDto userToDto(User u){
        return UserDto.builder()
                .userId(u.getId())
                .firstName(u.getFirstName())
                .lastName(u.getLastName())
                .email(u.getEmail())
                .password(u.getPassword())
                .phoneNumber(u.getPhoneNumber())
                .address(u.getAddress())
                .birth_date(u.getBirth_date().toString())
                .pDrug(u.isPDrug())
                .age(u.getAge())
                .build();
    }
    public static User DtoToUser(UserDto u){
        LocalDate bd = LocalDate.parse(u.getBirth_date());
        return User.builder()
                .id(u.getUserId())
                .firstName(u.getFirstName())
                .lastName(u.getLastName())
                .email(u.getEmail())
                .password(u.getPassword())
                .phoneNumber(u.getPhoneNumber())
                .address(u.getAddress())
                .birth_date(bd)
                .pDrug(u.isPDrug())
                .age(u.getAge())
                .build();
    }
}
