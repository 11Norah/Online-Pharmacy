package com.example.onlinePharmacy.Model;

import javax.persistence.*;

import java.util.List;

@Entity
public class Consultation {
    @Id
    @Column(name = "diagnosis", nullable = false)
    private String diagnosis;

    @OneToMany(targetEntity = Product.class)
    private List<Integer> productId;


}
