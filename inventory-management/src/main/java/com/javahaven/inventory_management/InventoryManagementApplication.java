package com.javahaven.inventory_management;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class InventoryManagementApplication {

    @Autowired
    private Dotenv dotenv;

    public static void main(String[] args) {
        SpringApplication.run(InventoryManagementApplication.class, args);
    }
    @PostConstruct
    public void printEnvVariables() {
        System.out.println("DATABASE_URL: " + dotenv.get("DATABASE_URL"));
        System.out.println("DATABASE_USERNAME: " + dotenv.get("DATABASE_USERNAME"));
        System.out.println("DATABASE_PASSWORD: " + dotenv.get("DATABASE_PASSWORD"));
    }
}
