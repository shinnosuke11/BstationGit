<template>
<div class="help">

  <div class="title">
    <h1 class="catch">BaitoStation Help</h1>
  </div>

  <div class="helplist">

    <ul>

      <li class="category"> 
      <h2>バイトステーションについて</h2>
      <ul class="question_list"> <!--質問内容のタイトル-->
        <li class="question_item">
          <a href="#">バイトステーションについて</a>
          </li>
        <li class="question_item">
          <a href="#">アカウント登録したい</a>
          </li>
        <li class="question_item">
          <a href="#">利用料金について知りたい</a>
          </li>
      </ul>
      </li>

      <li class="category"> <!--質問内容のカテゴリ-->
      <h2>利用環境設定</h2>
      <ul class="question_list"> <!--質問内容のタイトル-->
        <li class="question_item">
          <a href="#">推奨ブラウザ</a>
          </li>
        <li class="question_item">
          <a href="#">JavaScript・クッキーの設定</a>
          </li>
        <li class="question_item">
          <a href="#">PC以外でのご利用について</a>
          </li>
      </ul>
      </li>

      <li class="category"> <!--質問内容のカテゴリ-->
      <h2>アカウント設定</h2>
      <ul class="question_list"> <!--質問内容のタイトル-->
        <li class="question_item">
          <a href="#">登録メールアドレスの確認・変更</a>
          </li>
        <li class="question_item">
          <a href="#">パスワードの設定</a>
          </li>
        <li class="question_item">
          <a href="#">メールの受信設定</a>
          </li>
        <p>
        <li class="question_item">
          <a href="#">退会申請について知りたい</a>
          </li>
        <li class="question_item">
          <a href="#">SNS連携の登録・解除したい</a>
          </li>
        <li class="question_item">
          <a href="#">スカウト設定について知りたい</a>
          </li>
      </ul>
      </li>

      <li class="category"> <!--質問内容のカテゴリ-->
      <h2>プロフィール設定について</h2>
      <ul class="question_list"> <!--質問内容のタイトル-->
        <li class="question_item">
          <a href="#">写真の編集をしたい</a>
          </li>
        <li class="question_item">
          <a href="#">プロフィールの追加・編集をしたい</a>
          </li>
        <li class="question_item">
          <a href="#">登録名の変更をしたい</a>
          </li>
        <li class="question_item">
          <a href="#">チャット機能の返信・送信について知りたい</a>
          </li>
      </ul>
      </li>


      <li class="category"> <!--質問内容のカテゴリ-->
      <h2>アルバイト応募について知る</h2>
      <ul class="question_list"> <!--質問内容のタイトル-->
        <li class="question_item">
          <a href="#">エントリーの手順を知りたい</a>
          </li>
        <li class="question_item">
          <a href="#">エントリーができない</a>
          </li>
        <li class="question_item">
          <a href="#">エントリーを取り消したい</a>
          </li>
        <li class="question_item">
          <a href="#">エントリー後に店舗から連携が来ません</a>
          </li>
      </ul>
      </li>

    </ul>
  </div>





</div>

</template>
<style scoped>

.catch{
  font-size: 2em;
  left: 1em;
  list-style: none;
}

.category{
  text-align: left;
  margin: 2em 2em 2em 2em;
  list-style: none;
}

.category a{
  color: black;
  list-style: none;
  border-style: none;
  text-decoration: none;
  margin: 2em 2em 2em 2em;
}
.category h2 {
  display: inline-block;
  font-size: 1.5em;
  border-bottom:0.2em  gray solid;
}
.question_list {
  display: flex;
  list-style: none;
  text-align: left;
}
li{
  margin-bottom:20px;
  margin-top:20px;
}

</style>