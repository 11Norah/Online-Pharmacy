package com.example.onlinePharmacy.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class Product {
    @Id

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column
    private String category;
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



}