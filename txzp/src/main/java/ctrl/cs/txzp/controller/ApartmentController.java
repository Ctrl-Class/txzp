package ctrl.cs.txzp.controller;

import java.util.ArrayList;
import java.util.Date;
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

import ctrl.cs.txzp.modal.Apartment;
import ctrl.cs.txzp.service.ApartmentService;

@Controller
@RequestMapping("/apartmentController")
public class ApartmentController {
	private ApartmentService apartmentService;
	
	public ApartmentService getApartmentService() {
		return apartmentService;
	}
	@Autowired
	public void setApartmentService(ApartmentService apartmentService) {
		this.apartmentService = apartmentService;
	}

	
	
	@SuppressWarnings({ "rawtypes", "unchecked", "finally" })
    @RequestMapping("/getApartmentList")
    public ModelAndView getApartmentList(Integer dependenceId, HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        //HttpSession session = request.getSession();
        try {
			ArrayList<Apartment> apartments = apartmentService.selectAllApartments(dependenceId);
			if(apartments!=null){
				map.put("apartmentList", apartments);
				
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
    @RequestMapping("/getApartmentById")
    public ModelAndView getApartmentById(Integer apartId, HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        //HttpSession session = request.getSession();
        try {
			Apartment apartment = apartmentService.selectApartmentById(apartId);
			if(apartment!=null){
				map.put("apartmentList", apartment);
				
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
    @RequestMapping("/updateApartmentInfo")
    public ModelAndView updateApartmentInfo(Integer apartId,String apartName,String apartRequire, Integer apartManagerUserid,Date apartDeadline,
    		String apartInfo,Integer apartDependence,HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        //HttpSession session = request.getSession();
        try {
			Apartment apartment = new Apartment();
			apartment.setApartId(apartId);
			apartment.setApartName(apartName);
			apartment.setApartRequire(apartRequire);
			apartment.setApartManagerUserid(apartManagerUserid);
			apartment.setApartDeadline(apartDeadline);
			apartment.setApartInfo(apartInfo);
			apartment.setApartDependence(apartDependence);
			if(apartmentService.updateApartmentInfo(apartment)){
				map.put("result", Boolean.TRUE);
				map.put("message", "修改成功！");
			}else {
				map.put("result", Boolean.FALSE);
				map.put("message", "修改失败！");
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
    @RequestMapping("/insertApartmentInfo")
    public ModelAndView insertApartmentInfo(String apartName,String apartRequire, Integer apartManagerUserid,Date apartDeadline,
    		String apartInfo,Integer apartDependence,HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        //HttpSession session = request.getSession();
        try {
			Apartment apartment = new Apartment();
			apartment.setApartName(apartName);
			apartment.setApartRequire(apartRequire);
			apartment.setApartManagerUserid(apartManagerUserid);
			apartment.setApartDeadline(apartDeadline);
			apartment.setApartInfo(apartInfo);
			apartment.setApartDependence(apartDependence);
			if(apartmentService.insertApartment(apartment)){
				map.put("result", Boolean.TRUE);
				map.put("message", "添加成功！");
			}else {
				map.put("result", Boolean.FALSE);
				map.put("message", "添加失败！");
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
    @RequestMapping("/deleteApartmentInfo")
    public ModelAndView deleteApartmentInfo(Integer apartId,HttpServletResponse response, HttpServletRequest request) {
        ModelAndView mav = new ModelAndView();
        MappingJacksonJsonView view = new MappingJacksonJsonView();
        Map map = new HashMap();
        //HttpSession session = request.getSession();
        try {
			if(apartmentService.deleteApartmentById(apartId)){
				map.put("result", Boolean.TRUE);
				map.put("message", "删除成功！");
			}else {
				map.put("result", Boolean.FALSE);
				map.put("message", "删除失败！");
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
