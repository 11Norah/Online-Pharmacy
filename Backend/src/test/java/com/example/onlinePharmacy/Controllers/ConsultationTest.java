package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.DTOs.ProductDto;
import com.example.onlinePharmacy.Mappers.ConsultationMapper;
import com.example.onlinePharmacy.Repositries.ConsultationRepo;
import com.example.onlinePharmacy.Services.ConsultationService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
@AutoConfigureMockMvc
public class ConsultationTest {
    @Autowired
    private ConsultationController consultationController ;
    @Autowired
    private ConsultationService consultationService ;
    @Autowired
    private ConsultationRepo consultationRepo ;
    @Test
    public void getColdProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Common Cold and Influenza");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getDryCoughProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Dry Cough");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getProductiveCoughProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Productive Cough");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getAcuteBronchitisProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Acute Bronchitis");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getConstipationProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Constipation");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getIrritableColonProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Irritable Colon");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getHyperacidityProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Hyperacidity");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getGastritisProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Gastritis");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getMouthUlcersProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Mouth Ulcers");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getEarWaxAndPainProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Ear Wax and Pain");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getToothacheProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Toothache");
        assertNotEquals(0,productDtoList.size());
    }
    @Test
    public void getEyeCongestionProducts(){
        List<ProductDto> productDtoList = consultationController.getTreatments("Eye Congestion");
        assertNotEquals(0,productDtoList.size());
    }


}
