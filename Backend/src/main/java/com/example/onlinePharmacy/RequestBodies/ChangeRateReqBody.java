package com.example.onlinePharmacy.RequestBodies;

public class ChangeRateReqBody {
    public Long id;
    public double rate;

    public ChangeRateReqBody(Long id, double rate) {
        this.id = id;
        this.rate = rate;
    }
}
