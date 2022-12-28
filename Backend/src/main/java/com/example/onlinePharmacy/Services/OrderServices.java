package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.DTOs.OrderDto;
import com.example.onlinePharmacy.DTOs.OrderProfileDto;
import com.example.onlinePharmacy.Mappers.OrderMapper;
import com.example.onlinePharmacy.Model.Order;
import com.example.onlinePharmacy.Model.OrderKey;
import com.example.onlinePharmacy.Repositries.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;

@Service
public class OrderServices {
    @Autowired
    OrderRepo orderRepo;
    @Autowired
    OrderMapper orderMapper ;

    public boolean saveNewOrder(OrderDto orderDto) {
        Order order = orderMapper.mapOrderDtoToOrder(orderDto) ;
        orderRepo.save(order);
        return true ;
    }

    public boolean saveListOfOrders(List<OrderDto> orderDtoList){
        boolean flag = false ;
        for (OrderDto orderDto : orderDtoList){
            flag = saveNewOrder(orderDto) ;
        }
        return flag ;
    }

    public List<Order> getUserOrders(Long userId){
       return orderRepo.findByIdUserId(userId) ;
    }

    static class sortIndicators implements Comparator<OrderProfileDto> {
        public int compare(OrderProfileDto p1 , OrderProfileDto p2){
            if (Objects.equals(p1.getIndicator(), p2.getIndicator())) {
                return 0;
            }
            else if (p1.getIndicator() < p2.getIndicator()) {
                return 1;
            }
            else {
                return -1;
            }
        }
    }

    public List<OrderProfileDto> getUserOrdersList(Long userId){
        List<Order> orders = getUserOrders(userId) ;
        List<OrderProfileDto> orderProfileDtos = new ArrayList<>() ;
        HashMap<Timestamp , Integer> IndicatorHashMap = new HashMap<>() ;
        int counter = 0 ;
        for (Order order : orders){
            OrderKey orderKey = order.getId() ;
            if (! IndicatorHashMap.containsKey(orderKey.getTimestamp())){
                counter ++ ;
                IndicatorHashMap.put(orderKey.getTimestamp() ,counter) ;
            }
        }
        for (Order order : orders){
            OrderProfileDto orderProfileDto = orderMapper.mapOrderToProfileOrderDto(order) ;
            orderProfileDto.setIndicator(IndicatorHashMap.get(orderProfileDto.getOrderTime())) ;
            orderProfileDtos.add(orderProfileDto) ;
        }
        orderProfileDtos.sort(new sortIndicators());
        return orderProfileDtos ;
    }

}