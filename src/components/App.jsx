import React, { Component } from 'react'
import styled from 'styled-components'
import * as colors from '@tools/colors'

export class App extends Component {
  render () {
    return (
            <Container>
                <Item1>

                </Item1>
                <Item2>

                </Item2>
            </Container>
        
    )
  }
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const Item1 = styled.div`
    border: solid 1px ${colors.silver100};
    border-radius: 8px;
    background-color: ${colors.silver0};
    height: 670px;
    width: 50%;
    margin-right: 8px;
`

const Item2 = styled.div`
    border: solid 1px ${colors.silver100};
    height: 670px;
    width: 50%;
    border-radius: 8px;
    background-color: ${colors.navy50};
`


