package com.disenio.tpi.models;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Getter
@Setter
public class Reciplas {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String direccion;
	
	private Date fecha_inicio;
	private String email;
	private String telefono;
	private List<Empleado> LTE;

}
