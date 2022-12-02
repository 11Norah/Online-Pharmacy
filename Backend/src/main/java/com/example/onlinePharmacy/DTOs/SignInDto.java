package com.example.onlinePharmacy.DTOs;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class SignInDto {
    private String email;
    private String password;
}
