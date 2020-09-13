import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  border-bottom: 1px solid #ddd;
`;

const Container__inner = styled.div`
  max-width: 1230px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

//flexで横方向にする
//justify-contentで間隔をあける
const Utilities = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

//widthを固定してしまうとtextの位置が真ん中にならなくなる
//その時は、text-alignを設定すれば、解決する
const Logo = styled.a`
  width: 140px;
  text-align: center;
  background: #e25c00;
  color: #fff;
  text-decoration: none;
`;

//with:autoを設定する事で、文字の長さによってwidthをいい感じの長さにしてくれる
//ただしpadding無し with:autoだと余白がないものが出来上がってしまう
const Inquiry = styled.a`
  width: auto;
  padding: 10px 20px;
  box-shadow: none;
  background: #e25c00;
  color: #fff;
  text-decoration: none;
`;

//space-aroundで左右に間隔をあける
//レイアウトはinnerのdivタグで囲まれている
//NavListのflexコンテナになっている
const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
`;

//borderの初期値を透明にしている
//flex-grow：余白がある場合、指定した数値に応じた比率で伸ばしている
//伸ばしているからtext-alignが必要となる
const NavList = styled.a`
  flex-grow: 1;
  position: relative;
  text-align: center;
  display: block;
  padding: 15px 5px;
  border-bottom: 4px solid transparent;
  color: #222;
  text-decoration: none;
  transition: 0.25s;
  &:focus,
  &:hover {
    border-bottom-color: #e25c00;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 20px;
    background-color: #ddd;
    transform: translateY(-50%);
  }
`;

//hrefが無いとaタグとして認識され無い
const CssHeader = () => {
  return (
    <Container>
      <Container__inner>
        <Utilities>
          <Logo href="#">Logo</Logo>
          <Inquiry href="#">お問い合わせ</Inquiry>
        </Utilities>
        <Nav>
          <NavList href="#">私たちの特徴</NavList>
          <NavList href="#">サービス</NavList>
          <NavList href="#">制作実績</NavList>
          <NavList href="#">会社情報</NavList>
          <NavList href="#">採用情報</NavList>
          <NavList href="#">ブログ</NavList>
        </Nav>
      </Container__inner>
    </Container>
  );
};

export default CssHeader;
