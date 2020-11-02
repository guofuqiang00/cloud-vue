<template>
    <div>
        <div class="login_warp">
		<div class="loginbox fl">
            <!-- 两个选项卡按钮 -->
			<div class="login_header">
				<span @click="cur=0" :class="{active:cur==0}">个人用户注册</span>
				<span @click="cur=1" :class="{active:cur==1}">组织用户注册</span>
			</div>
			<div class="login_content">
                <!-- 在cur==0时此板块显示 其他时候此板块不显示 -->
				<div v-show="cur==0" class="Cbody_item">
					<div class="form_item"><span class="fl">姓名</span><input type="text" name="fname"></div>
					<div class="form_item"><span class="fl">手机号码</span><input type="text" name="fname"></div>
					<div class="form_item"><span class="fl">验证码</span><input type="text" name="fname"></div>
                    <div class="form_item"><span class="fl">密码</span><input type="password" name="fpassword" placeholder="6~18位，同时包含大写字母、小写字母与数字"></div>
                    <div class="form_item"><span class="fl">确认密码</span><input type="password" name="fpassword" placeholder="请再次输入密码"></div>
                    <div class="form_item">
						<div class="fl"><input type="checkbox">我已阅读并接受<a href="#">《个人用户注册协议》</a></div>
					</div>
                    <div class="clear"></div>
					<div class="form_item">
						<input type="submit" name="" value="注册">
					</div>	
				</div>
                <!-- 在cur==1时此板块显示 其他时候此板块不显示 -->
				<div v-show="cur==1" class="Cbody_item">
					<div class="form_item"><span class="fl">组织名称</span><input type="text" name="fname" placeholder="请输入完整的组织名称"></div>
					<div class="form_item"><span class="fl">负责人姓名</span><input type="text" name="fname" placeholder="请输入组织负责人姓名"></div>
					<div class="form_item"><span class="fl">负责人手机号</span><input type="text" name="fname" placeholder="请输入组织负责人手机号"></div>
                    <div class="form_item"><span class="fl">验证码</span><input type="text" name="fname"></div>
                    <div class="form_item"><span class="fl">密码</span><input type="password" name="fpassword" placeholder="6~18位，同时包含大写字母、小写字母与数字"></div>
                    <div class="form_item"><span class="fl">确认密码</span><input type="password" name="fpassword" placeholder="请再次输入密码"></div>
                    <div class="form_item"><span class="fl">组织类型</span><input type="text" name="fname"></div>
					<div class="form_item">
						<div class="fl"><input type="checkbox">我已阅读并接受<a href="#">《组织用户注册协议》</a></div>
					</div>
					<div class="clear"></div>
					<div class="form_item">
						<input type="submit" name="" value="注册">
					</div>
				</div>
			</div>
		</div>
	   </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            cur:0 //默认选中第一个tab
        }
    },
    mounted () {

    }
}

</script>


<style lang="scss" scoped>
.fl{
    float: left;
}
.fr{
    float: right;
}
.clear{
    clear:both;
}
a{
	margin-left: 0px;
	margin-right: 30px;
	font-size: 15px;
	text-decoration: none;
	color: #1c62ff;
	transition: ease all 0.5s;
}
a:hover{
	color: #1c65ff;
}
.login_header{
	margin-bottom: 40px;
}
.login_header span{
	margin-left: 50px;
	margin-right: 50px;
	cursor: pointer;
}
.loginbox{
	width: 400px;
	overflow: hidden;
	padding: 20px;
	padding-top: 15px;
}
.form_item{
	font-size: 16px;
}

.form_item input[type="text"]{
	display: block;
	width: calc(100% - 50%);
	height: 25px;
	margin-left: 25%; 
	padding-left: 16px;
	outline: none;
	border: 1px solid #999;
	transition: ease all 0.5s;
	margin-bottom: 20px;
}
.form_item input[type="text"]:focus{
	border: 1px solid #1c65ff
}
.form_item input[type="password"]{
	display: block;
	width: calc(100% - 50%);
	height: 25px;
	margin-left: 25%; 
	padding-left: 16px;
	outline: none;
	border: 1px solid #999;
	transition: ease all 0.5s;
	margin-bottom: 20px;
}
.form_item input[type="password"]:focus{
	border: 1px solid #1c65ff
}
.form_item input[type="submit"]{
	display: block;
	width: calc(100% - 0px);
	height: 40px;
	margin:0 auto; 
	padding-left: 16px;
	outline: none;
	border: 1px solid #1c65ff;
	transition: ease all 0.5s;
	margin-top: 20px;
	margin-bottom: 20px;
	background-color: #1c65ff;
	color: #fff;
	cursor: pointer;
}
.form_item input[type="submit"]:hover{
	background-color: #3f7dff;
	border: 1px solid #3f7dff;
}
.active{
    color: #3f7dff;
    padding-bottom: 10px;
    border-bottom: 3px solid #3f7dff;
}
.login_warp{
	width: 440px;
	height: 500px;
	float: right;
    margin: 50px 30px;
    border-radius: 10px;
    box-shadow: 0 0px 0px #ccc;
    overflow: hidden;
    border:1px solid #3f7dff;
    margin-top: 5%;
    transition: ease all 0.5s;
    position: relative;
	top: 0px;
	cursor: pointer;
}
.login_warp:hover{
	top: -1px;
	box-shadow: 0 15px 21px #ccc;
}
</style>