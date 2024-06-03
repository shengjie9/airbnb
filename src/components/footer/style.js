import styled from "styled-components";

export const FooterWapper = styled.div`
  border-top: 1px solid #ebebeb;
  .wapper {
    width: 1032px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 48px 24px;
  }
  .content {
    display: flex;
    .list {
      flex: 1;
      .list-title {
        margin-bottom: 16px;
        font-weight: 700;
      }

      .list-item {
        margin-top: 6px;
        color: #767676;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .statement {
    margin-top: 30px;
    border-top: 1px solid #ebebeb;
    padding: 20px;
    color: #767676;
    text-align: center;
  }
`;
