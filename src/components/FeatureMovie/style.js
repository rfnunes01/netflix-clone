import styled from 'styled-components';
import media from 'styled-media-query'

export const FeatureMovieStyled = styled.section`
  height: 100vh;
  background-size:cover;
  background-position:center;
  ${media.lessThan("large")`
    height: 90vh;
  `}
  .featured--vertical{
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
    .featured--horizontal{
      width: inherit;
      height: inherit;
      background: linear-gradient(to right, #111 30%, transparent 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 70px 0 150px 30px;
      .featured--name{
        font-size: 60px;
        font-weight: bold;
        ${media.lessThan("large")`
          font-size: 16px;
        `}  
      }
      .featured--info{
          font-size:18px;
          font-weight: bold;
          margin-top: 15px;
          .featured--points{
            color: #46d369;
          }
          .display-block-and-margin{
            display: inline-block;
            margin-right:15px; 
          }
      }
      .featured--description{
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
        height: 40%;
        overflow: auto;
        text-overflow: ellipsis;

        ${media.lessThan("medium")`
          max-width: 100%;
          font-size:14px;
          margin-right:30pz;
        `}
        &::-webkit-scrollbar {width:0}
      }
      .feature--buttons{
        margin-top: 15px;
        .btn{
          display: inline-block;
          font-size: 20px;
          font-weight: bold;
          padding: 12px 25px;
          border-radius: 5px;
          text-decoration: none;
          margin-right: 10px;
          opacity: 1;
          transition: all ease .4s;
          &:hover{
            opacity: 0.7;
          }
          ${media.lessThan("medium")`
            font-size: 16px;
          `}
        }
        .featured--watchbutton{
          background-color: #fff;
          color: #000;
        }
        .featured--mylistbutton{
          background-color: #333;
          color: #fff;
        }
      }
      .featured--genres{
        margin-top: 15px;
        font-size: 14px;
        color: #999;
        ${media.lessThan("medium")`
          font-size: 14px; 
        `}
      }
    }
  }
`;
