package com.disenio.tpi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class hello {
    @GetMapping("/saludo")
    public String saludo (){
        return "hola";
    }
}
