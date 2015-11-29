package com.sbk.olimp.controller;

import com.sbk.BaseTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class JerseyControllerTest extends BaseTest {

    @Autowired
    private JerseyController jerseyController;

    @Test
    public void testGetMsg() {
        jerseyController.getMsg("");
    }

}