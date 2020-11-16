
package com.disenio.tpi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TpiV3Application {

	public static void main(String[] args) {
		SpringApplication.run(TpiV3Application.class, args);
		
	}

}

/*public class Fabrica {
	public idpersona (string puesto);
	if (puesto == "vendedor") {
		return new Vendedor();
		}
	if (puesto == "Jefe deposito") {
		return new Recepcionista();
		}
	if (puesto == "Empleado compras") {
		return new Recepcionista();
		}
	if (puesto == "Empleado comercializacion") {
		return new Recepcionista();
		}
	if (puesto == "Secretario de Administracion") {
		return new Recepcionista();
		}
	
}
*/


