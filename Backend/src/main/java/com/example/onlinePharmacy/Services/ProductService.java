package com.example.onlinePharmacy.Services;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.DTOs.ProductRatingDTO;
import com.example.onlinePharmacy.Mappers.ProductMapper;
import com.example.onlinePharmacy.Mappers.ProductRatingMapper;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Model.ProductRating;
import com.example.onlinePharmacy.Model.ProductRatingKey;
import com.example.onlinePharmacy.Repositries.ProductRatingRepo;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import com.example.onlinePharmacy.Repositries.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Qualifier;
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
    @Autowired
    public ProductRatingRepo productRatingRepo;
    @Autowired
    private UserRepo userRepo;

    public ProductDto getProduct(Optional<Product> product) throws Exception {
        if (product.isPresent()) {
            return ProductMapper.mapProductToDto(product.get());
        } else {
            throw new Exception();
        }
    }

    public List<ProductDto> getProductsByID(List<Long> iDs) throws Exception {
        List<ProductDto> productDtoList = new ArrayList<>();
        for (Long id : iDs) {
            productDtoList.add(getProduct(productRepo.findById(id)));
        }
        return productDtoList;
    }

    public double changeProductRate(Long id, double userNewRate, boolean isNew, double userPrevRate) throws Exception {
        int numOfRates;
        ProductDto productDto = getProduct(productRepo.findById(id));
        numOfRates = productDto.getNumOfRates();
        double newRate;
        if (!isNew) {
            double prevTotalRate = productDto.getRate() * numOfRates;
            double currTotalRate = prevTotalRate - userPrevRate + userNewRate;
            newRate = currTotalRate / numOfRates;
        } else {
            productDto.setNumOfRates(numOfRates + 1);
            newRate = ((productDto.getRate() * numOfRates) + userNewRate) / (numOfRates + 1);
        }
        productDto.setRate(newRate);
        productRepo.save(ProductMapper.mapDtoToProduct(productDto));
        return newRate;
    }

    public double rate(ProductRatingDTO productRatingDTO) throws Exception {
        Optional<ProductRating> optionalProductRating = productRatingRepo.findById(new ProductRatingKey(productRatingDTO.getUserId(), productRatingDTO.getProductId()));
        double newRate;
        if (optionalProductRating.isEmpty()) {
            newRate = changeProductRate(productRatingDTO.getProductId(), productRatingDTO.getRating(), true, 0);
        } else {
            newRate = changeProductRate(productRatingDTO.getProductId(), productRatingDTO.getRating(), false, optionalProductRating.get().getRating());
        }
        ProductRating productRating = ProductRatingMapper.mapToProductRating(productRatingDTO);
        productRating.setUser(userRepo.findById(productRatingDTO.getUserId()).get());
        productRating.setProduct(productRepo.findById(productRatingDTO.getProductId()).get());
        productRatingRepo.save(productRating);
        return newRate;

    }

}
