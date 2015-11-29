package com.sbk.olimp.repo;

import com.sbk.BaseTest;
import com.sbk.olimp.config.DataBaseConfig;
import com.sbk.olimp.config.WebAppInitializer;
import com.sbk.olimp.config.WebConfig;
import com.sbk.olimp.domain.DictEntity;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.hamcrest.core.IsEqual.equalTo;
import static org.junit.Assert.assertThat;

public class DictRepoTest extends BaseTest {

    @Test
    public void testFindItem() {
        DictEntity dict = dictRepository.findOne(1L);
        assertThat(dict.getId(), equalTo(1L));
        assertThat(dict.getItem(), equalTo("mkyong"));
        assertThat(dictRepository.findAll().size(), equalTo(5));
    }

}
