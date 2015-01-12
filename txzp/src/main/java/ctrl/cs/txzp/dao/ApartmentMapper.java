package ctrl.cs.txzp.dao;

import java.util.ArrayList;
import java.util.List;

import ctrl.cs.txzp.modal.Apartment;

public interface ApartmentMapper {
    int deleteByPrimaryKey(Integer apartId);

    int insert(Apartment record);

    int insertSelective(Apartment record);

    Apartment selectByPrimaryKey(Integer apartId);

    int updateByPrimaryKeySelective(Apartment record);

    int updateByPrimaryKeyWithBLOBs(Apartment record);

    int updateByPrimaryKey(Apartment record);
    
    ArrayList<Apartment> selectAllApartmentsByDependence(Integer dependenceId);
    
    ArrayList<Apartment> selectAllApartments();
    
    ArrayList<Apartment> checkApartments(Apartment record);
}