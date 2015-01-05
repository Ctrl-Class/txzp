package ctrl.cs.txzp.dao;

import ctrl.cs.txzp.modal.User;

public interface UserMapper {
    int deleteByPrimaryKey(Integer userid);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer userid);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
    
    User checkUser(User user);
    
    User findUserByUsername(String username);
}