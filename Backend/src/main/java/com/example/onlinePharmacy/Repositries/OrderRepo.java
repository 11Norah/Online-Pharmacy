package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.Order;
import com.example.onlinePharmacy.Model.OrderKey;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Component
@Qualifier("orders")
public interface OrderRepo extends JpaRepository<Order, OrderKey> {
    @Query("SELECT o.product AS product,o.quantity As quantity FROM Order AS o where User.id = :userId GROUP BY o.timestamp,o.user")
    List<IOrderCount> getAllByUserAndTimestamp(@Param("userId") Long userId);
}