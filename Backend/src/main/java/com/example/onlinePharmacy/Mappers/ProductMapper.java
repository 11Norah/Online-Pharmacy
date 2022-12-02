package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Model.User;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class ProductMapper {
    public static ProductDto mapProductToDto(Product p){
        return ProductDto.builder()
                .product_id(p.getProduct_id())
                .name(p.getName())
                .price(p.getPrice())
                .description(p.getDescription())
                .type(p.getType())
                .image(p.getImage())
                .permission(p.isPermission())
                .rate(p.getRate())
                .numOfRates(p.getNumOfRates())
                .build();
    }
    public static Product mapDtoToProduct(ProductDto p){
        return Product.builder()
                .product_id(p.getProduct_id())
                .name(p.getName())
                .price(p.getPrice())
                .description(p.getDescription())
                .type(p.getType())
                .image(p.getImage())
                .permission(p.isPermission())
                .rate(p.getRate())
                .numOfRates(p.getNumOfRates())
                .build();
    }
}
