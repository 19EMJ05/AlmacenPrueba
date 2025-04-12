package com.service.pruebatecnica.DTO;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

import lombok.Data;
@Data
@Entity
@Table(name="productos")
public class ProductosDTO {
	
	@Id
	private int idproducto ;
    private String nombreproducto ;
    private int cantidadproducto; 
    private int estatusproducto ;

}
