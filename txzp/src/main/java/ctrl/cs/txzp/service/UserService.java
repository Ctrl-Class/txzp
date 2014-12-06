package ctrl.cs.txzp.service;

import ctrl.cs.txzp.modal.User;


public interface UserService {
	public User checkUser(String loginName,String password);
}
