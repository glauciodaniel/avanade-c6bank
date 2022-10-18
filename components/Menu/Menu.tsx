import React from 'react'
import styled from '@emotion/styled';

const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width:100%;
    ul {
        margin: 0;
        padding: 0;
        display: flex;
         li {
            list-style: none;
            line-height: 30px;
            border: solid 4px transparent;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            &:hover {
                background: #888;
                border-left-color: #fffb19; 
            }
        }
    }
`


export default function Menu() {
  return (
    <div>Menu</div>
  )
}
