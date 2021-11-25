package com.rentalBike.server.service;

import com.rentalBike.server.model.AdminItem;
import com.rentalBike.server.repository.AdminRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public AdminItem findByUsername(String username) {
        return adminRepository.findByUsername(username);
    }
}
