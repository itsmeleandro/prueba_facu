package com.disenio.tpi.models;

import java.util.Date;

public class EmpleadoPreparacion extends Empleado {
	
	public EmpleadoPreparacion(String nombre, String apellido, int dni, Date fecha_Nac, String direccion, String telefono,
			String email) {
		super(nombre, apellido, dni, fecha_Nac, direccion, telefono, email);
		// TODO Auto-generated constructor stub
	}
	
	public EmpleadoPreparacion(){}
	
	public void verMateriaPrima(){}
	
	public void verOrdenesProduccion(){}
	
	public void prepararMP(){}

}
