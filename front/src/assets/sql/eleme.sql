/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : eleme

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-10-09 00:23:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for appraise
-- ----------------------------
DROP TABLE IF EXISTS `appraise`;
CREATE TABLE `appraise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `head_sculpture` varchar(50) NOT NULL,
  `name` varchar(20) NOT NULL,
  `comment` varchar(200) NOT NULL,
  `response` varchar(200) NOT NULL,
  `time` varchar(20) NOT NULL,
  `estimate` float(2,1) NOT NULL,
  `store_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `appraise_store_id` (`store_id`),
  CONSTRAINT `appraise_store_id` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appraise
-- ----------------------------
INSERT INTO `appraise` VALUES ('1', 'sculpture.png', 'c*********0', '好吃好吃好吃', '亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！', '2019-10-04', '4.9', '5');
INSERT INTO `appraise` VALUES ('2', 'sculpture.png', '凉***y', '好次好次好次', '感谢您对本品牌的支持与认可，衷心祝您生活愉快，工作顺利。对本品牌有任何不满意的地方请联系我们。全国服务热线:4009900961', '2019-10-03', '4.9', '5');
INSERT INTO `appraise` VALUES ('3', 'sculpture.png', '3*******0', '很好吃的最近点了好几次了～～～～', '亲爱的顾客，感谢您选择品尝本店的美食，谢谢您认可我们的口味和服务，我们会继续努力，为您提供更好的服务。祝您生活愉快！', '2019-10-01', '4.7', '5');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `small_category` varchar(20) NOT NULL,
  `big_category` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '小吃炸串', '美食');
INSERT INTO `category` VALUES ('2', '地方菜系', '美食');
INSERT INTO `category` VALUES ('3', '简餐便当', '美食');
INSERT INTO `category` VALUES ('4', '香锅冒菜', '美食');
INSERT INTO `category` VALUES ('5', '汉堡披萨', '美食');
INSERT INTO `category` VALUES ('6', '烧烤', '美食');
INSERT INTO `category` VALUES ('7', '北京炸酱面', '美食');

-- ----------------------------
-- Table structure for dishes
-- ----------------------------
DROP TABLE IF EXISTS `dishes`;
CREATE TABLE `dishes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `pic_name` varchar(50) NOT NULL,
  `price` float(11,1) NOT NULL,
  `original_price` float(11,1) NOT NULL,
  `feedback_rate` int(2) NOT NULL,
  `sales` int(11) NOT NULL,
  `des` varchar(200) NOT NULL,
  `low_number` int(11) NOT NULL,
  `category` varchar(20) NOT NULL,
  `store_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dishes_store_id` (`store_id`),
  CONSTRAINT `dishes_store_id` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dishes
-- ----------------------------
INSERT INTO `dishes` VALUES ('1', '蟹肉棒', '1.jpg', '0.0', '0.0', '0', '0', '【限赠1串哦】您的好评是我们大大的动力呢，么么哒\r\n主要原料：馒头', '1', '老店福利大放送', '5');
INSERT INTO `dishes` VALUES ('2', '土豆片', '2.jpg', '0.0', '0.0', '0', '0', '【限赠1串哦】亲们，喜欢请收藏我们店铺哦，方便您下次可以快速找到我们呢\r\n主要原料：土豆', '1', '老店福利大放送', '5');
INSERT INTO `dishes` VALUES ('3', '千叶豆腐', '3.jpg', '0.0', '0.0', '0', '0', '【限赠1串哦】小主们，收藏店铺，给个爱的鼓励哦，我们会不断努力的\r\n主要原料：豆腐', '1', '老店福利大放送', '5');
INSERT INTO `dishes` VALUES ('4', '辣度选择', '4.jpg', '0.0', '0.0', '0', '0', '每个人对辣度的理解有偏差，如有特殊需求的请订单备注哦\r\n主要原料：其他', '1', '必选品(辣度选择)', '5');
INSERT INTO `dishes` VALUES ('5', '金针菇', '5.jpg', '2.5', '0.0', '100', '999', '新鲜食材搭配特制酱料，富有弹性，入口爽脆。\r\n主要原料：金针菇', '1', '热销', '5');
INSERT INTO `dishes` VALUES ('6', '韭菜', '6.jpg', '3.0', '0.0', '98', '999', '\r\n主要原料：韭菜', '1', '热销', '5');
INSERT INTO `dishes` VALUES ('7', '秘制羊肉串', '7.jpg', '6.0', '0.0', '98', '999', '月售9999+新鲜的羊肉腌制，挑选肉质时，遵循“三瘦两肥”搭配，让人流连忘返，回味无穷。\r\n主要原料：羊肉', '1', '热销', '5');
INSERT INTO `dishes` VALUES ('8', '炭烤掌中宝', '8.jpg', '0.1', '6.0', '100', '100', '\r\n主要原料：鸡肉', '3', '折扣同享', '5');
INSERT INTO `dishes` VALUES ('9', '秘制牛肉串', '9.jpg', '6.0', '0.0', '99', '999', '月售9999+来自草原的牛肉，精肉紧而不柴，肥肉肥而不腻。多种层次的口味结合，赞不绝口。\r\n主要原料：牛肉', '1', '荤菜系列', '5');
INSERT INTO `dishes` VALUES ('10', '鸭肠小串/10串', '10.jpg', '8.8', '0.0', '97', '300', '', '1', '小串系列', '5');
INSERT INTO `dishes` VALUES ('11', '年糕', '11.jpg', '2.5', '0.0', '100', '999', '\r\n主要原料：年糕', '1', '素菜系列', '5');
INSERT INTO `dishes` VALUES ('12', '秋刀鱼', '12.jpg', '13.8', '0.0', '93', '300', '秋刀鱼的滋味，猫跟你都想了解。', '1', '海鲜系列', '5');
INSERT INTO `dishes` VALUES ('13', '锡纸花甲粉丝', '13.jpg', '34.0', '0.0', '100', '64', '\r\n主要原料：花蛤', '1', '锡纸系列', '5');
INSERT INTO `dishes` VALUES ('14', '油炸花生米', '14.jpg', '15.0', '0.0', '100', '26', '', '1', '小菜系列', '5');
INSERT INTO `dishes` VALUES ('15', '鸡蛋炒河粉（单点不配送，必须点烧烤）', '15.jpg', '16.0', '0.0', '100', '200', '\r\n主要原料：河粉', '1', '主食系列', '5');
INSERT INTO `dishes` VALUES ('16', '雪花啤酒', '16.jpg', '10.0', '0.0', '0', '1', '\r\n主要原料：啤酒', '1', '酒水饮料', '5');
INSERT INTO `dishes` VALUES ('17', '五花肉5串', '17.jpg', '22.0', '0.0', '100', '65', '', '1', '组合套餐', '5');
INSERT INTO `dishes` VALUES ('18', '一人(套餐)饮酒醉', '18.jpg', '28.0', '58.0', '100', '62', '套餐明细：羊肉串2+掌中宝1+里脊肉1+五花肉1+烤面筋1+生蚝1+鱿鱼须1+土豆1+娃娃菜1+金针菇1\r\n主要原料：羊肉', '1', '精选套餐', '5');

-- ----------------------------
-- Table structure for position_list
-- ----------------------------
DROP TABLE IF EXISTS `position_list`;
CREATE TABLE `position_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address_name` varchar(20) NOT NULL,
  `address` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of position_list
-- ----------------------------
INSERT INTO `position_list` VALUES ('1', '上海市', '上海市黄浦区上海市');
INSERT INTO `position_list` VALUES ('2', '上海站', '上海市静安区秣陵路303号');
INSERT INTO `position_list` VALUES ('3', '上海贝岭', '上海市徐汇区宜山路810号中国电子贝岭大厦');

-- ----------------------------
-- Table structure for search_store
-- ----------------------------
DROP TABLE IF EXISTS `search_store`;
CREATE TABLE `search_store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `store_name` varchar(20) NOT NULL,
  `estimate` float(2,1) NOT NULL,
  `short_pic` varchar(100) NOT NULL,
  `store_index` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of search_store
-- ----------------------------
INSERT INTO `search_store` VALUES ('1', '老北京炸酱面(浦江店)', '4.7', '1.jpg', '1');
INSERT INTO `search_store` VALUES ('2', '烤官大人烧烤(江文路店)', '4.7', '2.jpg', '2');
INSERT INTO `search_store` VALUES ('3', '大胡子烧烤', '4.9', '3.jpg', '3');
INSERT INTO `search_store` VALUES ('4', '虾友情烧烤·龙虾(江文路店)', '4.9', '4.jpg', '4');
INSERT INTO `search_store` VALUES ('5', '串意十足烧烤店(江文路店)', '4.7', '5.jpg', '5');

-- ----------------------------
-- Table structure for store
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `store_name` varchar(20) NOT NULL,
  `store_address` varchar(100) NOT NULL,
  `store_pic` varchar(100) NOT NULL,
  `sales` int(11) NOT NULL,
  `low_pay` int(11) NOT NULL,
  `distribution_fee` float(11,1) NOT NULL,
  `tag` varchar(50) NOT NULL,
  `discount1` varchar(100) NOT NULL,
  `discount2` varchar(100) NOT NULL,
  `discount3` varchar(100) NOT NULL,
  `estimate` float(2,1) NOT NULL,
  `category` varchar(20) NOT NULL,
  `info` varchar(1000) NOT NULL,
  `big_category` varchar(20) NOT NULL,
  `announcement` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of store
-- ----------------------------
INSERT INTO `store` VALUES ('1', '老北京炸酱面(浦江店)', '上海市闵行区浦江镇谈中路97弄43号', 'shop1.jpg', '2492', '15', '1.0', '北京炸酱面,支持自取,品质联盟', '满22减5，满30减8，满45减12，满65减15', '折扣商品6折起', '22减5，30减8，45减12，65减15', '4.7', '北京炸酱面', '老北京炸酱面口感地道，欢迎品尝', '美食', '公告：（正规渠道，真材实料，不用假牛羊肉骗人！！！（小店实付200以上开票，开票隔天开或者发快递，有问题请及时联系小店，祝您用餐愉快~）');
INSERT INTO `store` VALUES ('2', '烤官大人烧烤(江文路店)', '上海市闵行区浦江镇江文路559弄43号1层-3室', 'shop2.jpg', '1581', '15', '4.0', '其他小吃,支持自取,品质联盟', '满38减23，满68减38，满128减58，满168减68', '满35元赠送【雪碧】330ml易拉罐产品1份', '38减23，68减38，128减58，168减68', '4.7', '烧烤', '吃烤官大人事事中状元！', '美食', '公告：（正规渠道，真材实料，不用假牛羊肉骗人！！！（小店实付200以上开票，开票隔天开或者发快递，有问题请及时联系小店，祝您用餐愉快~）');
INSERT INTO `store` VALUES ('3', '大胡子烧烤', '上海市闵行区浦江镇三鲁公路2659号2幢1层118室', 'shop3.jpg', '73', '15', '4.3', '烧烤,品质联盟', '满30减10，满45减13，满60减23，满80减26，满100减38', '新用户下单立减17元', '30减10，45减13，60减23，80减26，100减38', '4.9', '烧烤', '暂无简介', '美食', '公告：（正规渠道，真材实料，不用假牛羊肉骗人！！！（小店实付200以上开票，开票隔天开或者发快递，有问题请及时联系小店，祝您用餐愉快~）');
INSERT INTO `store` VALUES ('4', '虾友情烧烤·龙虾(江文路店)', '上海市闵行区浦江镇江文路559弄60号', 'shop4.jpg', '403', '30', '5.0', '烧烤,支持自取,品质联盟', '满58减26，满78减36，满138减56，满268减116', '折扣商品7折起', '58减26，78减36，138减56，268减116', '4.9', '烧烤', '品牌连锁，专业做龙虾烧烤15年，值得你信任。', '美食', '公告：（正规渠道，真材实料，不用假牛羊肉骗人！！！（小店实付200以上开票，开票隔天开或者发快递，有问题请及时联系小店，祝您用餐愉快~）');
INSERT INTO `store` VALUES ('5', '串意十足烧烤店(江文路店)', '上海市闵行区浦连路282弄10号1-2层', 'shop5.jpg', '4466', '15', '3.5', '烧烤,支持自取,品质联盟', '满49减32，满88减45，满108减55，满138减60，满168减70', '特价商品0.1元起', '49减32，88减45，108减55，138减60，168减70', '4.7', '烧烤', '【串意十足】隶属于上海特迪餐饮管理有限公司，总部位于上海，是一家立志打造高品质烧烤的连锁品牌。以客户为中心，严把餐品质量，让大家吃到放心的烧烤。全国招商热线4009900961', '美食', '公告：（正规渠道，真材实料，不用假牛羊肉骗人！！！（小店实付200以上开票，开票隔天开或者发快递，有问题请及时联系小店，祝您用餐愉快~）');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `phone_number` varchar(11) NOT NULL,
  `real_name` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '生姜头斯科尔斯', '18221528042', '张毅', '闵行区浦江镇江文路330弄33号502');
