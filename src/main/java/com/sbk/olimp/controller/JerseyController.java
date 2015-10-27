package com.sbk.olimp.controller;

import com.google.common.collect.Lists;
import com.google.gson.Gson;
import com.sbk.olimp.domain.DictEntity;
import com.sbk.olimp.repo.DictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.inject.Provider;
import javax.ws.rs.*;
import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("/")
@Component
public class JerseyController {

    @Autowired
    private DictRepository dictRepository;

    @Autowired
    private Provider<Gson> gsonProvider;

    @GET
    @Path("/")
    @Produces({ APPLICATION_JSON })
    public Object getMsg(@QueryParam("str") String str) {
        List<DictEntity> dicts = dictRepository.findAll();
       return  gsonProvider.get().toJson(dicts);
    }
}
