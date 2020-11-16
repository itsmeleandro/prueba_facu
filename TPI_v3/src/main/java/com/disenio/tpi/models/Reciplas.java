package com.disenio.tpi.models;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Reciplas {
	private String direccion;
	private Date fecha_inicio;
	private String email;
	private String telefono;
	private List<Empleado> LTE;

}
