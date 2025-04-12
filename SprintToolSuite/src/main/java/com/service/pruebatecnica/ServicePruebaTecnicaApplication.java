package com.service.pruebatecnica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan({ "com.service.pruebatecnica*" })
public class ServicePruebaTecnicaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicePruebaTecnicaApplication.class, args);
	}

}
