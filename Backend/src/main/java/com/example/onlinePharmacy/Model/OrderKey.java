package com.example.onlinePharmacy.Model;

import lombok.*;

import java.io.Serializable;
import java.sql.Timestamp;
import javax.persistence.*;

@Embeddable
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class OrderKey implements Serializable {

    @Column(name = "userId", nullable = false)
    private Long userId;
    @Column(name = "product_id", nullable = false)
    private Long product_id;

}
