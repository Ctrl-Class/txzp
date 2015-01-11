package ctrl.cs.txzp.service;

import java.util.ArrayList;
import java.util.List;

import ctrl.cs.txzp.modal.Apartment;

public interface ApartmentService {
	public ArrayList<Apartment> selectAllApartments(Integer dependenceId);
	
	public Apartment selectApartmentById(Integer id);
	
	public boolean insertApartment(Apartment apartment);
	
	public boolean updateApartmentInfo(Apartment apartment);
	
	public boolean deleteApartmentById(Integer id);

}
