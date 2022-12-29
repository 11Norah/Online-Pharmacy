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

public class OrderKey implements Serializable{

    @Column(name = "userId", nullable = false)
    private Long userId ;

    @Column(name = "productId", nullable = false)
    private Long productId ;

    @Column(name = "timeStamp", nullable = false)
    private Timestamp timestamp ;

}
