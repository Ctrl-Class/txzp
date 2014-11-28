package ctrl.cs.txzp.modal;

import java.util.Date;

public class Apartment {
    private Integer apartId;

    private String apartName;

    private String apartRequire;

    private Integer apartManagerUserid;

    private Date apartDeadline;

    private String apartInfo;

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
}