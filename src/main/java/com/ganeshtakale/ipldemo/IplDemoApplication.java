package com.ganeshtakale.ipldemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class IplDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(IplDemoApplication.class, args);
	}

}
