package com.disenio.tpi.models;

import java.util.Date;

public class Empleado {
	protected String nombre;
	protected String apellido;
	protected int dni;
	protected Date fecha_Nac;
	protected Date fecha_Contratacion; 
	protected String direccion;
	protected String telefono;
	protected String email;
	
	public Empleado(String nombre, String apellido, int dni, Date fecha_Nac, String direccion, String telefono, String email ){
		this.nombre=nombre;
		this.apellido=apellido;
		this.dni=dni;
		this.fecha_Nac=fecha_Nac;
		this.direccion=direccion;
		this.telefono=telefono;
		this.email=email;
		
	}
	
	//faltan getter y setter
}

// Secretario de admin 
//Visualizador de depósito 
//Jefe de depósito 
//Empleado de compras 
//Buscador de stock 
//Empleado de comercialización 
//Gerente

