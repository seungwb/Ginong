package kr.co.ginong.web.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("adminPoductController")
@RequestMapping("admin/product")
public class ProductController {

    @GetMapping("reg")
    public String reg(){
        return "admin/product/reg";
    }
    
}