import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ProductCard = ({ image, title, rating, price, discount, percent }) => {
  return (
    <CardStyle>
      <div className="top">
        <img src={image} alt="" />
      </div>
      <div className="bottom">
        <span>{title}</span>
        <Stack spacing={1}>
          <Rating name="rating" defaultValue={rating} size='small' readOnly />
        </Stack>
        <span>
          <span>${price}</span>
          <span>${discount}</span>
          <span>{percent}%</span>
        </span>
      </div>
    </CardStyle>
  );
};

export default ProductCard;

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 300px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 5px;
  color: #262626;
  background: #fff;
  position: relative;
  overflow: hidden;

  .top {
    overflow: hidden;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    font-size: 0.9rem;
    justify-content: space-between;
    height: calc(300px - 250px);

    > :nth-child(1) {
      color: #262626;
      font-weight: bold;
    }
    > :nth-child(2) {
      padding: 0.2rem 0;
    }
    > :nth-child(3) {
      position: relative;
      width: 100%;
      padding-bottom: 0.8rem;
      > :nth-child(1) {
        color: #40bfff;
        font-weight: bold;
        position: absolute;
        left: 1rem;
        font-size: 1rem;
      }
      > :nth-child(2) {
        position: absolute;
        text-decoration: line-through;
        color: #999;
        right: 25%;
      }
      > :nth-child(3) {
        position: absolute;
        color: red;
        font-weight: bold;
        right: 1rem;
      }
    }
  }
`;
