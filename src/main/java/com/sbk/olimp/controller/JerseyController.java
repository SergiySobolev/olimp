package com.sbk.olimp.controller;

import com.sbk.olimp.domain.DictEntity;
import com.sbk.olimp.repo.DictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/")
@Component
public class JerseyController {

    @Autowired
    DictRepository dictRepository;

    @GET
    public Response getMsg(@QueryParam("str") String str) {
        List<DictEntity> dicts = dictRepository.findAll();
        return Response.status(200).entity("").build();
    }
}
