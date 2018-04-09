package cn.lz.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

import cn.lz.service.CommentService;

@Controller
@RequestMapping("/comment")
public class CommentController {

	@Autowired
	private CommentService commentService;
	
	/**
	 * 点赞
	 * @param loginId
	 */
	@RequestMapping("/zan")
	@ResponseBody
	public JSONObject klickZan(HttpServletRequest request){
		String loginId = request.getParameter("loginId");
		String fileId = request.getParameter("fileId");
		JSONObject jsonObject = new JSONObject();
		if(StringUtils.isNotBlank(loginId) && StringUtils.isNotBlank(fileId)){
			try {
				String zan = commentService.zan(loginId, fileId);
				if(zan.equals("1")){
					jsonObject.put("msg", "Liked！");
				} else {
					jsonObject.put("msg", "Already Liked！");
				}
			} catch (Exception e) {
				jsonObject.put("msg", "Error！");
				e.printStackTrace();
			}
		} else {
			jsonObject.put("msg", "Empty file！");
		}
		return jsonObject;
	}
	
	/**
	 * 修改标签
	 * @param request
	 * @return
	 */
	@RequestMapping("/remark")
	@ResponseBody
	public JSONObject remark(HttpServletRequest request){
		String mark = request.getParameter("mark");
		String fileId = request.getParameter("fileId");
		JSONObject jsonObject = new JSONObject();
		if(StringUtils.isNotBlank(fileId) && StringUtils.isNotBlank(mark)){
			try {
				commentService.remark(mark, fileId);
				jsonObject.put("msg","Tagged!");
			} catch (Exception e) {
				jsonObject.put("msg","Error!");
				e.printStackTrace();
			}
		} else {
			jsonObject.put("msg","Can't be empty!");
		}
		return jsonObject;
	}
	
	/**
	 * 留言
	 * @param request
	 * @return
	 */
	@RequestMapping("/msg")
	@ResponseBody
	public JSONObject message(HttpServletRequest request){
		String message = request.getParameter("message");
		String fileId = request.getParameter("fileId");
		String loginId = request.getParameter("loginId");
		JSONObject jsonObject = new JSONObject();
		if(StringUtils.isNotBlank(fileId) && StringUtils.isNotBlank(loginId)){
			if(StringUtils.isNotBlank(message)){
				try {
					commentService.addMessage(message, fileId, loginId);
					jsonObject.put("msg","Comment Success!");
				} catch (Exception e) {
					jsonObject.put("msg","Error!");
					e.printStackTrace();
				}
			} else {
				jsonObject.put("msg","Comment is empty!");
			}
		} else {
			jsonObject.put("msg","Can't be empty!");
		}
		return jsonObject;
	}
	
}
