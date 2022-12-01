package com.example.onlinePharmacy.DTOs;

import lombok.*;

@Setter
@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

public class ConsultationDto {

    private String category ;
    private String productName ;

}
