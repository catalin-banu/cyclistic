package com.rentalBike.server.payroll;

import com.rentalBike.server.model.AdminItem;
import com.rentalBike.server.model.OrderItem;
import com.rentalBike.server.repository.AdminRepository;
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
    CommandLineRunner initDatabase(OrderRepository orderRepository, AdminRepository adminRepository){
        return args -> {
            log.info("Preloading " + orderRepository
                    .save(new OrderItem(1L,"George","Popescu","popescugeorgel@gmail.com",
                            "0713567383","Bicicletă de munte(2)","4 ore","22/02/2022","","ÎN AȘTEPTARE",160)));
            log.info("Preloading " + orderRepository
                    .save(new OrderItem(2L,"Ion","Radu","radu_ion@yahoo.com",
                            "0746987542","Bicicletă de oras(4)","2 zile","24/02/2022","","ÎN AȘTEPTARE",600)));
            log.info("Preloading " + orderRepository
                    .save(new OrderItem(3L,"Adina","Duicu","adyna99@yahoo.com",
                            "0746978942","Bicicletă electrică(1)","3 zile","22/02/2022","","ÎN AȘTEPTARE",700)));
            log.info("Preloading " + orderRepository
                    .save(new OrderItem(4L,"Georgiana","Cristea","geo_cristea@gmail.com",
                            "0729847432","Trotinetă electrică(1)","8 ore","13/03/2022","","ÎN AȘTEPTARE",80)));
            log.info("Preloading admin" + adminRepository
                    .save(new AdminItem("admin","parola1234")));
        };
    }
}
