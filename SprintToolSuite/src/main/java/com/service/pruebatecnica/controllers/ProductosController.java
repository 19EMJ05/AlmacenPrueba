package com.service.pruebatecnica.controllers;


import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.pruebatecnica.DTO.ProductosDTO;
import com.service.pruebatecnica.services.HistoricoService;
import com.service.pruebatecnica.services.ProductosService;

import io.swagger.annotations.ApiOperation;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/inventario")
public class ProductosController {
	@Autowired
	ProductosService productosService;
	@Autowired
	HistoricoService historicoService;
	
	@ApiOperation(value = " Servicio para obtener toda la informacion de productos")
	@GetMapping()
	public ResponseEntity<?> getAllProductos() {
		return ResponseEntity.status(HttpStatus.OK).body(productosService.getAllProductos());
	}
	@ApiOperation(value = " Servicio para guardar los productos")
	@PostMapping()
	public ResponseEntity<?> setProducto(@RequestBody ProductosDTO Productos) {
		productosService.setProducto(Productos);
		return ResponseEntity.ok(Collections.singletonMap("message", "Producto Guardado"));
	}
	@ApiOperation(value = " Servicio para actualizar la cantidad de productos")
	@PatchMapping(path="/{idproducto}/{cantidad}/{idpersonal}/{tipomov}")
	public ResponseEntity<?> editCantidadProducto(@PathVariable("idproducto") int idproducto,
												  @PathVariable("cantidad") int cantidad,
												  @PathVariable("idpersonal") int idpersonal,
												  @PathVariable("tipomov") String tipomov){
		int cantidadAntesMov=productosService.getCantidad(idproducto);
		String response= productosService.updateCantidadProducto(cantidad, idproducto);
		if(response.equals(productosService.OK_PROCESS)) {
			historicoService.setHistorico(productosService.getNombre(idproducto),  
										 idpersonal, 
										 tipomov,
										 cantidadAntesMov, 
										 cantidad);
			return ResponseEntity.ok(Collections.singletonMap("mensaje", response));
		} 	
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
		
	}
	@ApiOperation(value = " Servicio para actualizar el estatus")
	@PatchMapping(path = "/{id}/{estatus}")
	public ResponseEntity<?> updateStatus(@PathVariable("id")int id,@PathVariable("estatus") int estatus ) {
		productosService.updateStatus(id, estatus);
		return ResponseEntity.ok(Collections.singletonMap("message","Estatus Cambiado"));
	}
}
