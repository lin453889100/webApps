package cn.lz.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.lz.dao.QueryDao;

@Service
@Transactional
public class QueryService {

	@Autowired
	private QueryDao queryDao;
	
	/**
	 * 查询视频列表(包含留言)
	 * @param mark 
	 * @return
	 */
	public List<Map<String, Object>> queryFileList(String mark){
		List<Map<String,Object>> queryFileList = queryDao.queryFileList(mark);
		for (Map<String, Object> map : queryFileList) {
			List<Map<String,Object>> queryMessage = queryDao.queryMessage(map.get("fileId").toString());
			Map<String, Object> m = new HashMap<String,Object>();
			for(int i = 0;i < queryMessage.size();i++){
				m.put("m" + i, queryMessage.get(i));
			}
			map.put("message", m);
		}
		return queryFileList;
	}
	
	/**
	 * 查询视频列表(不包含留言)
	 * @return
	 */
	public List<Map<String,Object>> queryFileList2(){
		return queryDao.queryFileList(null);
	}
	
	/**
	 * 查询留言（全部）
	 * @return
	 */
	public List<Map<String, Object>> queryAllMessage() {
		return queryDao.queryAllMessage();
	}
}
