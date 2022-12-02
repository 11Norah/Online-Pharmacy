package com.example.onlinePharmacy.Controllers;

import com.example.onlinePharmacy.Model.Product;
import com.example.onlinePharmacy.Repositries.ProductRepo;
import com.example.onlinePharmacy.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // This means that this class is a Controller
@RequestMapping(path = "/products") // This means URL's start with /demo (after Application path)
public class ProductController {
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private ProductService productService;

    @PostMapping(path = "/addProduct") // Map ONLY POST Requests
    public @ResponseBody String addNewProduct(@RequestParam String name
            , @RequestParam String description, @RequestParam String image, @RequestParam boolean permission, @RequestParam double price, @RequestParam String type) {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setImage(image);
        product.setPermission(permission);
        product.setPrice(price);
        product.setType(type);
        product.setNumOfRates(0);
        productRepo.save(product);
        return "added";
    }

    @GetMapping(path = "/getAllProducts")
    public @ResponseBody Iterable<Product> getAllUsers() {
        return productRepo.findAll();
    }

    @GetMapping(path = "/getByType")
    public @ResponseBody Iterable<Product> getProductsByCategory(@RequestParam String type) {
        return productRepo.findAllByType(type);
    }

    @PostMapping(path = "/changeRate")
    public @ResponseBody String changeProductRate(@RequestParam Long id, @RequestParam int rate) {
        try {
            productService.changeProductRate(id, rate);
            return "Changed";
        } catch (Exception e) {
            return "id notFound";
        }
    }
}