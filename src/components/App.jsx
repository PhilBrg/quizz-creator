import React, { Component } from 'react'
import styled from 'styled-components'
import { FormExampleForm } from '@components/Form.jsx'
import { LiveJson } from '@components/LiveJson.jsx'
import * as colors from '@tools/colors'

export class App extends Component {
  render () {
    return (
        <Container>
            <FormContainer>
                <FormExampleForm />
            </FormContainer>
            <JsonContainer>
                <LiveJson />
            </JsonContainer>
        </Container>
    )
  }
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px;
`

const FormContainer = styled.div`
    border: solid 1px ${colors.silver100};
    border-radius: 8px;
    background-color: ${colors.silver0};
    height: 670px;
    width: 50%;
    padding: 12px;
    margin-right: 12px;
`

const JsonContainer = styled.div`
    border: solid 1px ${colors.silver100};
    height: 670px;
    width: 50%;
    border-radius: 8px;
    background-color: ${colors.navy50};
    padding: 10px;
`


