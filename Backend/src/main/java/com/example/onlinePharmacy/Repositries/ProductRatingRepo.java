package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.ProductRating;
import com.example.onlinePharmacy.Model.ProductRatingKey;
import com.example.onlinePharmacy.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRatingRepo  extends JpaRepository<ProductRating, ProductRatingKey> {
}
