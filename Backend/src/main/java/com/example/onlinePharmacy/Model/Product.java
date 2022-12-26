package com.example.onlinePharmacy.Model;

import lombok.*;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Table(name = "Products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long product_id;
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
    @Column
    private int numOfRates;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Consultation> diagnosis;

    @OneToMany(mappedBy = "product")
    private Set<ProductRating> ratings;


}