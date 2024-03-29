package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.DTOs.ProductRatingDTO;
import com.example.onlinePharmacy.Mappers.ProductMapper;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import com.example.onlinePharmacy.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private ProductService productService;

    @GetMapping(path = "/getAllProducts")
    public @ResponseBody List<ProductDto> getAllProducts() {
        List<ProductDto> productDtos = ProductMapper.bulkMappingFromProductToDto((List<Product>) productRepo.findAll());
        return productDtos;
    }

    @GetMapping(path = "/getTopProducts")
    public @ResponseBody List<ProductDto> getTop10Products() {
        List<ProductDto> productDtos = ProductMapper.bulkMappingFromProductToDto(productRepo.findTop10ByOrderByRateDesc());
        return productDtos;
    }

    @GetMapping(path = "/getProductsById")
    public @ResponseBody List<ProductDto> getProductsById(List<Long> iDs) {
        try {
            return productService.getProductsByID(iDs);
        } catch (Exception e) {
            return null;
        }
    }

    @GetMapping(path = "/getByType")
    public @ResponseBody Iterable<ProductDto> getProductsByCategory(@RequestParam String type) {
        return ProductMapper.bulkMappingFromProductToDto(productRepo.findAllByType(type));
    }

    @GetMapping(path = "/getById")
    public @ResponseBody ProductDto getProductById(@RequestParam Long id) {
        try {
            return productService.getProduct(productRepo.findById(id));
        } catch (Exception e) {
            return null;
        }
    }

    @PostMapping(path = "/changeRate")
    public @ResponseBody double changeProductRate(@RequestBody ProductRatingDTO productRatingDTO) {
        double newRate = -1;
        try {
            newRate = productService.rate(productRatingDTO);
            return newRate;
        } catch (Exception e) {
            return newRate;
        }
    }

    @GetMapping(path = "/userRate")
    public double getUserRate(@RequestParam Long userId, @RequestParam Long productId) {
        return productService.getUserRate(userId, productId);
    }

    //get products with names containing "searchTerm'.
    @GetMapping(path = "/search")
    public List<ProductDto> getMatchedProducts(@RequestParam String searchTerm) {
        return productService.getMatchedProducts(searchTerm);
    }

}