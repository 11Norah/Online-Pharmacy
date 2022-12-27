package com.example.onlinePharmacy.Milestone3Tests;


import com.example.onlinePharmacy.DTOs.OrderDto;
import com.example.onlinePharmacy.DTOs.OrderProfileDto;
import com.example.onlinePharmacy.Model.Order;
import com.example.onlinePharmacy.Services.OrderServices;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public class OrderServicesTest {

    @Autowired
    OrderServices orderServices ;

    @Test
    public void saveNewOrder(){
        Date date = new Date(System.currentTimeMillis());
        Timestamp timestamp = new Timestamp(date.getTime());
        Long productId = 5L ;
        Long userId = 7L ;
        OrderDto orderDto = new OrderDto() ;
        orderDto.setProductId(productId) ;
        orderDto.setOrderTime(timestamp) ;
        orderDto.setQuantity(7) ;
        orderDto.setUserId(userId);
        boolean flag = orderServices.saveNewOrder(orderDto) ;
        assertTrue(flag) ;
    }

    public List<OrderDto> createListOfOrders(){
        Date date = new Date(System.currentTimeMillis());
        Timestamp timestamp = new Timestamp(date.getTime());
        Long userId = 7L ;
        OrderDto orderDto1 = new OrderDto() ;
        OrderDto orderDto2 = new OrderDto() ;
        OrderDto orderDto3 = new OrderDto() ;
        orderDto1.setProductId(0L) ;
        orderDto1.setOrderTime(timestamp) ;
        orderDto1.setQuantity(2) ;
        orderDto1.setUserId(userId);
        orderDto2.setProductId(5L) ;
        orderDto2.setOrderTime(timestamp) ;
        orderDto2.setQuantity(3) ;
        orderDto2.setUserId(userId);
        orderDto3.setProductId(3L) ;
        orderDto3.setOrderTime(timestamp) ;
        orderDto3.setQuantity(4) ;
        orderDto3.setUserId(userId);
        List<OrderDto> orderDtoList = new ArrayList<>() ;
        orderDtoList.add(orderDto1) ;
        orderDtoList.add(orderDto2) ;
        orderDtoList.add(orderDto3) ;
        return orderDtoList ;
    }

    @Test
    public void saveListOfOrders(){
        List<OrderDto> orderDtoList = createListOfOrders() ;
        boolean flag = orderServices.saveListOfOrders(orderDtoList) ;
        assertTrue(flag) ;
    }

    @Test
    public void getUserOrders(){
        List<Order> orderList = orderServices.getUserOrders(21L) ;
        assertEquals(orderList.size() , 2);
    }

    @Test
    public void getUserEmptyOrderList(){
        List<Order> orderList = orderServices.getUserOrders(7L) ;
        assertEquals(orderList.size() , 0 );
    }

    @Test
    public void getUserOrdersDto(){
        List<OrderProfileDto> orderProfileDtoList = orderServices.getUserOrdersList(7L) ;
        for (OrderProfileDto orderProfileDto : orderProfileDtoList){
            System.out.print(orderProfileDto.getIndicator());
        }
        assertEquals(orderProfileDtoList.size() , 7) ;
    }

}
