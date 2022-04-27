package com.example.calcapp;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
// @CrossOrigin(origins="http://localhost:3000")
public class CalculatorService {

    @GetMapping("/add/{x}/{y}")
    public Response add(@PathVariable int x, @PathVariable int y) {
        return new Response(x, y, x+y);
    }

    @GetMapping("/subtract/{x}/{y}")
    public Response subtract(@PathVariable int x, @PathVariable int y) {
        return new Response(x, y, x-y);
    }

    @GetMapping("/multiply/{x}/{y}")
    public Response multiply(@PathVariable int x, @PathVariable int y) {
        return new Response(x, y, x*y);
    }

    @GetMapping("/divide/{x}/{y}")
    public Response divide(@PathVariable int x, @PathVariable int y) {
        return new Response(x, y, x/y);
    }
}
