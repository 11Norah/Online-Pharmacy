package com.example.onlinePharmacy.Services;


import com.example.onlinePharmacy.DTOs.ProfileDto;
import com.example.onlinePharmacy.DTOs.SignInDto;
import com.example.onlinePharmacy.Mappers.ProfileMapper;
import com.example.onlinePharmacy.Model.User;
import com.example.onlinePharmacy.Repositries.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;


@Service
public class ProfileService {
    @Autowired
    private UserRepo userRepo ;

    @Autowired
    private PasswordEncoder encoder;

    public ProfileDto getUserData(String email){
        User user = userRepo.findUserByEmail(email) ;
        ProfileDto profileDto = null;
        if (user != null ){
            profileDto = ProfileMapper.UserToProfileDto(user) ;
        }
        return profileDto ;
    }

    public boolean editUserProfile(ProfileDto profile) {
        String email = profile.getEmail();
        User user = userRepo.findUserByEmail(email);
        if(user == null) return false;
        user.setFirstName(profile.getFirstName());
        user.setLastName(profile.getLastName());
        user.setAddress(profile.getAddress());
        user.setPhoneNumber(profile.getPhoneNumber());
        user.setBirth_date(LocalDate.parse(profile.getBirthDate()));
        userRepo.save(user);
        return true;
    }

    public boolean updatePassword(SignInDto signInDto) {
        User user = userRepo.findUserByEmail(signInDto.getEmail());
        if(user == null) return false;
        user.setPassword(encoder.encode(signInDto.getPassword()));
        return true;
    }
}