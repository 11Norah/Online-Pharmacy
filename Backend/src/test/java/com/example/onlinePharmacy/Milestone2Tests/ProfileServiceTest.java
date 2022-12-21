package com.example.onlinePharmacy.Milestone2Tests;


import com.example.onlinePharmacy.Controllers.ProfileController;
import com.example.onlinePharmacy.DTOs.ProfileDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc

public class ProfileServiceTest {
    @Autowired
    ProfileController profileController ;

    @Test
    public void TestProfileServiceWithCorrectEmail(){
        ProfileDto profileDto = profileController.GetUserData("engy.ibrahim74@gmail.com") ;
        System.out.print(profileDto.getAge()) ;
        assertNotEquals(profileDto , null) ;
    }

    @Test
    public void TestProfileServiceWithInCorrectEmail(){
        ProfileDto profileDto = profileController.GetUserData("abc@gmail.com") ;
        assertNull(profileDto);
    }
}
