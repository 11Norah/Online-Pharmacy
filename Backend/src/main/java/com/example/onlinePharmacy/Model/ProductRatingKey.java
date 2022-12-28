package com.example.onlinePharmacy.Model;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductRatingKey implements Serializable {

    @Column(name = "userId", nullable = false)
    private Long userId;

    @Column(name = "product_id", nullable = false)
    private Long product_id;

}