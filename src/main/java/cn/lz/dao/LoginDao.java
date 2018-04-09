package cn.lz.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	/**
     * 通过用户名查询用户
     * @param username
     * @return
     */
    public List<Map<String, Object>> queryUser(String username){
        String sql = "select * from t_user where username = ?";
        return jdbcTemplate.queryForList(sql, username);
    }
}
