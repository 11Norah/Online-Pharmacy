package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Mappers.ProductMapper;
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

    public ProductDto getProduct(Optional<Product> product) throws Exception {
        if (product.isPresent()) {
            return ProductMapper.mapProductToDto(product.get());
        } else {
            throw new Exception();
        }
    }

    public void changeProductRate(Long id, int rate) throws Exception {
        ProductDto productDto = getProduct(productRepo.findById(id));
        productDto.setNumOfRates(productDto.getNumOfRates() + 1);
        productDto.setRate((productDto.getRate() + rate) / productDto.getNumOfRates());
        productRepo.save(ProductMapper.mapDtoToProduct(productDto));
    }

    public void deleteProducts(){
        productRepo.deleteAll();
    }
}
