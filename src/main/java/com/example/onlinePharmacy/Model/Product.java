package com.example.onlinePharmacy.Model;
import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "Product")
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column
    private String type;
    @Column
    private String description;
    @Column
    private String image;
    @Column
    private boolean permission;
    @Column
    private double price;
    @Column
    private double rate;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "productId", nullable = false)
    private Consultation diagnosis;


}