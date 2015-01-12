package ctrl.cs.txzp.selfmodal;

public class ShowUserModal {
    private Integer userid;

    private String username;

    private String userpassword;

    private Integer roleid;
    
    private Integer userpartid;
    
    private String infoUsername;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }

    public Integer getRoleid() {
        return roleid;
    }

    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

	public Integer getUserpartid() {
		return userpartid;
	}

	public void setUserpartid(Integer userpartid) {
		this.userpartid = userpartid;
	}

	public String getInfoUsername() {
		return infoUsername;
	}

	public void setInfoUsername(String infoUsername) {
		this.infoUsername = infoUsername;
	}
}
