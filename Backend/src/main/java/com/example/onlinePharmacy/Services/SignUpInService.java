package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.DTOs.SignInDto;
import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.Mappers.UserMapper;
import com.example.onlinePharmacy.Model.User;
import com.example.onlinePharmacy.Repositries.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignUpInService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;



    public boolean isEmailFound(String email) {
        return userRepo.findUserByEmail(email).isPresent();
    }

    public boolean recordNewUser(UserDto user) {
        if(isEmailFound(user.getEmail())) return false;
        User newUser = UserMapper.DtoToUser(user);
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepo.save(newUser);
        return true;
    }

    public boolean authenticate(SignInDto signInDto) {
        Optional<User> user = userRepo.findUserByEmail(signInDto.getEmail());
        if(user.isPresent()) {
            String encrypted = UserMapper.userToDto(user.get()).getPassword();
            return passwordEncoder.matches(signInDto.getPassword(),encrypted);
        }
        return false;
    }

}
