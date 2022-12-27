package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Mappers.ProductMapper;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;
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
    public List<ProductDto> getProductsByID(List<Long> iDs) throws Exception {
        List<ProductDto> productDtoList = new ArrayList<>();
        for(Long id : iDs){
            productDtoList.add(getProduct(productRepo.findById(id)));
        }
        return productDtoList;
    }
    public double changeProductRate(Long id, double rate) throws Exception {
        int numOfRates;
        ProductDto productDto = getProduct(productRepo.findById(id));
        numOfRates = productDto.getNumOfRates();
        productDto.setNumOfRates(numOfRates + 1);
        double newRate = ((productDto.getRate() * numOfRates) + rate) / productDto.getNumOfRates();
        productDto.setRate(newRate);
        productRepo.save(ProductMapper.mapDtoToProduct(productDto));
        return newRate;
    }

    public List<ProductDto> getMatchedProducts(@NotNull String searchTerm) {
        if(searchTerm.isEmpty()) return null;
        //query database
        List<Product> matchedProducts = productRepo.findByNameContaining(searchTerm);
        //convert to POJO for request handling.
        List<ProductDto> matchedProductsPOJO = new ArrayList<>();
        for(Product matchedProduct : matchedProducts) {
            matchedProductsPOJO.add(ProductMapper.mapProductToDto(matchedProduct));
        }
        return matchedProductsPOJO;
    }

}
