package ctrl.cs.txzp.service;

import java.util.ArrayList;

import ctrl.cs.txzp.modal.User;
import ctrl.cs.txzp.selfmodal.ShowUserModal;


public interface UserService {
	public User checkUser(String loginName,String password);
	
	public boolean addUser(String loginName,String passWord,int roleid);
	
	public User selectUserByPrimerKey(int userid);
	
	public boolean updateUser(int userid, String userName,String passWord);
	
	public User findUserByUsername(String username);
	
	public ArrayList<ShowUserModal> findUserByOption(ShowUserModal reword);
}
