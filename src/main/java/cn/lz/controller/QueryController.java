package cn.lz.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;

import cn.lz.service.QueryService;

@Controller
@RequestMapping("/query")
public class QueryController {

	@Autowired
	private QueryService queryService;
	
	/**
	 * 查询全部
	 * @return
	 */
	@RequestMapping(value = "/all",produces = "text/html;charset=UTF-8")
	@ResponseBody
	public String queryFileList(HttpServletRequest request){
		
		String mark = request.getParameter("mark");
		
		//包含留言
		List<Map<String,Object>> queryFileList = queryService.queryFileList(mark);
		//不包含留言
		//List<Map<String,Object>> queryFileList2 = queryService.queryFileList2();
		
		String jsonString = JSON.toJSONString(queryFileList);
		return jsonString;
	}
	
	/**
	 * 查询留言（全部）
	 * @return
	 */
	@RequestMapping("/allMessage")
	@ResponseBody
	public String queryMessage(){
		List<Map<String,Object>> queryAllMessage = queryService.queryAllMessage();
		String jsonString = JSON.toJSONString(queryAllMessage);
		System.out.println(jsonString);
		return jsonString;
	}
}
