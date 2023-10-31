import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import {
  MainBg,
  Heading,
  BG,
  UL,
  IMG,
  Resultpara,
  ResultDiv,
  Resdiv,
  CustomButton,
  Popimg,
} from './scissors'

import Rock from '../rock'

import './index.css'

const GameStatus = {
  inprogress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class Game extends Component {
  state = {
    count: 0,
    gChoice: '',
    uChoise: '',
    status: GameStatus.inprogress,
  }

  set = id => {
    this.setState({uChoise: id, gChoice: this.gameChoice()}, this.getFetch)
  }

  Click = () => {
    this.setState({status: GameStatus.inprogress})
  }

  gameChoice = () => {
    const {choicesList} = this.props
    const List = choicesList.map(each => each.id)
    const index = Math.floor(Math.random() * choicesList.length)

    return List[index]
  }

  getFetch = () => {
    const {uChoise, gChoice} = this.state
    console.log(uChoise)
    if (uChoise === gChoice) {
      this.setState({status: GameStatus.draw})
    } else if (uChoise === 'ROCK') {
      if (gChoice === 'SCISSORS') {
        this.setState(prev => ({status: GameStatus.win, count: prev.count + 1}))
      } else {
        this.setState(prev => ({
          status: GameStatus.lost,
          count: prev.count - 1,
        }))
      }
    } else if (uChoise === 'PAPER') {
      if (gChoice === 'ROCK') {
        this.setState(prev => ({status: GameStatus.win, count: prev.count + 1}))
      } else {
        this.setState(prev => ({
          status: GameStatus.lost,
          count: prev.count - 1,
        }))
      }
    } else if (uChoise === 'SCISSORS') {
      if (gChoice === 'PAPER') {
        this.setState(prev => ({status: GameStatus.win, count: prev.count + 1}))
      } else {
        this.setState(prev => ({
          status: GameStatus.lost,
          count: prev.count - 1,
        }))
      }
    }
  }

  GamePro = () => {
    const {choicesList} = this.props
    return (
      <UL>
        {choicesList.map(each => (
          <Rock each={each} key={each.id} click={this.set} />
        ))}
      </UL>
    )
  }

  GameWon = () => {
    const {uChoise, gChoice} = this.state
    console.log(uChoise, gChoice)

    const {choicesList} = this.props
    const objList = choicesList.filter(each => each.id === uChoise)
    const gobject = objList[0]

    const uObjList = choicesList.filter(each => each.id === gChoice)
    const uObject = uObjList[0]
    console.log(uObjList)

    return (
      <MainBg colo>
        <ResultDiv>
          <Resdiv>
            <Resultpara>You</Resultpara>
            <IMG src={gobject.imageUrl} alt="your choice" />
          </Resdiv>
          <Resdiv>
            <Resultpara>Other</Resultpara>
            <IMG src={uObject.imageUrl} alt="opponent choice" />
          </Resdiv>
        </ResultDiv>
        <h1>YOU WON</h1>
        <CustomButton type="button" onClick={this.Click}>
          PLAY AGAIN
        </CustomButton>
      </MainBg>
    )
  }

  GameLost = () => {
    const {gChoice, uChoise} = this.state
    const {choicesList} = this.props
    const ulist = choicesList.filter(each => each.id === uChoise)
    const gobj = ulist[0]

    const uObjList = choicesList.filter(each => each.id === gChoice)
    const uObject = uObjList[0]
    console.log(uObjList)

    return (
      <MainBg colo>
        <ResultDiv>
          <Resdiv>
            <Resultpara>You</Resultpara>
            <IMG src={gobj.imageUrl} alt="your choice" />
          </Resdiv>
          <Resdiv>
            <Resultpara>Other</Resultpara>
            <IMG src={uObject.imageUrl} alt="opponent choice" />
          </Resdiv>
        </ResultDiv>
        <h1>YOU LOST</h1>
        <CustomButton type="button" onClick={this.Click}>
          PLAY AGAIN
        </CustomButton>
      </MainBg>
    )
  }

  GameDraw = () => {
    const {gChoice, uChoise} = this.state
    const {choicesList} = this.props
    const ulist1 = choicesList.filter(each => each.id === uChoise)
    const gobj = ulist1[0]

    const uObjList = choicesList.filter(each => each.id === gChoice)
    const uObject = uObjList[0]
    console.log(uObjList)

    return (
      <MainBg colo>
        <ResultDiv>
          <Resdiv>
            <Resultpara>You</Resultpara>
            <IMG src={gobj.imageUrl} alt="your choice" />
          </Resdiv>

          <Resdiv>
            <Resultpara>Other</Resultpara>
            <IMG src={uObject.imageUrl} alt="opponent choice" />
          </Resdiv>
        </ResultDiv>
        <h1>IT IS DRAW</h1>
        <CustomButton type="button" onClick={this.Click}>
          PLAY AGAIN
        </CustomButton>
      </MainBg>
    )
  }

  renderView = () => {
    const {status} = this.state

    switch (status) {
      case GameStatus.inprogress:
        return this.GamePro()

      case GameStatus.win:
        return this.GameWon()

      case GameStatus.lost:
        return this.GameLost()

      case GameStatus.draw:
        return this.GameDraw()

      default:
        return null
    }
  }

  render() {
    const {count} = this.state

    return (
      <MainBg>
        <BG>
          <Heading>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </Heading>
          <div className="div">
            <p>Score</p>
            <p>{count}</p>
          </div>
        </BG>
        <div>{this.renderView()}</div>
        <>
          <Popup
            model
            trigger={
              <button type="button" className="btn">
                Rules
              </button>
            }
            position="center"
          >
            {close => (
              <>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <IoMdClose />
                </button>
                <Popimg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                  alt="rules"
                />
              </>
            )}
          </Popup>
        </>
      </MainBg>
    )
  }
}

export default Game
