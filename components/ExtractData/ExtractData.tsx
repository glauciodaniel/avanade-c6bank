import React from 'react'
import styled from '@emotion/styled';
import TypeDb from '../../types/TypeDb';

const ExtractDataContainer = styled.table`
  width: 100%;
`;


type ExtractDataProps = {
  db: Array<TypeDb>
}

export default function ExtractData(props:ExtractDataProps) {
  return (
    <ExtractDataContainer>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Data</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {props.db.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          )
        })}
      </tbody>
    </ExtractDataContainer>
  )
}
