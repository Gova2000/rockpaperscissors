// eslint-disable-next-line prettier/prettier
import styled from 'styled-components'

export const MainBg = styled.div`
  background-color: #223a5f;

  font-family: Roboto;
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 5vh;
  color: ${props => props.colo && '#fff'};
`
export const BG = styled.div`
  border: 2px solid #fff;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 70%;

  margin: 5vh;
  padding-left: 5vh;
  padding-right: 5vh;
`

export const Heading = styled.h1`
  color: #fff;
`
export const Rules = styled.div`
  font-family: Bree Serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 500px;
  flex-wrap: wrap;
`
export const UL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 500px;
  flex-wrap: wrap;
`
export const IMG = styled.img`
  height: 170px;
  width: 170px;
`
export const Resultpara = styled.p`
  color: #fff;
`
export const ResultDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`

export const Resdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CustomButton = styled.button`
  background-color: #fff;
  padding: 5px;
  height: 30px;
  width: 160px;
  border-radius: 8px;
`

export const Popimg = styled.img`
  width: 500px;
  align-self: center;
`
