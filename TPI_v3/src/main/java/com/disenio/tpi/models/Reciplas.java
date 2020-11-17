package com.disenio.tpi.models;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
public class Reciplas {

	private Long id;
	
	private String direccion;
	
	private Date fecha_inicio;
	private String email;
	private String telefono;
	private List<Empleado> LTE;

}
