package com.example.onlinePharmacy.Model;

import lombok.*;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "Userr")
@Getter
@Setter
@EqualsAndHashCode
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class User implements Serializable {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    @Column(name = "userId")
    private Long id;
    @Column(name = "fName", nullable = false)
    private String firstName;
    @Column(name = "lName", nullable = false)
    private String lastName;
    @Column(name = "email", unique = true, nullable = false)
    private String email;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "bDate", nullable = false)
    private LocalDate birth_date;
    @Column(name = "phoneNumber", nullable = false)
    private String phoneNumber;
    @Column(name = "address", nullable = false)
    private String address;
    @Transient
    private Integer age;
    @Column(name = "enabled", nullable = false, columnDefinition = "boolean default false")
    private boolean enabled = false;

    @OneToMany(mappedBy = "user")
    Set<ProductRating> ratings;


    @OneToMany(mappedBy = "user")
    Set<Order> orders;


}
