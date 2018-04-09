package cn.lz.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.lz.dao.LoginDao;

@Service
@Transactional
public class LoginService {

	@Autowired
	private LoginDao loginDao;
	
	public List<Map<String, Object>> queryUser(String username){
		return loginDao.queryUser(username);
	}
}
