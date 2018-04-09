package cn.lz.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RegistDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public void addUser(String name ,String password) throws Exception{
		String sql = "insert into t_user (username,password,remark) values (?,?,0)";
		jdbcTemplate.update(sql,name,password);
	}
	
}
