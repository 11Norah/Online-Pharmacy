package com.example.onlinePharmacy.Controllers;


import com.example.onlinePharmacy.Model.Order;
import com.example.onlinePharmacy.Model.OrderKey;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Repositries.IOrderCount;
import com.example.onlinePharmacy.Repositries.OrderRepo;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import com.example.onlinePharmacy.Repositries.UserRepo;
import com.example.onlinePharmacy.Services.OrderServices;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OrdersController {
    @Autowired
    ProductRepo productRepo;
    @Autowired
    UserRepo userRepo;
    @Autowired
    OrderServices orderServices;
    @Autowired
    @Qualifier("orders")
    private OrderRepo orderRepo;

    @PostMapping(path = "/placeOrder")
    public void placeOrder(@RequestParam Long userId, @RequestParam List<Long> productsIds, @RequestParam List<Integer> quantities) {
        Order order;
        Date date = new Date(System.currentTimeMillis());
        Timestamp timestamp = new Timestamp(date.getTime());
        for (int i = 0; i < productsIds.size(); i++) {
            Long productId = productsIds.get(i);
            OrderKey orderKey = new OrderKey(userId, productId);
            order = new Order(orderKey,timestamp, userRepo.findById(userId).get(), productRepo.findById(productId).get(),quantities.get(i), 0);
            orderServices.saveNewOrder(order);
        }
    }
    @PostMapping(path = "/getUserOrders")
    public void placeOrder(@RequestParam Long userId) {
        List<IOrderCount> list = orderRepo.getAllByUserAndTimestamp(userId);
        System.out.println();
    }
}
