package com.disenio.tpi.models;

import java.util.Date;

public class EmpleadoCompra extends Empleado {

	public EmpleadoCompra(String nombre, String apellido, int dni, Date fecha_Nac, String direccion, String telefono,
			String email) {
		super(nombre, apellido, dni, fecha_Nac, direccion, telefono, email);
		// TODO Auto-generated constructor stub
	}
	
	public EmpleadoCompra(){}
	public void encargarMP(){}
	public void buscarProveedor(){}
	public void verMateriaPrima(){}

}
