package com.rentalBike.server.service;

import com.rentalBike.server.model.AdminItem;

import java.util.List;

public interface AdminService {
    AdminItem findByUsername(String username);
}
