package com.service.pruebatecnica.controllers;

import java.util.Collections;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.pruebatecnica.DTO.UsuariosDTO;
import com.service.pruebatecnica.services.UsuariosService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/usuario")
public class UsuariosController {
	
	@Autowired
	UsuariosService usuariosService;
	
	@GetMapping(path = "/login/{id}")
	public ResponseEntity<?> getuser(@PathVariable("id") int id) {
		Optional<UsuariosDTO> user=usuariosService.getUserById(id);
		if(usuariosService.getUserById(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(user);
		}else {
			return ResponseEntity.ok(Collections.singletonMap("message", "No existe el usuario"));
		}
	}
	@GetMapping(path="/{id}/{pass}")
	public ResponseEntity<?> getAccess(@PathVariable("id")int id,@PathVariable("pass")String pass) {
		String access=usuariosService.getAccess(id, pass);
		return ResponseEntity.ok(Collections.singletonMap("message", access));
		
	}
}
