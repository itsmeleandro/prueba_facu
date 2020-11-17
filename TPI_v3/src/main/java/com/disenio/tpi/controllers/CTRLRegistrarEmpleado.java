package com.disenio.tpi.controllers;
//package com.ds.mafer.controllers;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class CTRLRegistrarEmpleado {

        @RequestMapping("/agregarPersonal")
        public String index()
        {return "agregarPersonal.html";}


}
