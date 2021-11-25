package com.rentalBike.server.repository;

import com.rentalBike.server.model.AdminItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<AdminItem,Integer> {
    AdminItem findByUsername(String username);
}
