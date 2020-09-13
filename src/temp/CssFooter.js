import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #222;
`;

const Container__inner = styled.div`
  max-width: 1230px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const FooterNav = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const FooterNavItem = styled.li`
  flex: 1;
  text-align: center;
  &::after {
    content: none;
  }
`;

const FooterNavLink = styled.a`
  position: relative;
  display: block;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  color: #fff;
  text-decoration: none;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 15px;
    background-color: currentColor;
    transform: translateY(-50%);
  }
`;

const FooterChildItem = styled.div`
  margin-bottom: 10px;
`;

const FooterChildNavLink = styled.a`
  color: #ddd;
  font-size: 15px;
  text-decoration: none;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
`;

const FooterBorder = styled.div`
  border-top: 1px solid #777;
`;

const FooterCopyRight = styled.p`
  display: block;
  color: #ddd;
  font-size: 12px;
  text-align: center;
`;
const CssFooter = () => (
  <Container>
    <Container__inner>
      <FooterNav>
        <FooterNavItem>
          <FooterNavLink href="#">私たちの特徴</FooterNavLink>
          <FooterChildItem>
            <FooterChildNavLink href="#">私たちの強み</FooterChildNavLink>
          </FooterChildItem>
          <FooterChildItem>
            <FooterChildNavLink href="#">私たちのポリシー</FooterChildNavLink>
          </FooterChildItem>
        </FooterNavItem>

        <FooterNavItem>
          <FooterNavLink href="#">サービス</FooterNavLink>
          <FooterChildItem>
            <FooterChildNavLink href="#">webサイト構築</FooterChildNavLink>
          </FooterChildItem>
          <FooterChildItem>
            <FooterChildNavLink href="#">webサイト改善</FooterChildNavLink>
          </FooterChildItem>
          <FooterChildItem>
            <FooterChildNavLink href="#">
              解析・レポーティング
            </FooterChildNavLink>
          </FooterChildItem>
          <FooterChildItem>
            <FooterChildNavLink href="#">
              多言語webサイト構築
            </FooterChildNavLink>
          </FooterChildItem>
        </FooterNavItem>

        <FooterNavItem>
          <FooterNavLink href="#">制作実績</FooterNavLink>
        </FooterNavItem>

        <FooterNavItem>
          <FooterNavLink href="#">会社情報</FooterNavLink>
          <FooterChildItem>
            <FooterChildNavLink href="#">メッセージ</FooterChildNavLink>
          </FooterChildItem>
          <FooterChildItem>
            <FooterChildNavLink href="#">会社概要</FooterChildNavLink>
          </FooterChildItem>
        </FooterNavItem>

        <FooterNavItem>
          <FooterNavLink href="#">採用情報</FooterNavLink>
          <FooterChildItem>
            <FooterChildNavLink href="#">新卒採用</FooterChildNavLink>
          </FooterChildItem>
          <FooterChildItem>
            <FooterChildNavLink href="#">中途採用</FooterChildNavLink>
          </FooterChildItem>
        </FooterNavItem>
      </FooterNav>

      <FooterNavItem>
        <FooterNavLink href="#">ブログ</FooterNavLink>
      </FooterNavItem>

      <FooterBorder>
        <Container__inner>
          <FooterCopyRight>© 2019 Triad Inc.</FooterCopyRight>
        </Container__inner>
      </FooterBorder>
    </Container__inner>
  </Container>
);

export default CssFooter;
