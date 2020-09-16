import React from "react";
import styled from "styled-components";

//セククター種類
//id
//class
//tag
//擬似クラス

//focusはクリックした時に発生する
//hoverはマウスカーソルが対象に当たった時に発生する

//Flexコンテナ
//flex-direction
//flex-wrap
//justify-content Flexアイテムの配置間隔の設定値-> space-between, space-around
//align-content Flexアイテムの配置間隔の設定（垂直方向）
//align-items 縦・横軸に対してFlexアイテムの設定値

//Flexアイテム
//flex-grow　拡大する際にどういう比率で拡大される変わる　余白を埋めてくれる
//flex-shrink　縮小する際にどういう比率で縮小される変わる
//flex-basis フレックスアイテムの基本の幅を指定する

//flexとfloat
//floatは浮かせる挙動

//position
//relative -- 柵:これが無いとしつじが自由になる
//absolute -- 柵(relative)の指定された場所に移動する
//設定値はtop, right, bottom, left

//aタグもdisplayでdivタグに変更可能

//ブラウザのデフォルトサイズが16px
//rem 0.5rem -> 8px
//rem 2rem -> 32px
//emは親要素のサイズを基準に計算する
//%も同じで親要素のサイズを基準に計算する

//transform
//translate(移動効果)
//rotate(回転効果)
//scale(伸縮効果)
//skew(歪み効果)

const Review = () => (
  <div>
    <p>Hello</p>
  </div>
);

export default Review;
