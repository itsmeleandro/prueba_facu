package com.disenio.tpi.controllers;
//package com.ds.mafer.controllers;

import com.disenio.tpi.models.Empleado;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller //--> capa de controlador
// @Service //--> capa de negocio
// @Repository //--> capa de acceso a datos

// controller --> services --> repository
public class CTRLRegistrarEmpleado {

        @PostMapping("/registrarEmpleado")
        public String submitForm(@ModelAttribute("empleado")Empleado empleado)  {
                System.out.println(empleado);

                return null;

        }


}
