package com.service.pruebatecnica.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.service.pruebatecnica.DTO.UsuariosDTO;
import com.service.pruebatecnica.repositories.UsuariosRepository;

@Service
public class UsuariosService {
	@Autowired
	UsuariosRepository usuariosRepository;
	public final String USUER_NOT_FOUND="Usuario no encontrado";
	public final String PASSWORD_INCORRECT="Contraseña Incorrecta";
	public final String USER_NOT_ACTIVATE="Usuario no Activo";
	public final String ACCESS_OK="Ingreso Correcto";
	
	public Optional<UsuariosDTO> getUserById(int id) {
		return usuariosRepository.findById(id);
	}
	
	public String getAccess(int id,String contra) {		
		Optional<UsuariosDTO> usuario=getUserById(id);
		if (usuario.isPresent()) {
			UsuariosDTO user=usuario.get();
			if(user.getEstatus()!=0) {
				if(user.getContrasena().equals(contra)) 
					return ACCESS_OK;
				else
					return PASSWORD_INCORRECT;
			}else
				return USER_NOT_ACTIVATE;
		}else 
			return USUER_NOT_FOUND;

	}
}
