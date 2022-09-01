

## 本项目采用 ant design 组件库， 以下为通用UI约定

### 组件大小
    较大结构组件的size均采用  small, 例如：Table、Card等


    关于Table的一些默认属性:
    Table:
        size: small -- 大小为small
        bordered --  带边框
        pagination={ {
            total: datalist.totalCount,
            showTotal: (total) => {
                return `共 ${total} 条`; -- 显示总数
            },
            showSizeChanger: true, -- 显示单页数量切换
            showQuickJumper: true, -- 显示分页跳转
        } }

### 边距&间距
    页面边距 以20px 为主;
    板块间距 以12px 为主、20为辅；
    板块内边距 以20px 为主；
    按钮至文字的距离 以 10px 为主；


### 文字大小
    标题类： 20px、bold;
    正文： 14px;
    副标题 ： 16px；

### 颜色
    无特殊要求，使用组件自带颜色即可；
    红色 -- 'r-c-error'
    板块内灰色背景 -- 'r-bg-f5'

### 组件使用
内部路由跳转使用的蓝色按钮:
```
<Button type="link" onClick={ handleClick }> 跳转</Button>
```

----- 未完待续 -----
