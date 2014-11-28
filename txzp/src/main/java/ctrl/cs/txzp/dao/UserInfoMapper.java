package ctrl.cs.txzp.dao;

import ctrl.cs.txzp.modal.UserInfo;

public interface UserInfoMapper {
    int deleteByPrimaryKey(Integer infoId);

    int insert(UserInfo record);

    int insertSelective(UserInfo record);

    UserInfo selectByPrimaryKey(Integer infoId);

    int updateByPrimaryKeySelective(UserInfo record);

    int updateByPrimaryKeyWithBLOBs(UserInfo record);

    int updateByPrimaryKey(UserInfo record);
}