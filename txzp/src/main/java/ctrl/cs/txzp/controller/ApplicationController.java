package ctrl.cs.txzp.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.json.MappingJacksonJsonView;

import ctrl.cs.txzp.modal.Application;
import ctrl.cs.txzp.service.ApplicationService;

@Controller("/applicationController")
public class ApplicationController {
	private ApplicationService applicationService;
	
	public ApplicationService getApplicationService() {
		return applicationService;
	}
	@Autowired
	public void setApplicationService(ApplicationService applicationService) {
		this.applicationService = applicationService;
	}

	@SuppressWarnings({ "rawtypes", "unchecked", "finally" })
    @RequestMapping("/getApplicationById")
    public ModelAndView getApplicationById(Integer appId, HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        //HttpSession session = request.getSession();
        try {
			Application application = applicationService.selectaApplicationById(appId);
			if(application!=null){
				map.put("application", application);
				
				map.put("result", Boolean.TRUE);
			}else{
				map.put("result", Boolean.FALSE);
				map.put("message", "没有找到!");
			}
		} catch (Exception e) {
			// TODO: handle exception
			map.put("result", Boolean.FALSE);
			map.put("message", "网络超时");
		}finally{
			view.setAttributesMap(map);
            mav.setView(view);
			return mav;
		}
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked", "finally" })
    @RequestMapping("/getApplicationByUserId")
    public ModelAndView getApplicationByUserId(Integer userId, HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        //HttpSession session = request.getSession();
        try {
			ArrayList<Application> applications = applicationService.selectSelfApplications(userId);
			if(applications!=null){
				map.put("applicationList", applications);			
				map.put("result", Boolean.TRUE);
			}else{
				map.put("result", Boolean.FALSE);
				map.put("message", "没有找到!");
			}
		} catch (Exception e) {
			// TODO: handle exception
			map.put("result", Boolean.FALSE);
			map.put("message", "网络超时");
		}finally{
			view.setAttributesMap(map);
            mav.setView(view);
			return mav;
		}
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked", "finally" })
    @RequestMapping("/getApplicationByApartId")
    public ModelAndView getApplicationByApartId(Integer apartId, HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        //HttpSession session = request.getSession();
        try {
			ArrayList<Application> applications = applicationService.selectaApplicationsByApartmentId(apartId);
			if(applications!=null){
				map.put("applicationList", applications);			
				map.put("result", Boolean.TRUE);
			}else{
				map.put("result", Boolean.FALSE);
				map.put("message", "没有找到!");
			}
		} catch (Exception e) {
			// TODO: handle exception
			map.put("result", Boolean.FALSE);
			map.put("message", "网络超时");
		}finally{
			view.setAttributesMap(map);
            mav.setView(view);
			return mav;
		}
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked", "finally" })
    @RequestMapping("/getApplicationByDependence")
    public ModelAndView getApplicationByDependence(Integer dependenceId, HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        //HttpSession session = request.getSession();
        try {
			ArrayList<Application> applications = applicationService.selectAllApplications(dependenceId);
			if(applications!=null){
				map.put("applicationList", applications);			
				map.put("result", Boolean.TRUE);
			}else{
				map.put("result", Boolean.FALSE);
				map.put("message", "没有找到!");
			}
		} catch (Exception e) {
			// TODO: handle exception
			map.put("result", Boolean.FALSE);
			map.put("message", "网络超时");
		}finally{
			view.setAttributesMap(map);
            mav.setView(view);
			return mav;
		}
	}
}
