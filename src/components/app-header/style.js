import styled from "styled-components";
//原则是只要一个暴露出的Dom元素内的样式不能出现冲突即可
export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;
  
  .content {
    display: flex;
    justify-content: space-between;
  }
  
  .divider {
      width: 100%;
      height: 5px;
      background-color: #C20C0C;
  }
  
`

export const HeaderLeft = styled.div`
  
  .logo {
    float: left;
    width: 180px;
    height: 70px;
    padding-right: 20px;
    text-indent: -9999px;
    display: block;
  }
  
  .select-list{
    display: flex;
    width: 540px;
    
    .select-item {
    position: relative;
    height: 70px;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
        line-height: 70px;
      }
  
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
  
      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
      
    }
  }
  
  
`

export const HeaderRight = styled.div`
  width: 330px;
  display: flex;
  font-size: 12px;
  
  .search {
    width: 158px;
    height: 32px;
    margin-top: 19px;
    background-color: #fff;
    border-radius: 32px;
    cursor: text;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .center {
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    padding:0 14px;
    line-height: 33px;
    color: #ccc;
    border: 1px solid #4F4F4F;
    border-radius: 20px;
    :hover{
      border-color: #bbb;
    }
  }
  .login-link {
    display: block;
    width: 28px;  
    height: 32px;
    line-height: 32px;
    color: #787878;
    margin:19px 20px;
  }
`
