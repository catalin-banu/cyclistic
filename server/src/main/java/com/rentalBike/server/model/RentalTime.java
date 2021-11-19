package com.rentalBike.server.model;

public class RentalTime {
    private String hours;
    private String days;

    public RentalTime() {
    }

    public String getHours() {
        return hours;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }

    public String getDays() {
        return days;
    }

    public void setDays(String days) {
        this.days = days;
    }

    public RentalTime(String hours, String days) {
        this.hours = hours;
        this.days = days;
    }
}
