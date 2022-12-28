package com.example.onlinePharmacy.DTOs;


import lombok.*;

import java.sql.Timestamp;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class OrderProfileDto {
    private Integer indicator ;
    private String productName ;
    private String type ;
    private String imageUrl ;
    private double cost ;
    private Integer quantity ;
    private Timestamp orderTime ;
}
