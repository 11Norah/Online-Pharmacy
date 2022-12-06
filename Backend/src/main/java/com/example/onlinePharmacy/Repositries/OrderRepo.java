package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.Orders;
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
@Qualifier("orders")
public interface OrderRepo extends JpaRepository<Orders,Long> {

    @Query("SELECT o FROM Orders o WHERE o.id.userId = ?1")
    Optional<List<Orders>> findOrdersByUserId(Long userId) ;

    @Query("SELECT o FROM Orders o WHERE o.id.userId = ?1 AND o.id.productId = ?2")
    Optional<Orders> findOrdersByUserIdAndProductId(Long userId,Long productId) ;

}