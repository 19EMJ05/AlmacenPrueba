package com.service.pruebatecnica.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.service.pruebatecnica.DTO.HistoricoDTO;

@Repository
public interface HistoricoRepository extends CrudRepository<HistoricoDTO, Integer>{
}
