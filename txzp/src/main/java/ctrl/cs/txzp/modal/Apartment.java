package ctrl.cs.txzp.modal;

import java.util.Date;

public class Apartment {
    private Integer apartId;

    private String apartName;

    private String apartRequire;

    private Integer apartManagerUserid;
    
    private Integer apartManagerTwoUserid;
    
    private Integer apartManagerThreeUserid;

    private Date apartDeadline;

    private String apartInfo;
    
    private Integer apartDependence;

    public Integer getApartId() {
        return apartId;
    }

    public void setApartId(Integer apartId) {
        this.apartId = apartId;
    }

    public String getApartName() {
        return apartName;
    }

    public void setApartName(String apartName) {
        this.apartName = apartName;
    }

    public String getApartRequire() {
        return apartRequire;
    }

    public void setApartRequire(String apartRequire) {
        this.apartRequire = apartRequire;
    }

    public Integer getApartManagerUserid() {
        return apartManagerUserid;
    }

    public void setApartManagerUserid(Integer apartManagerUserid) {
        this.apartManagerUserid = apartManagerUserid;
    }

    public Date getApartDeadline() {
        return apartDeadline;
    }

    public void setApartDeadline(Date apartDeadline) {
        this.apartDeadline = apartDeadline;
    }

    public String getApartInfo() {
        return apartInfo;
    }

    public void setApartInfo(String apartInfo) {
        this.apartInfo = apartInfo;
    }

	public Integer getApartDependence() {
		return apartDependence;
	}

	public void setApartDependence(Integer apartDependence) {
		this.apartDependence = apartDependence;
	}

	public Integer getApartManagerTwoUserid() {
		return apartManagerTwoUserid;
	}

	public void setApartManagerTwoUserid(Integer apartManagerTwoUserid) {
		this.apartManagerTwoUserid = apartManagerTwoUserid;
	}

	public Integer getApartManagerThreeUserid() {
		return apartManagerThreeUserid;
	}

	public void setApartManagerThreeUserid(Integer apartManagerThreeUserid) {
		this.apartManagerThreeUserid = apartManagerThreeUserid;
	}
}