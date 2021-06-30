import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: inline-flex;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Item = styled.div`
  background: ${props => props.isActive ? 'black' : 'none'};
  padding: 0 16px;
  height: 34px;
  border-radius: 17px;
  opacity: ${props => props.isActive ? 1 : 0.5};
  cursor: pointer;
  line-height: 30px;

  &:hover {
    opacity: 1;
  }
`

export default function Switch({initialState} = {}){
  const [state, setState] = useState(initialState)

  const onClick = (e) => {
    const data = e.target.dataset?.switch
    setState(data)
  }



  const Component = ({children}) => {
    useEffect(()=> {
      if(!initialState){
        setState(children[0].props?.['data-switch'])
      }
    },[])

    const items = children.map((el, i) => {
      let dataAttr = el.props?.['data-switch']
      return <Item
        {...el.props}
        key={i}
        onClick={onClick}
        isActive={state === dataAttr}
      />
    })

    return (
      <Root>
        {items}
      </Root>
    )
  }


  return [Component, state]

}
