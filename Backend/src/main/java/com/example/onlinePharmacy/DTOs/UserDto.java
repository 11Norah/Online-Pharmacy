package com.example.onlinePharmacy.DTOs;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class UserDto {
    private long userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String birth_date;
    private String phoneNumber;
    private boolean pDrug ;
    private String address;
    private Integer age;
}
