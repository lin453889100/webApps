package cn.lz.utils;

import java.util.ResourceBundle;

/**
 * Created by lz on 2018/3/22.
 */
public class ResourceUtil {

    private static String adminName = null;

    private static String adminPassword = null;

    //获取管理员名称
    public static String getAdminName(){
        if (adminName == null) {
            ResourceBundle rb = ResourceBundle.getBundle("manager");
            adminName = rb.getString("adminName");
        }
        return adminName;
    }
    //获取管理员密码
    public static String getAdminPassword(){
        if (adminPassword == null) {
            ResourceBundle rb = ResourceBundle.getBundle("manager");
            adminPassword = rb.getString("adminPassword");
        }
        return adminPassword;
    }
}
