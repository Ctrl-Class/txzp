package ctrl.cs.txzp.modal;

import java.util.Date;

public class Application {
    private Integer appId;

    private Integer appUserid;

    private String appName;

    private Integer appApartmenid;

    private Date appTime;

    private Integer appState;

    public Integer getAppId() {
        return appId;
    }

    public void setAppId(Integer appId) {
        this.appId = appId;
    }

    public Integer getAppUserid() {
        return appUserid;
    }

    public void setAppUserid(Integer appUserid) {
        this.appUserid = appUserid;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public Integer getAppApartmenid() {
        return appApartmenid;
    }

    public void setAppApartmenid(Integer appApartmenid) {
        this.appApartmenid = appApartmenid;
    }

    public Date getAppTime() {
        return appTime;
    }

    public void setAppTime(Date appTime) {
        this.appTime = appTime;
    }

    public Integer getAppState() {
        return appState;
    }

    public void setAppState(Integer appState) {
        this.appState = appState;
    }
}