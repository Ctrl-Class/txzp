package ctrl.cs.txzp.service;

import ctrl.cs.txzp.modal.User;


public interface UserService {
	public User checkUser(String loginName,String password);
	
	public boolean addUser(String loginName,String passWord,int roleid);
	
	public User selectUserByPrimerKey(int userid);
	
	public boolean updateUser(int userid, String userName,String passWord);
	
	public User findUserByUsername(String username);
	
	;
		
}
