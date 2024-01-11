"use client"
import { TailSpin } from 'react-loader-spinner'
import styled from 'styled-components';


const Loader = styled.div`
  position: sticky
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export default function Loading() {
    return <Loader><TailSpin
        visible={true}
        height="80"
        width="80"
        color="#07ae79"
        ariaLabel="tail-spin-loading"
        radius="1"/>
        </Loader>
}
