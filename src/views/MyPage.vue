<template>
<div id="pagebody">

  <div id="shuffle">
    <h1 class="catch">あなたのプロフィール</h1>
 </div>


<div>


<ul>
  <li>
    パスワード
    <input type="password" class="password" maxlength="8" value="" placeholder="-----" style="border:none;">
  </li>
  <li>
    名前
    <input type="text" class="fristName1" value="" placeholder="姓" style="border:none;">
    <input type="text" class="LastName1" value="" placeholder="名" style="border:none;">
  </li>
  <li>
    なまえ
    <input type="text" class="fristName2" value="" placeholder="せい" style="border:none;">
    <input type="text" class="LastName2" value="" placeholder="めい" style="border:none;">
  </li>
  <li>
    生年月日
    <input type="date" class="brithday" value="" placeholder="年" style="border:none;">
  </li>
  <li>
    <p class="age">歳</p>
  </li>
  <li>
    職業
    <select class="occupation">
    <option value="">-</option>
    <option value="mid_school">中学校</option>
    <option value="highschool">高等学校</option>
    <option value="senmon">専門学校</option>
    <option value="short_univ">短期大学</option>
    <option value="4th_univ">4年制大学</option>
    <option value="daigakuin">大学院</option>
    <option value="other">その他</option>
    </select>
  </li>
  <li>
    最終学歴または在学校名
    <input type="text" class="schoolname" value="" placeholder="学校名" style="border:none;">
  </li>
  <li>
    在学期間
    <input type="month" class="admyear" value="" placeholder="入学年" style="border:none;">
    <input type="month" class="gradyear" value="" placeholder="卒業年" style="border:none;">
  </li>
 </ul>

 <ul class="ul2">
    <li>
      電話番号
    <input type="tel" class="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="電話番号" style="border:none;">
  </li>
  <li>
    メール
    <input type="email" class="mail" placeholder="xxxxxx@xxx.xx" style="border:none;">
  </li>
  <li>
    郵便番号
    <input type="post" class="post" value="" placeholder="郵便番号" style="border:none;">
  </li>
  <li>
   住所
    <input type="text" class="adress" value="" placeholder="住所" style="border:none;">
  </li>
 </ul>


 <img src="../assets/taro.png" class="myicon" style="border:none;">

    
  <div class="textarea-wrap">
        <textarea class="textbox" rows="8" cols="80" placeholder="自己紹介" ></textarea>
  </div>
  
  </div>


</div> 

</template>

<style scoped>
.catch {
	font-size: 350%;
	color: rgb(41, 41, 41);
	padding-top: 4%;
	padding-bottom: 4%;
  background-color: rgb(255, 255, 255)255, 255, 255);
	text-align:center
  }


div#pagebody {
  position: relative;
	width:50%; 
  margin: auto;	/*内容全体をセンタリング*/
	background-color:#ffffff;		/*内容全体の背景色*/ 
  text-align: left;
}
/*検索エンジン*============================================
============================================*/
.ul2{
  margin-top: -342px;
  margin-left: 55%;
}
li{
  margin-left: 15%;
  list-style: none;
  margin-bottom: 20px;
  width: 250px;
  padding: 5px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-bottom: solid 1px rgb(48, 48, 48);
}

input[type='email']{
  font-size: 15px;
  padding: 5px;
}

input {
font-size: 20px;
width: 250px;
}



/* Chrome */
::-webkit-input-placeholder {
  color: #3498db;
  font-size: 20px;
}

/* Firefox */
::-moz-placeholder {
  color: #3498db;
  font-size: 20px;
}

/* IE */
:-ms-input-placeholder {
  color: #3498db;
  font-size: 20px;
}

.myicon {
  position: absolute;
  height: 200px;
  border-radius: 100%;
  margin-left: 63%;
  margin-top: -650px;
}


textarea{   
  background-color: #ffffff;
  width: 80%;
  height: 30%;
  padding: 5px;
  border-radius:1px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin-top: 15px;
  margin-bottom: 3%;
  margin-left: 13%;
}

</style>