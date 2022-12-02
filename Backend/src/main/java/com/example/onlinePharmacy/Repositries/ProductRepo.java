package com.example.onlinePharmacy.Repositries;

import com.example.onlinePharmacy.Model.Product;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@Component
@Qualifier("products")
public interface ProductRepo extends CrudRepository<Product, Long> {
    List<Product> findAllByType(String type);
}