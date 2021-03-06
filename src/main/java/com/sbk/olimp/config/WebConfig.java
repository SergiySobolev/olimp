package com.sbk.olimp.config;

import com.google.gson.Gson;
import net.jawr.web.servlet.JawrSpringController;
import org.springframework.context.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import static org.springframework.beans.factory.config.BeanDefinition.SCOPE_PROTOTYPE;


@Configuration
@EnableWebMvc
@ComponentScan({"com.sbk.olimp"})
@Import(DataBaseConfig.class)
public class WebConfig extends WebMvcConfigurerAdapter {

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/WEB-INF/views/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/script/**").addResourceLocations("/script/");
        registry.addResourceHandler("/templates/**").addResourceLocations("/script/templates/");
        registry.addResourceHandler("/css/**").addResourceLocations("/css/");
        registry.addResourceHandler("/views/**").addResourceLocations("/views/");
        registry.addResourceHandler("/json/**").addResourceLocations("/json/");
    }

    @Bean
    public JawrSpringController jawrBaseController(){
        JawrSpringController controller = new JawrSpringController();
        controller.setConfigLocation("/jawr.properties");
        return controller;
    }

    @Bean
    @Scope(SCOPE_PROTOTYPE)
    public Gson getGson(){
        return new Gson();
    }

}
