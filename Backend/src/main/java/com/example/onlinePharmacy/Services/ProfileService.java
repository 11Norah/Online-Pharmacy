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

    private static final int USER_NOT_FOUND = -1;
    @Autowired
    private UserRepo userRepo ; //repository to handle queries of User relation.

    @Autowired
    private PasswordEncoder encoder; //password encoder to encrypt and decrypt user passwords.

    public ProfileDto getUserData(String email){
        User user = userRepo.findUserByEmail(email) ;
        ProfileDto profileDto = null;
        if (user != null ){
            profileDto = ProfileMapper.UserToProfileDto(user) ;
        }
        return profileDto ;
    }

    public int editUserProfile(ProfileDto profile) {
        String email = profile.getEmail();
        User user = userRepo.findUserByEmail(email);
        if(user == null) return USER_NOT_FOUND;
        //set personal info
        user.setFirstName(profile.getFirstName());
        user.setLastName(profile.getLastName());
        user.setAddress(profile.getAddress());
        user.setPhoneNumber(profile.getPhoneNumber());
        user.setBirth_date(LocalDate.parse(profile.getBirthDate()));
        //save new record in database
        userRepo.save(user);
        ProfileDto newProfile = ProfileMapper.UserToProfileDto(user);
        //calculate and return user age.
        //relevant if user changed his/her birthdate.
        return newProfile.getAge();
    }

    public boolean updatePassword(SignInDto editedLoginInfo) {
        User user = userRepo.findUserByEmail(editedLoginInfo.getEmail());
        if(user == null) return false; //user not found
        user.setPassword(encoder.encode(editedLoginInfo.getPassword()));
        userRepo.save(user);
        return true; //password set successfully.
    }
}