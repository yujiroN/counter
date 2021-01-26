
// 即時関数
(function() {
    'use strict';

    // id input_textのエレメントを取得する
    var e = document.getElementById('input_text');

    // keyupのイベント発生時に、入力文字数をコンソールに出力
    e.addEventListener('keyup', function() {

        // テキストエリアの文字列を変数に代入
        var str = e.value;

        // 改行の削除
        str = str.replace(/\r?\n/g, "");

        // id characterを取得して、HTML要素に表示する
        var moji = document.getElementById('character');

        moji.innerHTML = str.length;

    });

})();