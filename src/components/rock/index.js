import {GameButton, OptionImg, OptionList} from './rock'

const Rock = props => {
  const {each, click} = props
  const {id, imageUrl} = each

  const GETRESULT = () => {
    click(id)
  }

  return (
    <OptionList>
      <GameButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={GETRESULT}
      >
        <OptionImg src={imageUrl} alt={id} />
      </GameButton>
    </OptionList>
  )
}

export default Rock
