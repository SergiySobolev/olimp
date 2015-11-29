package com.sbk;


import com.sbk.olimp.config.DataBaseConfig;
import com.sbk.olimp.config.WebAppInitializer;
import com.sbk.olimp.config.WebConfig;
import com.sbk.olimp.repo.DictRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = {WebAppInitializer.class, WebConfig.class, DataBaseConfig.class})
public class BaseTest {

    private EmbeddedDatabase db;

    @Autowired
    protected DictRepository dictRepository;

    @Before
    public void setUp() {
        db = new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript("db/sql/ddl.sql")
                .addScript("db/sql/dml.sql")
                .build();
    }

    @After
    public void tearDown() {
        db.shutdown();
    }
}
