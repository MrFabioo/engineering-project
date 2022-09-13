import styled from 'styled-components';
import img from './car-in-a-canyon.jpg';

export const AppStyles = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-image: url(${img});
`;

export const Panel = styled.div`
  background-color: #fefefe;
  height: 600px;
  max-width: 550px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;

export const CircleBtn = styled.div`
  position: absolute;
  top: 90px;
  right: 0;
  transform: translate(50%, -50px);
  background-color: #ec2553;
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  font-weight: lighter;
  color: #fefefe;
  font-size: 7rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    border-left: 4px solid #ec2553;
    padding-left: 15%;
    font-size: 3rem;
    font-weight: bold;
    color: #ec2553;
  }

  input {
    border-style: none;
    border-bottom: 1px solid black;
    font-size: 2rem;
    margin: 0 15%;
  }

  button {
    font-weight: bold;
    border: 3px solid black;
    background-color: transparent;
    font-size: 2.25rem;
    width: 60%;
    margin-left: 50%;
    transform: translate(-50%);
    cursor: pointer;
  }

  button:hover {
    color: #ec2553;
    border-color: #ec2553;
  }

  a {
    text-align: center;
    font-weight: lighter;
    font-size: 1.5rem;
    text-decoration: none;
    color: #757575;
  }
`;
