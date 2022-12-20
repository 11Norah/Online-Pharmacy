package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.DTOs.SignInDto;
import com.example.onlinePharmacy.Mappers.UserMapper;
import com.example.onlinePharmacy.Model.User;
import com.example.onlinePharmacy.Repositries.UserRepo;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignInService {
    @Autowired
    private UserRepo userRepo;

    public static final int NOT_REGISTERED = 0;
    public static final int WRONG_PASSWORD = 1;
    public static final int NOT_ACTIVATED = 2;
    public static final int SUCCESS = 3;

    public int authenticate(SignInDto signInDto) {
        User user = userRepo.findUserByEmail(signInDto.getEmail());
        if(!isRegistered(user)) return NOT_REGISTERED;
        else if(!isAuthenticated(user, signInDto.getPassword())) return WRONG_PASSWORD;
        else if(!isActivated(user)) return NOT_ACTIVATED;
        else return SUCCESS;
    }

    private boolean isRegistered(User user) {
        return user != null;
    }

    private boolean isAuthenticated(@NotNull User user, @NotNull String password) {
        String truePassword = user.getPassword();
        return password.equals(truePassword);
    }

    private boolean isActivated(@NotNull User user) {
        return user.isEnabled();
    }

}
