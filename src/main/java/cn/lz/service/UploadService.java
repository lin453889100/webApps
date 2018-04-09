package cn.lz.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.lz.dao.UploadDao;

@Service
@Transactional
public class UploadService {

	@Autowired
	private UploadDao uploadDao;
	
	public void addRecord(String filename,String dir,String loginId, String tag){
		uploadDao.addRecord(filename, dir,loginId,tag);
	}
}
