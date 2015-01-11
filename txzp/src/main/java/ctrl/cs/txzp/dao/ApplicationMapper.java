package ctrl.cs.txzp.dao;

import java.util.ArrayList;

import ctrl.cs.txzp.modal.Application;

public interface ApplicationMapper {
    int deleteByPrimaryKey(Integer appId);

    int insert(Application record);

    int insertSelective(Application record);

    Application selectByPrimaryKey(Integer appId);

    int updateByPrimaryKeySelective(Application record);

    int updateByPrimaryKey(Application record);
    
    ArrayList<Application> selectAllApplications();
    
    ArrayList<Application> selectApplicationsByDependence(Integer dependenceId);
    
    ArrayList<Application> selectApplicationsByUserId(Integer userId);
    
    ArrayList<Application> selectApplicationsByApartmentId(Integer apartId);
}