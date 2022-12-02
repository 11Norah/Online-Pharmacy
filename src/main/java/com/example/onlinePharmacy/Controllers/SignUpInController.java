package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.DTOs.SignInDto;
import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.Services.SignUpInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class SignUpInController {
    @Autowired
    SignUpInService service;

    @PostMapping("/signup")
    public boolean signUp(@RequestBody UserDto user) {
        return service.recordNewUser(user);
    }

    @GetMapping("/signin")
    public boolean signIn(SignInDto signInDto) {
        return service.authenticate(signInDto);
    }
}
