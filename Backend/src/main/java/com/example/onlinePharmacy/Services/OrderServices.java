package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.Model.Order;
import com.example.onlinePharmacy.Repositries.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServices {
    @Autowired
    OrderRepo orderRepo;

    public void saveNewOrder(Order order) {
        order.setCost(order.getProduct().getPrice() * order.getQuantity());
        orderRepo.save(order);
    }
}
