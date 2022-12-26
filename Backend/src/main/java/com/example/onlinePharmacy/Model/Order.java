package com.example.onlinePharmacy.Model;

import lombok.*;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "Ordering")
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Order {
    @EmbeddedId
    private OrderKey id ;

    @Column(name = "timeStamp", nullable = false, unique = true)
    private Timestamp timestamp;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId("userId")
    @JoinColumn(name = "userId")
    private User user ;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId("product_id")
    @JoinColumn(name = "product_id")
    private Product product ;

    @Column(name = "quantity", nullable = false)
    private Integer quantity ;

    @Column(name = "cost", nullable = false)
    private double cost ;



}
