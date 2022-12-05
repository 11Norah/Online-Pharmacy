package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import com.example.onlinePharmacy.Services.ProductService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;
@RunWith(SpringRunner.class)
class ProductControllerTest {
    @Autowired
    private ProductService service;
    @Autowired
    private ProductController controller;
    @MockBean
    private ProductRepo repo;
    @TestConfiguration
    static class getproductconfi{
        @Bean
        public  ProductController controller(){
            return  new ProductController();
        }
    }
    @Test
    public  void getProductsTest(){
        Product product=new Product();
        product.setName("redoxn");
        product.setType("vitamins");
        product.setDescription("vitamin C");
        product.setImage("img.jpj");
        product.setPermission(true);
        product.setPrice(96);
        product.setRate(4.5);
        product.setNumOfRates(5);
        Product product2=new Product();
        product.setName("redoxn");
        product.setType("vitamins");
        product.setDescription("vitamin C");
        product.setImage("img.jpj");
        product.setPermission(true);
        product.setPrice(96);
        product.setRate(4.5);
        product.setNumOfRates(5);
        List<Product> products= Arrays.asList(product,product2);
        when(repo.findAll()).thenReturn(Stream.of(product,product2).collect(Collectors.toList()));
       // given(repo.findAll()).willReturn(products);
        assertEquals(2,controller.getAllProducts().size());
    }
    @Test
    void addNewProduct()throws Exception {
    }

    @Test
    void getAllUsers() {
    }

    @Test
    void getProductsByCategory() {
    }

    @Test
    void changeProductRate() {
    }
}