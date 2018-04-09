package cn.lz.service;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.lz.dao.CommentDao;

@Service
@Transactional
public class CommentService {

	@Autowired
	private CommentDao commentDao;
	
	/**
	 * 点赞
	 * @param userId
	 * @param fileId
	 * @return
	 * @throws Exception
	 */
	public String zan(String userId,String fileId) throws Exception{
		List<Map<String, Object>> queryZan = commentDao.queryZan(userId,fileId);
		if(queryZan.size() > 0){
			return "0";
		} else {
			commentDao.zan(userId, fileId);
			return "1";
		}
	}
	
	/**
	 * 视频标记（标签）
	 * @param mark
	 * @param fileId
	 * @throws Exception
	 */
	public void remark(String mark ,String fileId) throws Exception{
		commentDao.updateMark(mark, fileId);
	}
	
	/**
	 * 添加留言
	 * @param message
	 * @param fileId
	 * @param userId
	 * @throws Exception
	 */
	public void addMessage(String message,String fileId,String userId) throws Exception{
		commentDao.addMessage(message, fileId, userId);
	}
}
