package com.example.onlinePharmacy.Milestone2Tests;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.DTOs.SignInDto;
import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.RequestBodies.ChangeRateReqBody;
import com.example.onlinePharmacy.Services.SignInService;
import com.example.onlinePharmacy.Services.SignUpService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
@Transactional
public class SignInServicesTest {

    @Autowired
    SignInService signInService;
    @Autowired
    SignUpService signUpService;


    private SignInDto getActivatedSignInDTO() {
        SignInDto signInDto = new SignInDto();
        signInDto.setEmail("sleemnorah@yahoo.com");
        signInDto.setPassword("11111");
        return signInDto;
    }

    private SignInDto getWrongPasswordSignInDTO() {
        SignInDto signInDto = new SignInDto();
        signInDto.setEmail("sleemnorah@yahoo.com");
        signInDto.setPassword("asdf");
        return signInDto;
    }

    private SignInDto getWNotRegisteredEmailSignInDTO() {
        SignInDto signInDto = new SignInDto();
        signInDto.setEmail("engy@gmail.com");
        signInDto.setPassword("abc123");
        return signInDto;
    }

    @Test
    void authenticateActivatedUser() {
        int res = signInService.authenticate(getActivatedSignInDTO());
        assertEquals(3, res);
    }

    @Test
    @Transactional
    @Rollback(value = true)
    void authenticateNotActivatedUser() {
        UserDto userDto = new UserDto();
        userDto.setEmail("aliaa12@gmail.com");
        userDto.setPassword("qaz");
        userDto.setBirth_date("2021-11-11");
        userDto.setPhoneNumber("123400");
        userDto.setAddress("Address");
        userDto.setPDrug(false);
        userDto.setFirstName("Aliaa");
        userDto.setLastName("Ibrahem");
        signUpService.recordNewUser(userDto);
        SignInDto signInDto = new SignInDto();
        signInDto.setEmail("aliaa12@gmail.com");
        signInDto.setPassword("qaz");
        int res = signInService.authenticate(signInDto);
        assertEquals(2, res);
    }

    @Test
    void authenticateWrongPasswordUser() {
        int res = signInService.authenticate(getWrongPasswordSignInDTO());
        assertEquals(1, res);
    }

    @Test
    void authenticateNotRegisteredEmailUser() {
        int res = signInService.authenticate(getWNotRegisteredEmailSignInDTO());
        assertEquals(0, res);
    }
}
