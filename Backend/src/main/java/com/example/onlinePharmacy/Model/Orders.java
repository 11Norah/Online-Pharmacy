package com.example.onlinePharmacy.Model;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Orders")
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class Orders {
    @EmbeddedId
    private orderKey id ;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId("userId")
    @JoinColumn(name = "userId")
    private User user ;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @MapsId("productId")
    @JoinColumn(name = "productId")
    private Product product ;

    @Column(name = "orderNumbers", nullable = false)
    private Integer orderNumbers ;

    @Column(name = "cost", nullable = false)
    private double cost ;

    @Column(name = "oDate", nullable = false)
    private LocalDate orderDate;

}
