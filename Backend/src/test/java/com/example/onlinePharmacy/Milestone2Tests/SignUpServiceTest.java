package com.example.onlinePharmacy.Milestone2Tests;

import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.RequestBodies.TokenObject;
import com.example.onlinePharmacy.Services.SignUpService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc

@Transactional
@Rollback()
public class SignUpServiceTest {

    @Autowired
    SignUpService signUpService ;

    public UserDto initiateUserRecord1(){
        UserDto userDto = new UserDto() ;
        userDto.setEmail("hebamostafa9801@gmail.com");
        userDto.setPassword("123456");
        userDto.setPDrug(false);
        userDto.setFirstName("Heba");
        userDto.setLastName("Mostafa");
        userDto.setPhoneNumber("01279556756");
        userDto.setBirth_date("2001-08-09");
        userDto.setAddress("Egypt,Alexandria");
        userDto.setUserId(1);
        return  userDto ;
    }




    @Test
    @Transactional
    @Rollback()
    public void RecordNewUserTest(){
        boolean  flag = signUpService.recordNewUser(initiateUserRecord1()) ;
        assertTrue(flag) ;
    }


    public UserDto initiateUserRecord(){
        UserDto userDto = new UserDto() ;
        userDto.setEmail("aliaa.ebrahem21@gmail.com");
        userDto.setPassword("1234");
        userDto.setPDrug(false);
        userDto.setFirstName("Aliaa");
        userDto.setLastName("Ibrahim");
        userDto.setPhoneNumber("01279556756");
        userDto.setBirth_date("2001-08-09");
        userDto.setAddress("Egypt,Alexandria");
        userDto.setUserId(1);
        return  userDto ;
    }

    @Test
    public void receiveWrongTokenFromUser() {
        TokenObject tokenObject = new TokenObject("hebamostafa9801@gmail.com","token") ;
        int res = signUpService.activateAccount(tokenObject) ;
        assertEquals(res  ,1) ;
    }

    @Test
    public void SignUpRegisteredUser(){
        boolean  flag = signUpService.recordNewUser(initiateUserRecord()) ;
        assertFalse(flag) ;
    }

    @Test
    public void SendActivationTokenToUnRegisteredUser(){
        boolean flag = signUpService.sendActivationToken("hebamostafa@gmail.com") ;
        assertFalse(flag) ;
    }

    @Test
    public void sendActivationTokenToEnabledUser(){
        boolean flag = signUpService.sendActivationToken("aliaa.ebrahem21@gmail.com") ;
        assertFalse(flag) ;
    }


    @Test
    public void sendActivationTokenToUnEnabledUser(){
        boolean flag = signUpService.sendActivationToken("hebamostafa9801@gmail.com") ;
        assertTrue(flag);
    }


    @Test
    public void receiveTokenFromUnRegisteredUser() {
        TokenObject tokenObject = new TokenObject("rahmamostafa@gmail.com","token") ;
        int res = signUpService.activateAccount(tokenObject) ;
        assertEquals(res  ,0) ;
    }

    @Test
    public void receiveTokenFromEnabledUser() {
        TokenObject tokenObject = new TokenObject("sleemnorah@yahoo.com","token") ;
        int res = signUpService.activateAccount(tokenObject) ;
        assertEquals(res  ,4) ;
    }

}
