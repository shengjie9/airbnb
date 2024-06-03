import styled from "styled-components";

export const HeaderWapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #ccc;
  padding: 0 24px;
  font-size: 14px;

  .left {
    flex: 1;
    color: ${(props) => props.theme.color.primary};
  }

  .center {
    .search_bar {
      width: 300px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #ddd;
      border-radius: 24px;
      color: ${(props) => props.theme.text.primary};
      font-weight: 600;
      cursor: pointer;
      .text {
        padding: 0 18px;
      }

      .icon {
        width: 32px;
        height: 32px;
        background: ${(props) => props.theme.color.primary};
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 8px;
      }

      //note:混入样式
      ${(props) => props.theme.boxShadowAnimation}
    }
  }

  .right {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: 600;
    color: ${(props) => props.theme.text.secondary};
    box-sizing: content-box;

    .btns {
      display: flex;
      box-sizing: content-box;
      .text_btn {
        padding: 12px 15px;
        border-radius: 22px;
        height: 18px;
        line-height: 18px;
        cursor: pointer;
        box-sizing: content-box;
        &:hover {
          background-color: #f5f5f5;
        }
      }
    }

    .btn {
      position: relative;
      display: flex;
      align-items: center;
      padding: 3px 8px 3px 12px;
      border-radius: 30px;
      border: 1px solid #ddd;
      cursor: pointer;

      //note:混入样式
      ${(props) => props.theme.boxShadowAnimation}
      .profile {
        margin-left: 8px;
        color: ${(props) => props.theme.text.secondary};
      }

      &::before {
        content: "";
        position: absolute;
        box-sizing: border-box;
        right: 3px;
        top: -1px;
        display: inline-block;
        height: 14px;
        width: 14px;
        border-radius: 100%;
        border: 2px solid #fff;
        background-color: ${(props) => props.theme.color.primary};
      }
    }

    .panel {
      position: absolute;
      top: 50px;
      width: 240px;
      border-radius: 10px;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.18);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;

      .item {
        padding: 16px 14px;
        font-weight: 500;
        color: ${(props) => props.theme.text.primary};
        cursor: pointer;
        &:hover {
          background: #f5f5f5;
        }
      }
      .top {
        border-bottom: 2px solid #eaeaea;
        .registor {
          font-weight: 600;
        }
      }
    }
  }
`;
