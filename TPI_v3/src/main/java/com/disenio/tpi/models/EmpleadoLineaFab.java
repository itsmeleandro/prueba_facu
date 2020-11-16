package com.disenio.tpi.models;

import java.util.Date;

public class EmpleadoLineaFab extends Empleado{

	public EmpleadoLineaFab(String nombre, String apellido, int dni, Date fecha_Nac, String direccion, String telefono,
			String email) {
		super(nombre, apellido, dni, fecha_Nac, direccion, telefono, email);
		// TODO Auto-generated constructor stub
	}
	
	public EmpleadoLineaFab(){}
	
	public void verOrdenesProduccion(){}
	
	public void verMPPreparada(){}
	
	public void agregarProductoTerminado(){}
}
