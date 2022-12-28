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

public class OrderDto {

    private Long userId ;
    private Long productId ;
    private Integer quantity ;
    private Timestamp orderTime ;

}
