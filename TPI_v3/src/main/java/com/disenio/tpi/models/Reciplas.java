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
<<<<<<< HEAD

=======
	@Id
<<<<<<< Updated upstream
=======
>>>>>>> 2b25130075ba09bcc17bfbd803f9d5a5711d719d
>>>>>>> Stashed changes
	private Long id;
	
	private String direccion;
	
	private Date fecha_inicio;
	private String email;
	private String telefono;
	private List<Empleado> LTE;

}
