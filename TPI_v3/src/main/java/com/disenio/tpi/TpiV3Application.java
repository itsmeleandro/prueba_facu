
package com.disenio.tpi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TpiV3Application {

	public static void main(String[] args) {
		SpringApplication.run(TpiV3Application.class, args);
		empleadoRRHH fabrica = fabrica new empleadoRRHH ();
		
		idpersona vendedor = fabrica.getpersona("vendedor");
		
		idpersona contador = fabrica.getpersona("contador");
		
		
	}

	
}

public interface persona {
	private string nombre;
	private string apellido;
	private string dni;
	
}

public class vendedor implements persona{
	private string fechaContratacion;
	
		public persona() {
			this.nombre=(null);
			this.apellido=(null);
			this.dni=(null);
			
		}
				
}
