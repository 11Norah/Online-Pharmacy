package com.example.onlinePharmacy.DTOs;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class ProductDTO {
    private Long id ;
    private String name;
    private String type;
    private String description;
    private String image;
    private boolean permission;
    private double price;
    private double rate;
}
