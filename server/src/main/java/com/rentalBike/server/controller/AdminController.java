package com.rentalBike.server.controller;

import com.rentalBike.server.exception.UserNotFoundException;
import com.rentalBike.server.model.AdminItem;
import com.rentalBike.server.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    private Object findAdmin(@RequestBody AdminItem adminBody) {
        AdminItem existingAdmin = adminService.findByUsername(adminBody.getUsername());

        if (existingAdmin == null) {
            throw new UserNotFoundException("Admin doesn't exist");
        }
        if (!existingAdmin.getPassword().equals(adminBody.getPassword())){
            return new ResponseEntity<String>("Access denied", HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<String>("Login successfully", HttpStatus.OK);
    }
}
