/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50631
Source Host           : localhost:3306
Source Database       : mytest

Target Server Type    : MYSQL
Target Server Version : 50631
File Encoding         : 65001

Date: 2018-04-05 17:28:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for file_zan
-- ----------------------------
DROP TABLE IF EXISTS `file_zan`;
CREATE TABLE `file_zan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pk_user_1` varchar(255) COLLATE utf8_bin NOT NULL,
  `pk_file_1` varchar(255) COLLATE utf8_bin NOT NULL,
  `kick` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of file_zan
-- ----------------------------
INSERT INTO `file_zan` VALUES ('1', '6', '2', null);
INSERT INTO `file_zan` VALUES ('2', '7', '2', null);

-- ----------------------------
-- Table structure for t_file
-- ----------------------------
DROP TABLE IF EXISTS `t_file`;
CREATE TABLE `t_file` (
  `file_id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) COLLATE utf8_bin NOT NULL,
  `dir` varchar(255) COLLATE utf8_bin NOT NULL,
  `login_id` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `klick` int(11) DEFAULT NULL,
  `mark` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`file_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_file
-- ----------------------------
INSERT INTO `t_file` VALUES ('1', '1', 'c', '2', '2', '鬼畜视频');
INSERT INTO `t_file` VALUES ('2', 'movie-1522911868435.mp4', 'C:/videoUpload/movie-1522911868435.mp4', '6', '2', '动物');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `remark` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('2', '刘德华', '79FE555F162D519940B1E8AD5AF9AA2F', '');
INSERT INTO `t_user` VALUES ('3', '刘德华2', '3681DADEB1BBBFA927D23F95E17B355A', null);
INSERT INTO `t_user` VALUES ('4', '刘德华3', '3681DADEB1BBBFA927D23F95E17B355A', '0');
INSERT INTO `t_user` VALUES ('5', '刘德华4', '202CB962AC59075B964B07152D234B70', '0');
INSERT INTO `t_user` VALUES ('6', '18570669043', 'E10ADC3949BA59ABBE56E057F20F883E', '1');
INSERT INTO `t_user` VALUES ('7', '18725252552', 'E10ADC3949BA59ABBE56E057F20F883E', '0');

-- ----------------------------
-- Table structure for user_file
-- ----------------------------
DROP TABLE IF EXISTS `user_file`;
CREATE TABLE `user_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pk_user_1` int(11) NOT NULL,
  `pk_file_1` int(11) NOT NULL,
  `message` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user_file
-- ----------------------------
INSERT INTO `user_file` VALUES ('1', '2', '1', '我手动阀打发打发似的');
INSERT INTO `user_file` VALUES ('2', '3', '1', '我手动阀sdfadfad打发打发似的');
INSERT INTO `user_file` VALUES ('3', '2', '1', '科技猿人');
INSERT INTO `user_file` VALUES ('4', '2', '2', '123');
INSERT INTO `user_file` VALUES ('5', '6', '2', '我是大大');
INSERT INTO `user_file` VALUES ('6', '6', '2', 'hallasda');
INSERT INTO `user_file` VALUES ('7', '6', '2', 'adf');
INSERT INTO `user_file` VALUES ('8', '7', '1', '123123');
