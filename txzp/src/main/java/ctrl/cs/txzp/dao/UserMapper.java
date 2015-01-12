package ctrl.cs.txzp.dao;

import java.util.ArrayList;

import ctrl.cs.txzp.modal.User;
import ctrl.cs.txzp.selfmodal.ShowUserModal;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userid);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userid);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
    
    User checkUser(User user);
    
    User findUserByUsername(String username);
    
    ArrayList<ShowUserModal> findUserByOption(ShowUserModal record);
}