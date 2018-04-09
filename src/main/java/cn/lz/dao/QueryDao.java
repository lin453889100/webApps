package cn.lz.dao;

import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class QueryDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	/**
	 * 查询列表
	 * @param mark 
	 */
	public List<Map<String, Object>> queryFileList(String mark) {
		String sql = null;
		if(StringUtils.isNotBlank(mark)){
			sql = "SELECT f.file_id fileId,f.filename,f.dir,tu2.username uploadUser,f.klick,f.mark"
					+ " FROM `t_file` f LEFT JOIN t_user tu2 ON f.login_id = tu2.user_id WHERE mark = '" + mark + "' ORDER BY f.klick DESC LIMIT 0,10";
		} else {
			sql = "SELECT f.file_id fileId,f.filename,f.dir,tu2.username uploadUser,f.klick,f.mark"
					+ " FROM `t_file` f LEFT JOIN t_user tu2 ON f.login_id = tu2.user_id ORDER BY f.klick DESC LIMIT 0,10";
		}
		return jdbcTemplate.queryForList(sql);
	}

	/**
	 * 查询留言(根据id)
	 * @param fileId
	 * @return
	 */
	public List<Map<String, Object>> queryMessage(String fileId) {
		String sql = "SELECT u.message , tu1.username FROM user_file u "
				+ "LEFT JOIN t_user tu1 ON tu1.user_id = u.pk_user_1 " 
				+ "WHERE u.pk_file_1 = ?";
		return jdbcTemplate.queryForList(sql, fileId);
	}
	
	/**
	 * 查询留言（全部）
	 * @return
	 */
	public List<Map<String, Object>> queryAllMessage() {
		String sql = "SELECT u.id messageId,f.filename,u.message , tu1.username "
				+ "FROM user_file u "
				+ "LEFT JOIN t_user tu1 ON tu1.user_id = u.pk_user_1 " 
				+ "LEFT JOIN t_file f ON f.file_id = u.pk_file_1 ";
		return jdbcTemplate.queryForList(sql);
	}
}
