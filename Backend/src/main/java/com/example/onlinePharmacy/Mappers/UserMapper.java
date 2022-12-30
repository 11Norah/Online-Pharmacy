package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Model.User;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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
                .age(u.getAge())
                .build();
    }
    public static ArrayList<UserDto> bulkMappingFromUserToDto(List<User> users) {
        ArrayList<UserDto> userDtos = new ArrayList<>();
        for (User user : users) {
            userDtos.add(userToDto(user));
        }
        return userDtos;
    }
}
