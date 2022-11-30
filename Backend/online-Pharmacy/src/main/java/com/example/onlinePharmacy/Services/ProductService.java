package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Component
public class ProductService {
    @Autowired
    public ProductRepo productRepo;

    public void changeProductRate(Long id, int rate) throws Exception {
        Optional<Product> findProduct = productRepo.findById(id);
        if (findProduct.isPresent()) {
            Product product = findProduct.get();
            product.setNumOfRates(product.getNumOfRates() + 1);
            product.setRate((product.getRate() + rate) / product.getNumOfRates());
            productRepo.save(product);
        } else {
            throw new Exception();
        }
    }
}
