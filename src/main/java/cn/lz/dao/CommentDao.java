package cn.lz.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CommentDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	/**
	 * 点赞查询
	 * @param userId
	 * @param fileId 
	 * @return
	 */
	public List<Map<String, Object>> queryZan(String userId, String fileId){
		String sql = "select id from file_zan where pk_user_1 = ? and pk_file_1 = ?";
		return jdbcTemplate.queryForList(sql, userId,fileId);
	}
	
	/**
	 * 点赞
	 * @param userId
	 * @param fileId
	 * @return
	 * @throws Exception
	 */
	public void zan(String userId,String fileId) throws Exception{
		String sql = "insert into file_zan (pk_user_1,pk_file_1) values (?,?)";
		jdbcTemplate.update(sql,userId,fileId);
		String sql1 = "update t_file SET klick = (klick+ 1) WHERE file_id = ?";
		jdbcTemplate.update(sql1,fileId);
	}
	
	/**
	 * 视频标记（标签）
	 * @param mark
	 * @param fileId
	 * @throws Exception
	 */
	public void updateMark(String mark ,String fileId) throws Exception{
		String sql = "update t_file set mark = ? where file_id = ?";
		jdbcTemplate.update(sql,mark,fileId);
	}
	
	/**
	 * 添加留言
	 * @param message
	 * @param fileId
	 * @param userId
	 * @throws Exception
	 */
	public void addMessage(String message,String fileId,String userId) throws Exception{
		String sql = "insert into user_file (pk_user_1,pk_file_1,message) values (?,?,?)";
		jdbcTemplate.update(sql,userId,fileId,message);
	}
}
