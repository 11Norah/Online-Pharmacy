package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.DTOs.OrderDto;
import com.example.onlinePharmacy.DTOs.OrderProfileDto;
import com.example.onlinePharmacy.Services.OrderServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OrdersController {
    @Autowired
    OrderServices orderServices ;

    @GetMapping(path = "/getUserOrders")
    public @ResponseBody List<OrderProfileDto> returnAllUserOrders(@RequestParam Long userId){
        return orderServices.getUserOrdersList(userId) ;
    }

    @GetMapping(path = "/saveUserOrders")
    public void saveUserOrders(@RequestParam List<OrderDto> orderDto){
        orderServices.saveListOfOrders(orderDto) ;
    }

}