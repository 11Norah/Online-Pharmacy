package com.example.onlinePharmacy.Controllers;


import com.example.onlinePharmacy.DTOs.ProfileDto;
import com.example.onlinePharmacy.DTOs.SignInDto;
import com.example.onlinePharmacy.Services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProfileController {
    @Autowired
    ProfileService profileService ;

    @GetMapping(path = "/getProfileData")
    public @ResponseBody ProfileDto GetUserData(@RequestParam String email){
        return profileService.getUserData(email) ;
    }

    //edit all user personal info data.
    @PostMapping(path = "/edit-profile")
    public int editProfile(@RequestBody ProfileDto profileDto) {
        return profileService.editUserProfile(profileDto);
    }

    //edit user password.
    @PostMapping(path = "/update-password")
    public boolean editPassword(@RequestBody SignInDto editedLoginInfo) {
        return profileService.updatePassword(editedLoginInfo);
    }
}
