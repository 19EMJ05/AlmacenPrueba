package com.service.pruebatecnica.DTO;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
@Table(name="historico")
public class HistoricoDTO {
	@Id
	private int idhistorico;
	private String nombreproducto;
	private int idusuario;
	private String tipomov ;
	private int cantidadactual;
	private int cantidadnueva;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate fechamod;
	@DateTimeFormat(pattern = "HH:mm:ss")
	private LocalTime horamod;
}
