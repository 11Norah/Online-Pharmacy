package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.Order;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
@Component
@Qualifier("Order")
public interface OrderRepo extends JpaRepository<Order,Long> {

    List<Order> findByIdUserId(Long userId) ;

}