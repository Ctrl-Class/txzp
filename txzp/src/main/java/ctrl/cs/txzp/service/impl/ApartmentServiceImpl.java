package ctrl.cs.txzp.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ctrl.cs.txzp.dao.ApartmentMapper;
import ctrl.cs.txzp.dao.UserMapper;
import ctrl.cs.txzp.modal.Apartment;
import ctrl.cs.txzp.selfmodal.ShowApartModal;
import ctrl.cs.txzp.service.ApartmentService;

@Service("/ApartmentService")
public class ApartmentServiceImpl implements ApartmentService {
	private ApartmentMapper apartmentMapper;

	private UserMapper userMapper;

	public UserMapper getUserMapper() {
		return userMapper;
	}

	@Autowired
	public void setUserMapper(UserMapper userMapper) {
		this.userMapper = userMapper;
	}

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
			else {
				System.out.println("@ServiceAfter"
						+ apartmentMapper.selectAllApartmentsByDependence(
								dependenceId).size());
				apartments = apartmentMapper
						.selectAllApartmentsByDependence(dependenceId);
				System.out.println("@ServiceAfter" + apartments.size());
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
	public ShowApartModal selectApartmentById(Integer id) {
		// TODO Auto-generated method stub
		ShowApartModal apartment = new ShowApartModal();
		try {
			String name1="", name2="", name3="";
			Apartment temp = apartmentMapper.selectByPrimaryKey(id);
			if (temp.getApartManagerUserid() != null)
				name1 = userMapper.selectByPrimaryKey(
						temp.getApartManagerUserid()).getUsername();
			if (temp.getApartManagerTwoUserid() != null)
				name2 = userMapper.selectByPrimaryKey(
						temp.getApartManagerTwoUserid()).getUsername();
			if (temp.getApartManagerThreeUserid() != null)
				name3 = userMapper.selectByPrimaryKey(
						temp.getApartManagerThreeUserid()).getUsername();
			apartment.setApartment(temp);
			apartment.setName1(name1);
			apartment.setName2(name2);
			apartment.setName3(name3);
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
