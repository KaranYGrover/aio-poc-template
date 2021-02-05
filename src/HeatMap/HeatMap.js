import {useRef} from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

const HeatMapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 32px;

  div {
    &:nth-of-type(1),
    &:nth-of-type(3) {
      cursor: pointer;
      width: 30%;
    }

    &:nth-of-type(2),
    &:nth-of-type(4) {
      position: relative;
      width: 48%;

      img:nth-of-type(2) {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        width: auto;
        background: #ffffff59;
        padding: 10px 40px;
        filter: invert(0.6);
      }
    }
  }

  img {
    width: 100%;
  }
`

let frameIdx = 1;

export default () => {
    const img1 = useRef()
    const img2 = useRef()

    const onMouseMove = imgRef => debounce(() => {
        frameIdx = frameIdx === 10 ? 1 : frameIdx + 1
        imgRef.current.src = require(`./frames/${frameIdx}.png`).default
    }, 200);
    return <HeatMapWrapper>
        <div>
            <img src={require(`HeatMap/heatmap1.png`).default} alt="heat map 1" onMouseMove={onMouseMove(img1)}/>
        </div>

        <div>
            <img src={require(`./frames/${frameIdx}.png`).default} alt="what was on hitmap at the moment"
                 ref={img1}/>
            <img src={require(`HeatMap/player-buttons.svg`).default} alt="player"/>
        </div>

        <div>
            <img src={require(`HeatMap/heatmap2.png`).default} alt="heat map 2" onMouseMove={onMouseMove(img2)}/>
        </div>

        <div>
            <img src={require(`./frames/${frameIdx}.png`).default} alt="what was on hitmap at the moment"
                 ref={img2}/>
            <img src={require(`HeatMap/player-buttons.svg`).default} alt="player"/>
        </div>
    </HeatMapWrapper>
};
