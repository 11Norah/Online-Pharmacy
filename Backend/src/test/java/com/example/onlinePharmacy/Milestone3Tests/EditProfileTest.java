package com.example.onlinePharmacy.Milestone3Tests;

import com.example.onlinePharmacy.DTOs.ProfileDto;
import com.example.onlinePharmacy.DTOs.SignInDto;
import com.example.onlinePharmacy.Repositries.UserRepo;
import com.example.onlinePharmacy.Services.ProfileService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.password.PasswordEncoder;


import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public class EditProfileTest {
    @Autowired
    private ProfileService profileService;

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder encoder;

    @Test
    void findRealProfile() {
        String email = "sleemnorah@yahoo.com";
        ProfileDto profileDto = profileService.getUserData(email);
        assertNotNull(profileDto);
        assertEquals(profileDto.getEmail(), email);
    }

    @Test
    void findUnrealProfile() {
        String email = "abc@abc.com";
        ProfileDto profileDto = profileService.getUserData(email);
        assertNull(profileDto);
    }

    @Test
    void editUserProfile() {
        String email = "sleemnorah@yahoo.com";
        ProfileDto profileDto = profileService.getUserData(email);
        String newAddress = "Cairo";
        profileDto.setAddress(newAddress);
        profileService.editUserProfile(profileDto);
        assertEquals(profileService.getUserData(email).getAddress(), newAddress);
    }

    @Test
    void editMultiData() {
        String email = "sleemnorah@yahoo.com";
        ProfileDto profileDto = profileService.getUserData(email);
        String newAddress = "Tanta";
        String newPhoneNumber = "011111";
        profileDto.setAddress(newAddress);
        profileDto.setPhoneNumber(newPhoneNumber);
        profileService.editUserProfile(profileDto);
        assertEquals(profileService.getUserData(email).getAddress(), newAddress);
        assertEquals(profileService.getUserData(email).getPhoneNumber(), newPhoneNumber);
    }

    @Test
    void updatePassword() {
        SignInDto signInDto = new SignInDto();
        signInDto.setEmail("aliaa.ebrahem21@gmail.com");
        signInDto.setPassword("adf");
        profileService.updatePassword(signInDto);
        boolean match = encoder.matches("adf", userRepo.findUserByEmail(signInDto.getEmail()).getPassword());
        assertTrue(match);
    }

}
