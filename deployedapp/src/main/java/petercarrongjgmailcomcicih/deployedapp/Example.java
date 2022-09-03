package petercarrongjgmailcomcicih.deployedapp;

import dev.abstratium.api.*;

@Abstratium("example")
public class Example {

    // the value is taken from the requirements.yaml file
    @Config("salutation")
    String salutation;

    @Get("/hello")
    public String hello(@QueryParam String name) {
        return salutation + " " + name;
    }
}
