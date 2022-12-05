package com.example.onlinePharmacy.DTOs;

import com.example.onlinePharmacy.Model.Product;
import lombok.*;

import java.util.List;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ConsultationDto {

    private String diagnosis ;
    private List<Product> products;

}
