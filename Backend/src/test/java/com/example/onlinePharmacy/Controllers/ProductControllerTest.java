package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Services.ProductService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
class ProductControllerTest {
    @Autowired
    ProductController productController;
    @Autowired
    ProductService productService;

    @Test
    void getAllProducts() {
        List<ProductDto> productDtoList = productController.getAllProducts();
        assertNotEquals(productDtoList.size(), 0);
    }

    @Test
    void getTop10Products() {
        List<ProductDto> productDtoList = productController.getTop10Products();
        assertEquals(productDtoList.size(), 10);
    }

    @Test
    void getProductById() {
        ProductDto productDto = productController.getProductById(1L);
        assertNotNull(productDto);
        assertEquals(productDto.getProduct_id(), 1L);
    }

    @Test
    void getProductsByCategory() {
    }

    @Test
    void getProductsById() {
        ArrayList<Long> iDs = new ArrayList<>();
        iDs.add(1L);
        iDs.add(2L);
        iDs.add(3L);
        List<ProductDto> productDtoList = productController.getProductsById(iDs);
        assertEquals(productDtoList.size(), iDs.size());
        for (int i = 0; i < iDs.size(); i++) {
            assertEquals(productDtoList.get(i).getProduct_id(), iDs.get(i));
        }
    }

    @Test
    @Transactional
    @Rollback(value = true)
    void changeRate() {
        ProductDto productDto = productController.getProductById(0L);
        double prevRate = productDto.getRate();
        productController.changeProductRate(0L, 5);
        assertNotEquals(productController.getProductById(0L).getRate(), prevRate);
    }
}