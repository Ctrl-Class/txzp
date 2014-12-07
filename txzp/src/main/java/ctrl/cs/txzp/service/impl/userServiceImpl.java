package ctrl.cs.txzp.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ctrl.cs.txzp.dao.UserMapper;
import ctrl.cs.txzp.modal.User;
import ctrl.cs.txzp.service.UserService;
@Service("/UserService")
public class userServiceImpl implements UserService {
	public UserMapper userMaping;
	public UserMapper getUserMaping() {
		return userMaping;
	}
	@Autowired
	public void setUserMaping(UserMapper userMaping) {
		this.userMaping = userMaping;
	}

	@Override
	@SuppressWarnings("finally")
	public User checkUser(String loginName, String password) {
		// TODO Auto-generated method stub
		User result = null;
		try {
			User user = new User();
			user.setUsername(loginName);
			user.setUserpassword(password);
			result = userMaping.checkUser(user);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally{
			return result;
		}
		
	}
	
	@Override
	@SuppressWarnings("finally")
	public boolean addUser(String loginName,String passWord,int roleid){
		User user = new User();
		try{
			user.setRoleid(roleid);
			user.setUsername(loginName);
			user.setUserpassword(passWord);
			userMaping.insert(user);
		}catch(Exception e){
			e.printStackTrace();
			return false;
		}finally{
			return true;
		}
	}
	
	@SuppressWarnings("finally")
	@Override
	public User selectUserByPrimerKey(int userid){
		User user = null;
		try {
			user = userMaping.selectByPrimaryKey(userid);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{
			return user;
		}
	}
	@SuppressWarnings("finally")
	@Override
	public boolean updateUser(int userid, String userName,String passWord){
		User user = new User();
		try {
			user.setUserid(userid);
			user.setUsername(userName);
			user.setUserpassword(passWord);
			userMaping.updateByPrimaryKeySelective(user);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return false;
		} finally{
			return true;
		}
	}
}
