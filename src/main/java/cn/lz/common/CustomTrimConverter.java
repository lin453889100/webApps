package cn.lz.common;

import org.springframework.core.convert.converter.Converter;

/**
 * Created by lz on 2018/3/19.
 */
public class CustomTrimConverter implements Converter<String,String>{


    public String convert(String s) {
        try {
            if (s != null){
                s = s.trim();
                if ("".equals(s)){
                    return null;
                }
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        return s;
    }
}
