package com.rentalBike.server.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue
    private Long id;

    @NotEmpty(message = "Nu ați introdus prenumele")
    @Size(min = 3,message = "Prenumele trebuie să aibă minim 3 caractere")
    private String firstName;

    @NotEmpty(message = "Nu ați introdus numele")
    @Size(min = 3,message = "Numele trebuie să aibă minim 3 caractere")
    private String lastName;

    @NotEmpty(message = "Adresa de email este obligatorie")
    @Email(message = "Adresa de email introdusă nu este validă")
    private String email;

    @NotEmpty(message = "Numărul de telefon este obligatoriu")
    private String phone;

    @NotEmpty(message = "Nu ați selectat niciun produs")
    private String productList;

    @NotEmpty(message = "Nu ați introdus timpul de închiriere")
    private String rentalTime;
    private String date;
    private String details;
    private String status;
    private Number price;

}