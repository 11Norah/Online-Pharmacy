package com.example.onlinePharmacy.DTOs;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class ProductRatingDTO {

    private Long userId;
    private Long productId;
    private double rating;
}
