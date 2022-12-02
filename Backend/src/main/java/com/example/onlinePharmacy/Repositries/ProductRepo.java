package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepo extends CrudRepository<Product, Long> {
    List<Product> findAllByCategory(String category);
}