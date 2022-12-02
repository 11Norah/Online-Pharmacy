package com.example.onlinePharmacy.Model;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "Consultationss")
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Consultation {
    @Id
    @Column(name = "diagnosisName", nullable = false)
    private String diagnosis;


    @ManyToMany(cascade = CascadeType.ALL, mappedBy = "diagnosis")
    private Collection<Product> product_id;

}
