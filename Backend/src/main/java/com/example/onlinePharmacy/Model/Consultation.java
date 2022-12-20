package com.example.onlinePharmacy.Model;

import lombok.*;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "Consultationss")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Consultation {
    @Id
    @Column(name = "diagnosisName", nullable = false)
    private String diagnosis;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "diagnosis")
    private List<Product> products;

}
