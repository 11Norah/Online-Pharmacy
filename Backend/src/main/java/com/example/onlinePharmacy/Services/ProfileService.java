package com.example.onlinePharmacy.Services;


import com.example.onlinePharmacy.DTOs.ProfileDto;
import com.example.onlinePharmacy.Mappers.ProfileMapper;
import com.example.onlinePharmacy.Model.User;
import com.example.onlinePharmacy.Repositries.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProfileService {
    @Autowired
    private UserRepo userRepo ;
    public ProfileDto getUserData(String email){
        User user = userRepo.findUserByEmail(email) ;
        ProfileDto profileDto = null;
        if (user != null ){
            profileDto = ProfileMapper.UserToProfileDto(user) ;
        }
        return profileDto ;
    }
}