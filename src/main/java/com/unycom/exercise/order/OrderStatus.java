package com.unycom.exercise.order;

import com.fasterxml.jackson.annotation.JsonValue;

public enum OrderStatus {

    ORDERED("ordered"),
    CONFIRMED("confirmed"),
    IN_PROGRESS("in_progress"),
    DELIVERED("delivered");

    private String id;

    OrderStatus(String id) {
        this.id = id;
    }

    @JsonValue
    public String getId() {
        return id;
    }

}
