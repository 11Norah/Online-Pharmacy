package com.example.onlinePharmacy.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    @Getter
    @Setter
    private String name;
    @Column
    @Getter
    @Setter
    private String type;
    @Column
    @Getter
    @Setter
    private String description;
    @Column
    @Getter
    @Setter
    private String image;
    @Column
    @Getter
    @Setter
    private boolean permission;
    @Column
    @Getter
    @Setter
    private double price;
    @Column
    @Getter
    @Setter
    private double rate;


}
