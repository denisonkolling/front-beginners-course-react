import styled from 'styled-components';

const Base = styled.div`
	height: 10px;
	width: 250px;
	background: white;
  margin-left: 0px;
`
const VerticalLine = styled.div`
  height: 250px;
  width: 10px;
  background: white;
`
const VerticalLineSmall = styled.div`
  height: 25px;
  width: 10px;
  background: white;
  margin-left: 150px;
  position: absolute;
  right: 185px;
  top: 10px;
`
const HorizontalLine = styled.div`
  height: 10px;
  width: 85px;
  background: white;
  position: absolute;
  right: 185px;
  top: 0px;
`
const Head = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: 150px;
  position: absolute;
  right: 170px;
  top: 34px;
`
const Body = styled.div`
  height: 80px;
  width: 2px;
  background: white;
  position: absolute;
  right: 188px;
  top: 72px;
`
const RightArm = styled.div`
  height: 2px;
  width: 40px;
  background: white;
  position: absolute;
  right: 186px;
  top: 92px;
  rotate: -30deg;;
`
const LeftArm = styled.div`
  height: 2px;
  width: 40px;
  background: white;
  position: absolute;
  right: 152px;
  top: 92px;
  rotate: 30deg;;
`
const RightLeg = styled.div`
  height: 2px;
  width: 40px;
  background: white;
  position: absolute;
  right: 155px;
  top: 164px;
  rotate: 45deg;;
`
const LeftLeg = styled.div`
  height: 2px;
  width: 40px;
  background: white;
  position: absolute;
  right: 183px;
  top: 164px;
  rotate: -45deg;;
`

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

interface HangmanDrawingProps {
  numberOfGuesses: number
}

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
	return (
		<div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>
      {bodyParts.slice(0, numberOfGuesses).map(((BodyPart,index) => {return <BodyPart key={index}/>}))}
      <HorizontalLine />
      <VerticalLineSmall />
      <VerticalLine />
			<Base />
		</div>
	);
};

export default HangmanDrawing;
