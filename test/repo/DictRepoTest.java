package repo;

import com.sbk.olimp.config.DataBaseConfig;
import com.sbk.olimp.config.WebAppInitializer;
import com.sbk.olimp.config.WebConfig;
import com.sbk.olimp.domain.DictEntity;
import com.sbk.olimp.repo.DictRepository;
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

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = {WebAppInitializer.class, WebConfig.class, DataBaseConfig.class})
public class DictRepoTest {

    private EmbeddedDatabase db;

    @Autowired
    DictRepository dictRepository;

    @Before
    public void setUp() {
        //db = new EmbeddedDatabaseBuilder().addDefaultScripts().build();
        db = new EmbeddedDatabaseBuilder()
                .setType(EmbeddedDatabaseType.H2)
                .addScript("db/sql/ddl.sql")
                .addScript("db/sql/dml.sql")
                .build();
    }

    @Test
    public void testFindItem() {
        DictEntity dict = dictRepository.findOne(1L);
        assertThat(dict.getId(), equalTo(1L));
        assertThat(dict.getItem(), equalTo("mkyong"));
    }

    @After
    public void tearDown() {
        db.shutdown();
    }

}
