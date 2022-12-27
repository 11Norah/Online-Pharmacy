package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.OrderDto;
import com.example.onlinePharmacy.DTOs.OrderProfileDto;
import com.example.onlinePharmacy.Model.Order;
import com.example.onlinePharmacy.Model.OrderKey;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import com.example.onlinePharmacy.Repositries.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {

    @Autowired
    UserRepo userRepo ;
    @Autowired
    ProductRepo productRepo ;

    public Order mapOrderDtoToOrder(OrderDto orderDto){
        OrderKey orderKey = new OrderKey(orderDto.getUserId() ,orderDto.getProductId() ,orderDto.getOrderTime()) ;
        return Order.builder()
                .id(orderKey)
                .user(userRepo.findById(orderDto.getUserId()).get())
                .product(productRepo.findById(orderDto.getProductId()).get())
                .quantity(orderDto.getQuantity())
                .cost(productRepo.findById(orderDto.getProductId()).get().getPrice() * orderDto.getQuantity())
                .build();
    }

    public OrderProfileDto mapOrderToProfileOrderDto(Order order){
        OrderKey orderKey = order.getId() ;
        Product product = productRepo.findById(orderKey.getProductId()).get() ;
        return OrderProfileDto.builder()
                .cost(order.getCost())
                .quantity(order.getQuantity())
                .orderTime(orderKey.getTimestamp())
                .productName(product.getName())
                .type(product.getType())
                .imageUrl(product.getImage())
                .indicator(0)
                .build();
    }

}
