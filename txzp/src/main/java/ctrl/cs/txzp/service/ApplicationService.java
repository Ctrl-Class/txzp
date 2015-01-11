package ctrl.cs.txzp.service;

import java.util.ArrayList;

import ctrl.cs.txzp.modal.Application;

public interface ApplicationService {
	public ArrayList<Application> selectAllApplications(Integer dependenceId);
	
	public ArrayList<Application> selectaApplicationsByApartmentId(Integer apartid);
	
	public ArrayList<Application> selectSelfApplications(Integer userid);
	
	public Application selectaApplicationById(Integer id);
	
	public boolean insertApplication(Application application);
	
	public boolean updateApplication(Application application);
}
