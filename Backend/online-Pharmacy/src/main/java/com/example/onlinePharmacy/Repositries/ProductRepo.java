package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepo extends CrudRepository<Product, Integer> {

}