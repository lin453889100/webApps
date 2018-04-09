package cn.lz.common;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by lz on 2018/3/16.
 */
public class HeadersCORSFilter implements Filter{
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,Authorization");
        response.setHeader("Access-Control-Allow-Credentials","true");
        // 防止缓存,退出后浏览器后退
        //Forces caches to obtain a new copy of the page from the origin server    
        response.setHeader("Cache-Control","no-cache");     
        //Directs caches not to store the page under any circumstance    
        response.setHeader("Cache-Control","no-store");     
        //HTTP 1.0 backward compatibility     
        response.setHeader("Pragma","no-cache");     
        //Causes the proxy cache to see the page as "stale"    
        response.setDateHeader("Expires", 0); 
        filterChain.doFilter(servletRequest, servletResponse);
    }

    public void destroy() {

    }
}
