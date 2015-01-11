package ctrl.cs.txzp.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ctrl.cs.txzp.dao.ApartmentMapper;
import ctrl.cs.txzp.modal.Apartment;
import ctrl.cs.txzp.service.ApartmentService;

@Service("/ApartmentService")
public class ApartmentServiceImpl implements ApartmentService {
	private ApartmentMapper apartmentMapper;

	public ApartmentMapper getApartmentMapper() {
		return apartmentMapper;
	}

	@Autowired
	public void setApartmentMapper(ApartmentMapper apartmentMapper) {
		this.apartmentMapper = apartmentMapper;
	}

	@Override
	@SuppressWarnings("finally")
	// dependenceId:0代表所有 1代表团委 2代表学生会
	public ArrayList<Apartment> selectAllApartments(Integer dependenceId) {
		// TODO Auto-generated method stub
		ArrayList<Apartment> apartments = new ArrayList<Apartment>();
		try {
			if (dependenceId == 0)
				apartments = apartmentMapper.selectAllApartments();
			else{
				System.out.println("@ServiceAfter"+apartmentMapper.selectAllApartmentsByDependence(dependenceId).size());
				apartments = apartmentMapper.selectAllApartmentsByDependence(dependenceId);
				System.out.println("@ServiceAfter"+apartments.size());
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			apartments = null;
		} finally {
			
			return apartments;
		}
	}

	@Override
	@SuppressWarnings("finally")
	public Apartment selectApartmentById(Integer id) {
		// TODO Auto-generated method stub
		Apartment apartment = null;
		try {
			apartment = apartmentMapper.selectByPrimaryKey(id);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {
			return apartment;
		}
	}

	@Override
	@SuppressWarnings("finally")
	public boolean insertApartment(Apartment apartment) {
		// TODO Auto-generated method stub
		boolean flag = true;
		try {
			apartmentMapper.insertSelective(apartment);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			flag = false;
		} finally {
			return flag;
		}
	}

	@Override
	@SuppressWarnings("finally")
	public boolean updateApartmentInfo(Apartment apartment) {
		// TODO Auto-generated method stub
		boolean flag = true;
		try {
			apartmentMapper.updateByPrimaryKeySelective(apartment);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			flag = false;
		} finally {
			return flag;
		}
	}

	@Override
	@SuppressWarnings("finally")
	public boolean deleteApartmentById(Integer id) {
		// TODO Auto-generated method stub
		boolean flag = true;
		try {
			apartmentMapper.deleteByPrimaryKey(id);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			flag = false;
		} finally {
			return flag;
		}
	}
}
