package Olimp.controller.config;

import net.jawr.web.servlet.JawrSpringController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class JavascriptJawrController {

    private JawrSpringController jawrSpringController;

    @Autowired
    public JavascriptJawrController(@Qualifier("jawrBaseController")JawrSpringController jCon){
        this.jawrSpringController = jCon;
        this.jawrSpringController.setType("js");
    }

    @RequestMapping(value="/**/*.js")
    public ModelAndView jawrJavascript(HttpServletRequest request, HttpServletResponse response) throws Exception {
        return this.jawrSpringController.handleRequest(request, response);
    }


}

