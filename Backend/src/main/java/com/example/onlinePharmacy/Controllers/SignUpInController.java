package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.DTOs.SignInDto;
import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.RequestBodies.TokenObject;
import com.example.onlinePharmacy.Services.SignInService;
import com.example.onlinePharmacy.Services.SignUpService;
import com.example.onlinePharmacy.Mappers.UserMapper;
import com.example.onlinePharmacy.Model.User;
import com.example.onlinePharmacy.Repositries.UserRepo;
import com.example.onlinePharmacy.Services.SignUpInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class SignUpInController {
    @Autowired
    SignUpInService service;
    @Autowired
    UserRepo userRepo;

    SignUpService signUpService;

    @Autowired
    SignInService signInService;

    @PostMapping("/signup")
    public boolean signUp(@RequestBody UserDto user) {
        return signUpService.recordNewUser(user);
    }

    @PostMapping("/signin")
    public int signIn(@RequestBody SignInDto signInDto) {
        return signInService.authenticate(signInDto);
    }

    @PostMapping("/activate-account")
    public int activateAccount(@RequestBody TokenObject tokenObject) {
        return signUpService.activateAccount(tokenObject);
    }

    @GetMapping("/get-activation-code")
    public boolean sendToken(@RequestParam String email) {
        return signUpService.sendActivationToken(email);
    }
}
