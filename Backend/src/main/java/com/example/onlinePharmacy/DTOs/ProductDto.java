package com.example.onlinePharmacy.DTOs;

import lombok.*;

import java.util.List;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class ProductDto {
    private Long product_id ;
    private String name;
    private String type;
    private String description;
    private String image;
    private boolean permission;
    private double price;
    private double rate;
    private int numOfRates;

}
