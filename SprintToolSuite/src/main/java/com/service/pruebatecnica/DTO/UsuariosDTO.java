package com.service.pruebatecnica.DTO;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="usuarios")
public class UsuariosDTO {
	@Id
	private int idusuario ;
	private String nombre ;
	private String contrasena ;
	private String correo ;
	private int idrol ;
	private int estatus ;

}
