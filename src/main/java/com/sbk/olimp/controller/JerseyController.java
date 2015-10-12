package com.sbk.olimp.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

@Path("/")
public class JerseyController {

    @GET
    @Path("/{param}")
    public Response getMsg(@PathParam("param") String msg) {
        String output = "Jersey say : " + msg;
        return Response.status(200).entity(output).build();

    }

    @GET
    @Path("/")
    public Response getMsg() {
        return Response.status(200).entity("ololo").build();
    }
}
