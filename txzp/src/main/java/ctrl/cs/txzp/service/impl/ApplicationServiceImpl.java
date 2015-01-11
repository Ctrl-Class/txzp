package ctrl.cs.txzp.service.impl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ctrl.cs.txzp.dao.ApplicationMapper;
import ctrl.cs.txzp.modal.Application;
import ctrl.cs.txzp.service.ApplicationService;
@Service("/ApplicationService")
public class ApplicationServiceImpl implements ApplicationService {

	private ApplicationMapper applicationMapper;
	
	public ApplicationMapper getApplicationMapper() {
		return applicationMapper;
	}
	@Autowired
	public void setApplicationMapper(ApplicationMapper applicationMapper) {
		this.applicationMapper = applicationMapper;
	}

	@SuppressWarnings("finally")
	@Override
	public ArrayList<Application> selectAllApplications(Integer dependenceId) {
		// TODO Auto-generated method stub
		ArrayList<Application> applications = new ArrayList<Application>();
		try {
			if(dependenceId == 0)
				applications = applicationMapper.selectAllApplications();
			else {
				applications = applicationMapper.selectApplicationsByDependence(dependenceId);
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{
			return applications;
		}
		
	}

	@SuppressWarnings("finally")
	@Override
	public ArrayList<Application> selectaApplicationsByApartmentId(Integer apartid) {
		// TODO Auto-generated method stub
		ArrayList<Application> applications = new ArrayList<Application>();
		try {
			applications = applicationMapper.selectApplicationsByApartmentId(apartid);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{
			return applications;
		}
		
	}

	@SuppressWarnings("finally")
	@Override
	public ArrayList<Application> selectSelfApplications(Integer userid) {
		// TODO Auto-generated method stub
		ArrayList<Application> applications = new ArrayList<Application>();
		try {
			applications = applicationMapper.selectApplicationsByUserId(userid);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{
			return applications;
		}
		
	}

	@SuppressWarnings("finally")
	@Override
	public Application selectaApplicationById(Integer id) {
		// TODO Auto-generated method stub
		Application application = null;
		try {
			application = applicationMapper.selectByPrimaryKey(id);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{
			return application;
		}
	}

	@SuppressWarnings("finally")
	@Override
	public boolean insertApplication(Application application) {
		// TODO Auto-generated method stub
		boolean flag = true;
		try {
			applicationMapper.insert(application);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			flag = false;
		}finally{
			return flag;
		}		
	}

	@SuppressWarnings("finally")
	@Override
	public boolean updateApplication(Application application) {
		// TODO Auto-generated method stub
		boolean flag = true;
		try {
			applicationMapper.updateByPrimaryKeySelective(application);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			flag = false;
		}finally{
			return flag;
		}	
	}
}
