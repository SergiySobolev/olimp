package com.sbk.olimp.controller;

import com.google.gson.Gson;
import com.sbk.olimp.domain.DictEntity;
import com.sbk.olimp.repo.DictRepository;
import com.sbk.olimp.service.NeedlemanWunschService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import rx.Observable;
import rx.functions.Action1;
import rx.functions.Func1;

import javax.inject.Provider;
import javax.ws.rs.*;
import java.util.ArrayList;
import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("/")
@Component
@Controller
public class JerseyController {

    private Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private NeedlemanWunschService needlemanWunschService;

    @Autowired
    private Provider<Gson> gsonProvider;

    @GET
    @Path("/")
    @Produces({ APPLICATION_JSON })
    public Object getMsg(@QueryParam("str") String str) {
        String nearbyItems = gsonProvider.get().toJson(needlemanWunschService.getNearbyItems(str));
        log.info("Nearby items:{}", nearbyItems);
        return nearbyItems;
    }
}
