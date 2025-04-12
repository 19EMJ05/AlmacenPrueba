package com.service.pruebatecnica.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.pruebatecnica.DTO.HistoricoDTO;
import com.service.pruebatecnica.repositories.HistoricoRepository;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
@Service
public class HistoricoService {
	@Autowired
	HistoricoRepository historicoRepository; 
	
	
	public ArrayList<HistoricoDTO> getHistorico(){
		return (ArrayList<HistoricoDTO>)historicoRepository.findAll();
	}
	
	public String setHistorico(String nombreProducto,
							   int idusuario,
							   String tipomov,
							   int cantidadActual,
							   int cantidadNueva) {
		HistoricoDTO his=new HistoricoDTO();
		his.setNombreproducto(nombreProducto);
		his.setIdusuario(idusuario);
		his.setTipomov(tipomov);
		his.setCantidadactual(cantidadActual);
		his.setCantidadnueva(cantidadNueva);
		his.setFechamod(LocalDate.now(ZoneId.of("Etc/GMT+6")));
		his.setHoramod(LocalTime.now(ZoneId.of("Etc/GMT+6")));
		historicoRepository.save(his);
		return "Guardado";
	}
}
