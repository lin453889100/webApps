package cn.lz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.lz.dao.RegistDao;

@Service
@Transactional
public class RegistService {

	@Autowired
	private RegistDao registDao;
	
	public void addUser(String name ,String password) throws Exception{
		registDao.addUser(name, password);
	}
	
}
