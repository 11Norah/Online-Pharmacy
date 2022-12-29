package com.example.onlinePharmacy.Mappers;

import com.example.onlinePharmacy.DTOs.ProductRatingDTO;
import com.example.onlinePharmacy.DTOs.ProfileDto;
import com.example.onlinePharmacy.Model.ProductRating;
import com.example.onlinePharmacy.Model.ProductRatingKey;
import com.example.onlinePharmacy.Model.User;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import com.example.onlinePharmacy.Repositries.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.time.Period;

public class ProductRatingMapper {

    public static ProductRatingDTO mapToDTO(ProductRating productRating) {
        return ProductRatingDTO.builder()
                .rating(productRating.getRating())
                .userId(productRating.getId().getUserId())
                .productId(productRating.getId().getProduct_id())
                .build();
    }

    public static ProductRating mapToProductRating(ProductRatingDTO productRatingDTO) {
        return ProductRating.builder()
                .rating(productRatingDTO.getRating())
                .id(new ProductRatingKey(productRatingDTO.getUserId(), productRatingDTO.getProductId()))
                .build();
    }
}
