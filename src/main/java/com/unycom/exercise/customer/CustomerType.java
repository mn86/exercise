package com.unycom.exercise.customer;

import com.fasterxml.jackson.annotation.JsonValue;

public enum CustomerType {

    POOR("poor"),
    MINOR("minor"),
    MAJOR("major"),
    VIP("vip");

    private String id;

    CustomerType(String id) {
        this.id = id;
    }

    @JsonValue
    public String getId() {
        return id;
    }

}
