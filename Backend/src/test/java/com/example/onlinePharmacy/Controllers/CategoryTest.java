package com.example.onlinePharmacy.Controllers;


import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import com.example.onlinePharmacy.Services.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public class CategoryTest {

    @Autowired
    private ProductController productController ;
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private ProductService productService ;

    @Test
    public void getSkinCareProducts(){
        List<ProductDto> productDtoList = (List<ProductDto>) productController.getProductsByCategory("Skin Care");
        assertEquals(5,productDtoList.size());
    }
    @Test
    public void getVitaminsProducts(){
        List<ProductDto> productDtoList = (List<ProductDto>) productController.getProductsByCategory("Vitamins");
        assertEquals(5,productDtoList.size());
    }
    @Test
    public void getHairCareProducts(){
        List<ProductDto> productDtoList = (List<ProductDto>) productController.getProductsByCategory("Hair Care");
        assertEquals(5,productDtoList.size());
    }
    @Test
    public void getSMedicationProducts(){
        List<ProductDto> productDtoList = (List<ProductDto>) productController.getProductsByCategory("Medications");
        assertEquals(19,productDtoList.size());
    }
    @Test
    public void getOralCareProducts(){
        List<ProductDto> productDtoList = (List<ProductDto>) productController.getProductsByCategory("Oral Care");
        assertEquals(5,productDtoList.size());
    }
    @Test
    public void getColdAndCoughProducts(){
        List<ProductDto> productDtoList = (List<ProductDto>) productController.getProductsByCategory("Cold and Cough");
        assertEquals(5,productDtoList.size());
    }
    @Test
    public void getHeadacheProducts(){
        List<ProductDto> productDtoList = (List<ProductDto>) productController.getProductsByCategory("Headache");
        assertEquals(5,productDtoList.size());
    }
    @Test
    public void getWeightLossProducts(){
        List<ProductDto> productDtoList = (List<ProductDto>) productController.getProductsByCategory("Weight loss");
        assertEquals(5,productDtoList.size());
    }
    @Test
    public void getWrongProducts(){
        List<ProductDto> productDtoList = (List<ProductDto>) productController.getProductsByCategory("Weight");
        assertEquals(0,productDtoList.size());
    }


}
