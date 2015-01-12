package ctrl.cs.txzp.dao;

import java.util.ArrayList;

import ctrl.cs.txzp.modal.Application;
import ctrl.cs.txzp.selfmodal.ShowAppModal;

public interface ApplicationMapper {
    int deleteByPrimaryKey(Integer appId);

    int insert(Application record);

    int insertSelective(Application record);

    ShowAppModal selectByPrimaryKey(Integer appId);

    int updateByPrimaryKeySelective(Application record);

    int updateByPrimaryKey(Application record);
    
    ArrayList<ShowAppModal> selectAllApplications();
    
    ArrayList<ShowAppModal> selectApplicationsByDependence(Integer dependenceId);
    
    ArrayList<ShowAppModal> selectApplicationsByUserId(Integer userId);
    
    ArrayList<ShowAppModal> selectApplicationsByApartmentId(Integer apartId);
    
    int deleteByApartId(Integer apartId);
}