package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.Mappers.UserMapper;
import com.example.onlinePharmacy.Model.User;
import com.example.onlinePharmacy.Repositries.UserRepo;
import com.example.onlinePharmacy.RequestBodies.TokenObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class SignUpService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    TokenService tokenService;

    private static final int NOT_REGISTERED = 0;
    private static final int INVALID = 1;
    private static final int EXPIRED = 2;
    private static final int SUCCESS = 3;
    private static final int ACTIVATED = 4;

    public boolean isEmailFound(String email) {
        return userRepo.findUserByEmail(email) != null;
    }

    public boolean recordNewUser(UserDto user) {
        if(isEmailFound(user.getEmail())) return false;
        User newUser = UserMapper.DtoToUser(user);
        userRepo.save(newUser);
        sendActivationToken(user.getEmail());
        return true;
    }

    public boolean sendActivationToken(String email) {
        User user = userRepo.findUserByEmail(email);
        if(user == null || user.isEnabled()) return false;
        else {
            String token = tokenService.getToken(UserMapper.userToDto(user));
            sendVerificationEmail(email, token);
            return true;
        }
    }

    public void sendVerificationEmail(String userEmail, String token) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(userEmail);
        mail.setSubject("AHMENA Pharmacy Account - Email Verification");
        mail.setText("Complete your registration by typing the token below.\nNote that it will expire within 10 minutes\nToken: " + token);
        mailSender.send(mail);
    }

    public int activateAccount(TokenObject tokenObject) {
        String token = tokenObject.getToken();
        String email = tokenObject.getUserEmail();
        User registeredUser = userRepo.findUserByEmail(email);
        if(registeredUser == null) return NOT_REGISTERED;
        else if(registeredUser.isEnabled()) return ACTIVATED;
        else if(!tokenService.isValidToken(token, registeredUser)) return INVALID;
        else if(tokenService.isTokenExpired(token)) return EXPIRED;
        else {
            registeredUser.setEnabled(true);
            userRepo.save(registeredUser);
            return SUCCESS;
        }
    }

}
