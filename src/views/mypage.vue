<template>
<div id="pagebody">

  <div id="shuffle">
    <h1 class="catch">あなたのプロフィール</h1>
 </div>




   <div class="main1"><a href="#" class="btn-square"></a></div>
       
    
  <div class="box">
     <span class="item-name"></span>

     年齢<select name="num">
         <option value="">-</option>
         <option value="15">15</option>
         <option value="16">16</option>
         <option value="17">17</option>
         <option value="18">18</option>
         <option value="19">19</option>
         <option value="20">20</option>
         <option value="21">21</option>
         <option value="22">22</option>
         <option value="23">23</option>
         <option value="24">24</option>
         <option value="25">25</option>
         <option value="26">26</option>
         <option value="27">27</option>
         <option value="28">28</option>
         <option value="29">29</option>
         <option value="30">30</option>
         <option value="31">31</option>
         <option value="32">32</option>
         <option value="33">33</option>
         <option value="34">34</option>
         <option value="35">35</option>
         <option value="36">36</option>
         <option value="37">37</option>
         <option value="38">38</option>
         <option value="39">39</option>
         <option value="40">40</option>
         <option value="41">41</option>
         <option value="41">41</option>
         <option value="41">41</option>
         <option value="42">42</option>
         <option value="41">41</option>
         <option value="43">43</option>
         <option value="41">41</option>
         <option value="44">44</option>
         <option value="41">41</option>
         <option value="45">45</option>
         <option value="41">41</option>
         <option value="46">46</option>
         <option value="41">41</option>
         <option value="47">47</option>
         <option value="41">41</option>
         <option value="48">48</option>
         <option value="49">49</option>
         <option value="49">49</option>
         <option value="49">49</option>
         <option value="50">50</option>
         <option value="49">49</option>
         <option value="51">51</option>
         <option value="49">49</option>
         <option value="52">52</option>
         <option value="49">49</option>
         <option value="53">53</option>
         <option value="49">49</option>
         <option value="54">54</option>
         <option value="49">49</option>
         <option value="55">55</option>
         <option value="49">49</option>
         <option value="56">56</option>
         <option value="49">49</option>
         <option value="57">57</option>
      </select>歳
    
<div class="schooltype">
     <span class="item-name"></span>

     学校区分<select name="gakureki">
         <option value="">-</option>
         <option value="mid_school">中学校</option>
         <option value="highschool">高等学校</option>
         <option value="senmon">専門学校</option>
         <option value="short_univ">短期大学</option>
         <option value="4th_univ">4年制大学</option>
         <option value="daigakuin">大学院</option>
         <option value="other">その他</option>
    </select>
  </div>

 <div class="year_box">
在学期間
    <input type="text" id="helfbox" value="" placeholder="入学年">
    <input type="text" id="helfbox" value="" placeholder="卒業年">
  </div>

  <div class="school_name">
    <input type="text" id="schoolname" value="" placeholder="学校名">
  </div>

  <div class="name_box">
    <!-- 横にナビをつける時はこれを解除 <label class="label_left">お名前 <span class="mast">必須 </span></label> -->
    <input type="text" id="helfbox" value="" placeholder="姓">
    <input type="text" id="helfbox" value="" placeholder="名">
  </div>
    
 <div class="phone_num">
    <input type="text"  value="" placeholder="電話番号">
  </div>

 <div class="post">
    <input type="text"  value="" placeholder="郵便番号">
</div>


<div class="box">
      <span class="item-name"></span>
<div class="adress">
        <textarea name="adress" rows="8" cols="80" placeholder="住所"></textarea>
</div>
</div>

  <div class="box">
      <span class="item-name"></span>
  <div class="textarea-wrap">
        <textarea name="name" rows="8" cols="80" placeholder="自己紹介"></textarea>
  </div>
  
  </div>
    
</div> 
</div>
</template>

<style scoped>
div#pagebody {
	width:52%; margin: auto;	/*内容全体をセンタリング*/
	background-color:#ffffff;		/*内容全体の背景色*/ 
}
/*検索エンジン*============================================
============================================*/

.main1{
	width: 100%;
  height:200px;
	background-color: rgb(255, 255, 255);
}

.box{
	width:100%x;
	background-color: rgb(255, 255, 255);
	margin-top: 50px;
}


dl.search1{
	position:relative;
	background-color:#fff;
	border:1px solid #aaa;
}
dl.search1 dt{
	margin-right:4%;
	padding:8px 0 8px 8px;
}
dl.search1 dt input{
	width:100%;
	height:2.4%;
	line-height:2.4%;
	background:none;
	border:none;
}
dl.search1 dd{
	position:absolute;
	top:0;
	right:0;
}
dl.search1 dd button{
	display:block;
	padding:10px;
	background:none;
	border:none;
}
dl.search1 dd button span{
	display:block;
	width:2%;
	height:50%;

}

.item-name{
	margin-left:10%;
}

.btn-square {
  height: 150px;
  width: 150px;
  margin-bottom: 200px;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background-image: url(../assets/taro.png);
  background-position: center;
  background-size: 200px;
  background-repeat: no-repeat;
  border-radius: 50%;
  font-size: 3%;
  

}

input[
	type='text']{
  background-color: #ffffff;
  margin-bottom: 3%;
  width: 40%;
  padding: 5px;
	border-radius:1px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
	border-bottom:solid 5px color black;
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
  margin-bottom: 3%;
  margin-left: 10%;
}
/* .label_left{
  font-weight: bold;
} */
/* .mast{
color:red;
} */

</style>