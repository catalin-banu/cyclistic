package com.rentalBike.server.payroll;

import com.rentalBike.server.model.OrderItem;
import com.rentalBike.server.repository.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(OrderRepository orderRepository){
        return args -> {
            log.info("Preloading " + orderRepository
                    .save(new OrderItem(1L,"George","Popescu","popescugeorgel@gmail.com",
                            "0713567383","Bicicletă de munte","4h 0 zile","În așteptare")));
            log.info("Preloading " + orderRepository
                    .save(new OrderItem(2L,"Ion","Radu","radu_ion@yahoo.com",
                            "0746987542","Bicicletă de oras","0h 1 zile","În așteptare")));
            log.info("Preloading " + orderRepository
                    .save(new OrderItem(3L,"Adina","Duicu","adyna99@yahoo.com",
                            "0746978942","Bicicletă electrică","0h 2 zile","În așteptare")));
            log.info("Preloading " + orderRepository
                    .save(new OrderItem(4L,"Georgiana","Cristea","geo_cristea@gmail.com",
                            "0729847432","Trotinetă electrică","8h 0 zile","În așteptare")));
        };
    }
}
