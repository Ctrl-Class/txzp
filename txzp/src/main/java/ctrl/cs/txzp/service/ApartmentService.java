package ctrl.cs.txzp.service;

import java.util.ArrayList;
import ctrl.cs.txzp.modal.Apartment;
import ctrl.cs.txzp.selfmodal.ShowApartModal;

public interface ApartmentService {
	public ArrayList<Apartment> selectAllApartments(Integer dependenceId);
	
	public ShowApartModal selectApartmentById(Integer id);
	
	public boolean insertApartment(Apartment apartment);
	
	public boolean updateApartmentInfo(Apartment apartment);
	
	public boolean deleteApartmentById(Integer id);

}
