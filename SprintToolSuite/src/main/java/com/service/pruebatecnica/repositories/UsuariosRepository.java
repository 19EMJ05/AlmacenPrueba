package com.service.pruebatecnica.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.service.pruebatecnica.DTO.UsuariosDTO;

@Repository
public interface UsuariosRepository extends CrudRepository<UsuariosDTO, Integer>{
	
}
