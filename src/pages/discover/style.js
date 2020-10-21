import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
   .discover-nav{
      height: 34px;
      background-color: #C20C0C;
   }
    
  .discoverLink {
    display: flex;
    height: 34px;
    background-color: #C20C0C; 
    color: white;
    padding-left: 180px;
    
    .item {
      a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 4px 17px 8px 17px;
      color: #fff;

      &:hover, &.active {
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px;
      }
    }
    }
  }

`