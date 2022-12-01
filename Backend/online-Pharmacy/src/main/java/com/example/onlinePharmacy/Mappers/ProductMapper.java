package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Model.Product;

public class ProductMapper {
    public static ProductDto mapProductToDto(Product p){
        return ProductDto.builder()
                .id(p.getId())
                .name(p.getName())
                .price(p.getPrice())
                .description(p.getDescription())
                .type(p.getType())
                .image(p.getImage())
                .permission(p.isPermission())
                .rate(p.getRate())
                .build();
    }
}
