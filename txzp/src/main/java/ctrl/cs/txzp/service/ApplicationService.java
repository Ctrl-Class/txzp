package ctrl.cs.txzp.service;

import java.util.ArrayList;

import ctrl.cs.txzp.modal.Application;
import ctrl.cs.txzp.selfmodal.ShowAppModal;

public interface ApplicationService {
	public ArrayList<ShowAppModal> selectAllApplications(Integer dependenceId);
	
	public ArrayList<ShowAppModal> selectaApplicationsByApartmentId(Integer apartid);
	
	public ArrayList<ShowAppModal> selectSelfApplications(Integer userid);
	
	public ShowAppModal selectaApplicationById(Integer id);
	
	public boolean insertApplication(Application application);
	
	public boolean updateApplication(Application application);
}
