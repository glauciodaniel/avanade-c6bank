import React from 'react'
import styled from '@emotion/styled';
import Profile from '../Profile';

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 360px;
`

export default function SideBar() {
  return (
    <SideBarContainer>
        <Profile name="Glaucio Daniel" role="Software Engineer" agency="0001" accountNumber="123456789" />
    </SideBarContainer>
  )
}
