package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.DTOs.UserDto;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Model.User;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.function.Consumer;

@Component
public class ProductMapper {
    public static ProductDto mapProductToDto(Product p) {
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

    public static Product mapDtoToProduct(ProductDto p) {
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

    public static ArrayList<Product> bulkMappingFromDtoToProduct(List<ProductDto> productDtos) {
        ArrayList<Product> products = new ArrayList<>();
        for (ProductDto productDto : productDtos) {
            products.add(mapDtoToProduct(productDto));
        }
        return products;
    }
    public static ArrayList<Long> getIDsFromProduct(List<Product> products) {
        ArrayList<Long> IDs = new ArrayList<>();
        for (Product product : products) {
            IDs.add(product.getProduct_id());
        }
        return IDs;
    }
    public static ArrayList<Long> getIDsFromDto(List<ProductDto> products) {
        ArrayList<Long> IDs = new ArrayList<>();
        for (ProductDto product : products) {
            IDs.add(product.getProduct_id());
        }
        return IDs;
    }

    public static ArrayList<ProductDto> bulkMappingFromProductToDto(List<Product> products) {
        ArrayList<ProductDto> productDtos = new ArrayList<>();
        for (Product product : products) {
            productDtos.add(mapProductToDto(product));
        }
        return productDtos;
    }
}
