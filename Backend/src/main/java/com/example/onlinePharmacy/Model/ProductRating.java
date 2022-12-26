package com.example.onlinePharmacy.Model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "ProductRating")
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductRating {

    @EmbeddedId
    private ProductRatingKey id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "userId")
    private User user;

    @ManyToOne
    @MapsId("product_id")
    @JoinColumn(name = "product_id")
    private Product product;

    private double rating;

}