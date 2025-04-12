package com.service.pruebatecnica.services;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.pruebatecnica.DTO.ProductosDTO;
import com.service.pruebatecnica.repositories.ProductosRepository;

@Service
public class ProductosService {
	public final String OK_PROCESS="Procceso Completado";
	public final String FAIL_PROCESS="Procceso Incompleto";

	@Autowired
	ProductosRepository productosRepository;
	
	public ArrayList<ProductosDTO> getAllProductos(){
		return (ArrayList<ProductosDTO>)productosRepository.findAll();
	}
	
	@Transactional
	public void setProducto(ProductosDTO producto) {
		productosRepository.save(producto);
	}
	@Transactional
	public String updateCantidadProducto(int cantidad,int id) {
		if(productosRepository.updatecantidadproducto(cantidad,id)!=0)
			return OK_PROCESS;
		return FAIL_PROCESS;
	}
	
	public int getCantidad(int idproducto){
		ProductosDTO pro=productosRepository.findById(idproducto).get();
		return pro.getCantidadproducto();
	}
	public String getNombre(int idproducto){
		ProductosDTO pro=productosRepository.findById(idproducto).get();
		return pro.getNombreproducto();
	}
	@Transactional
	public String updateStatus(int id,int status) {
		if(productosRepository.updateStatusProducto(status,id)!=0)
			return OK_PROCESS;
		return FAIL_PROCESS;
	}
}
