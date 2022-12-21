package com.example.onlinePharmacy.DTOs;

import lombok.*;


@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class ProfileDto {

    private String name;
    private String email;
    private String phoneNumber;
    private String address;
    private Integer age;

}
