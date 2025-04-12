package com.service.pruebatecnica.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.pruebatecnica.services.HistoricoService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/historico")

public class HistoricoController {
	@Autowired
	HistoricoService historicoService;
	
	@GetMapping
	public ResponseEntity<?> getAllHistorico() {
		historicoService.getHistorico();
		return ResponseEntity.ok().body(historicoService.getHistorico());
	}

}
