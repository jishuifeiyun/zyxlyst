# Date
### 版本
- xlyst_web-1.0.0
- 最小版本号更新     问题修复
- 次一级版本号更新   功能性补充
- 大版本号更新       重大结构改变
### 工作内容
### 未来计划
### 问题与解决
### 备注

# 2025-6-25
### 版本
- xlyst_web-1.0.0
### 工作内容
- 刚刚研究了一点接口调用这后端好麻烦啊
### 未来计划
#### 1.搞明白分级路由
- 先把接口定义明白吧

#### 2.登陆系统
- 建数据库
- 前端存储登陆状态？
```js
{
    "token": token,
    "user": {
        "id":int,
        "role": [admin? developer? viewer],
        "username":[from_database ? visitor ],
    }
    "trueUser":{    
        "id":int,
        "realname":[from_database],
        "department":[tc? zx? xz? ys?el],
        "section":[non?[zuc?fal?xub]?[zhc?wud?bic?hec?lid?qiy]],
        "phone":[from_database],
        "wechat":[from_database],
        "email":[from_database],
    }    
}
```

#### 3.文件更新
- 组策文件更新
    - 搞个git?不太懂文件管理啊，钱够吗？网站炸了怎么办？

#### 4.推文更新
- 这个应该最好做了吧

### 问题与解决
### 备注
