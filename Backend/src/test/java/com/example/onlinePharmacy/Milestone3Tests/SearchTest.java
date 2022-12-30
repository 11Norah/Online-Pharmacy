package com.example.onlinePharmacy.Milestone3Tests;

import com.example.onlinePharmacy.Controllers.ProductController;
import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Services.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;


import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public class SearchTest {

    @Autowired
    ProductService productService;

    @Test
    void searchWithUnusedSubWord(){
        String searchTerm = "{";
        List<ProductDto> productDTOS = productService.getMatchedProducts(searchTerm);
        assertEquals(productDTOS.size(), 0);
    }

    @Test
    void searchWithUsedSubWord(){
        String searchTerm = "a";
        List<ProductDto> productDTOS = productService.getMatchedProducts(searchTerm);
        assertNotEquals(productDTOS.size(), 0);
    }
    @Test
    void searchWithSpecificWord(){
        String searchTerm = "Organic Cold-Pressed Rose Hip Seed Oil 30ml";
        List<ProductDto> productDTOS = productService.getMatchedProducts(searchTerm);
        assertEquals(productDTOS.size(), 1);
    }
}
