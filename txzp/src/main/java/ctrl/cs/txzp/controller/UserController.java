package ctrl.cs.txzp.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJacksonJsonView;

import ctrl.cs.txzp.modal.User;
import ctrl.cs.txzp.service.UserService;

@Controller
@RequestMapping("/userController")
public class UserController {
	public UserService userService;

	public UserService getUserService() {
		return userService;
	}
	@Autowired
	public void setUserService(UserService userService) {
		this.userService = userService;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked", "finally" })
    @RequestMapping("/loginUser")
    public ModelAndView loginUser(String loginName,String passWord, HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        HttpSession session = request.getSession();
        try {
        	User user = null;
        	user = userService.checkUser(loginName, passWord);
           if(user != null){
        	   session.setAttribute("user", user);
        	   map.put("user", user);
        	   map.put("result", Boolean.TRUE);
        	   map.put("message", "登录成功");
           }else{
        	   map.put("result", Boolean.FALSE);
        	   map.put("message", "用户名或密码错误！");
           }
        } catch (Exception e) {
            map.put("result", Boolean.FALSE);
            map.put("message", "信息错误");
            e.printStackTrace();
        } finally {
            view.setAttributesMap(map);
            mav.setView(view);
            return mav;
        }
    }
	
	
	@SuppressWarnings({ "rawtypes", "unchecked", "finally" })
    @RequestMapping("/findUserByName")
    public ModelAndView findUserByName(String username, HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        try {
        	User user = null;
        	user = userService.findUserByUsername(username);
           if(user != null){
        	   map.put("result", Boolean.FALSE);
        	   map.put("message", "用户名已被注册");
           }else{
        	   map.put("result", Boolean.TRUE);
        	   map.put("message", "用户名未被注册");
           }
        } catch (Exception e) {
            map.put("result", Boolean.FALSE);
            map.put("message", "信息错误");
            e.printStackTrace();
        } finally {
            view.setAttributesMap(map);
            mav.setView(view);
            return mav;
        }
    }
	
	
	@SuppressWarnings({ "rawtypes", "unchecked", "finally" })
    @RequestMapping("/createNewUser")
    public ModelAndView createNewUser(String username,String password, HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        try {
        	
        	if(userService.addUser(username, password, 1)){
        		map.put("result", Boolean.TRUE);
         	   map.put("message", "注册成功");
        	}  
        } catch (Exception e) {
            map.put("result", Boolean.FALSE);
            map.put("message", "系统繁忙，请稍后再试...");
            e.printStackTrace();
        } finally {
            view.setAttributesMap(map);
            mav.setView(view);
            return mav;
        }
    }
}
