package com.example.onlinePharmacy.Model;

import javax.persistence.*;

import java.util.List;

@Entity
@Table(name = "Consultation")
public class Consultation {
    @Id
    @Column(name = "diagnosisName", nullable = false)
    private String diagnosis;

    @OneToMany(mappedBy = "diagnosis", fetch = FetchType.LAZY)
    private List<Product> product;

}