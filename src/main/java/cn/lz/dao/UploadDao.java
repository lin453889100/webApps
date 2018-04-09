package cn.lz.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UploadDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public void addRecord(String filename,String dir,String loginId, String tag){
		String sql = "insert into t_file (filename,dir,login_id,mark,klick) values (?,?,?,?,0)";
		jdbcTemplate.update(sql,filename,dir,loginId,tag);
	}
}
