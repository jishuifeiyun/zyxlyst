CREATE TABLE xing_ren_er (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,  -- 唯一索引，加速登录查询
  password_hash VARCHAR(255) NOT NULL,   -- 存储密码哈希，无需索引
  realname VARCHAR(100) NOT NULL,
  birthday DATE,
  department ENUM('tc', 'zx', 'xz', 'ys', 'el') NOT NULL,
  section VARCHAR(10) NOT NULL,
  phone VARCHAR(20),
  wechat VARCHAR(50),
  email VARCHAR(50),

  CHECK (
    (department = 'xz' AND section IN ('zuc', 'fal', 'xub')) OR
    (department = 'ys' AND section IN ('zhc', 'wud', 'bic', 'hec', 'lid', 'qiy')) OR
    (department IN ('tc', 'zx', 'el') AND section = 'non')
  )
);

CREATE UNIQUE INDEX idx_username ON xing_ren_er(username);

INSERT INTO xing_ren_er (
  username, password_hash, realname, birthday, department, section, phone, wechat, email
) VALUES (
  'jishuifeiyun',
  '$2b$10$gsAMWFJaMCCJvjr/PcDED.h8VGuqJcTxFu87kBYPyPFN9Jjz2gKE.',  -- 示例 bcrypt 哈希（假设已生成）
  '吉水飞云',
  '1990-01-01',
  'zx',
  'non',
  '13509761038',
  'jishuifeiyun',
  '1012293940@qq.com'
);

DELETE FROM xing_ren_er WHERE username = 'jishuifeiyun';
