package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.DTOs.SignInDto;
import com.example.onlinePharmacy.DTOs.UserDto;
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


    @PostMapping("/signup")
    public boolean signUp(@RequestBody UserDto user) {
        return service.recordNewUser(user);
    }
     @PostMapping("/signin")
    public boolean signIn(@RequestBody SignInDto signInDto) {
        return service.authenticate(signInDto);
    }

    @GetMapping(path = "/getAllUsers")
    public @ResponseBody List<UserDto> getAllProducts() {
        List<UserDto> userDtos = UserMapper.bulkMappingFromUserToDto((List<User>) userRepo.findAll());
        return userDtos;
    }
}
