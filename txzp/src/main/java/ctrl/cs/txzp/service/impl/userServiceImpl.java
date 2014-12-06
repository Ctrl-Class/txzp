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

}
