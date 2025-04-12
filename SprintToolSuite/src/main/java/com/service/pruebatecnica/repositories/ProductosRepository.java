package com.service.pruebatecnica.repositories;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.service.pruebatecnica.DTO.ProductosDTO;

@Repository
public interface ProductosRepository extends CrudRepository<ProductosDTO,Integer>{
	
	@Modifying
	@Query("Update ProductosDTO set estatusproducto=:status where idproducto=:idproducto")
	public int updateStatusProducto(int status, int idproducto);
	
	@Modifying
	@Query("Update ProductosDTO set cantidadproducto= :catidad where idproducto= :idproducto")
	public int updatecantidadproducto(int catidad, int idproducto);
}
