package cn.lz.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

import cn.lz.service.LoginService;
import cn.lz.utils.MD5Util;

@Controller
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginService;
	
	@RequestMapping("/logout")
	public String logout(HttpServletRequest request){
		request.getSession().removeAttribute("loginId");
		return "redirect:/login/toLogin";
	}
	
	@RequestMapping("/toLogin")
	public String toLogin(){
		
		return "/sign_login";
	}
	
	@RequestMapping("/toList")
	public String toList(HttpServletRequest request){
		Object attribute = request.getSession().getAttribute("loginId");
		if(attribute == null){
			return "redirect:/login/toLogin";
		} else {
			return "/sign_list";
		}
	}
	
	@RequestMapping("/in")
	@ResponseBody
	public JSONObject login(HttpServletRequest request,Model model){
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		JSONObject jsonObject = new JSONObject();
		if(StringUtils.isNotBlank(username)){
			List<Map<String,Object>> queryUser = loginService.queryUser(username);
			if(queryUser.size() > 0){
				if(StringUtils.isNotBlank(password) && queryUser.get(0).get("password").equals(MD5Util.MD5(password))){
					request.getSession().setAttribute("loginId", queryUser.get(0).get("user_id"));
					//model.addAttribute("msg", "登陆成功！");
					//jsonObject.put("username", queryUser.get(0).get("username"));
					//jsonObject.put("loginId", queryUser.get(0).get("user_id"));
					jsonObject.put("msg", "1");
				} else {
					jsonObject.put("msg", "Incorrect Password！");
				}
			} else {
				jsonObject.put("msg", "User doesn't exist, Please register！");
			}
		} else {
			jsonObject.put("msg", "Username is empty！");
		}
		return jsonObject;
	}
}
