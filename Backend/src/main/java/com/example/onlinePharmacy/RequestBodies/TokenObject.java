package com.example.onlinePharmacy.RequestBodies;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class TokenObject {
    private String userEmail;
    private String token;
}
