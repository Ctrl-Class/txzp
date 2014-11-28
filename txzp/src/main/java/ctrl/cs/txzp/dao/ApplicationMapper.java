package ctrl.cs.txzp.dao;

import ctrl.cs.txzp.modal.Application;

public interface ApplicationMapper {
    int deleteByPrimaryKey(Integer appId);

    int insert(Application record);

    int insertSelective(Application record);

    Application selectByPrimaryKey(Integer appId);

    int updateByPrimaryKeySelective(Application record);

    int updateByPrimaryKey(Application record);
}