package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.User;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
@Component
@Qualifier("users")
public interface UserRepo extends JpaRepository<User,Long> {

    User findUserByEmail(String email) ;

}