import React from 'react';
import { Col, Row } from 'react-bootstrap';
import RaceCard from './RaceCard';
import type { RaceType, DeleteHandlerType } from './types/races';



type RaceListProps = {
  races: RaceType[];
  deleteHandler: DeleteHandlerType;
};

export default function RaceList({ races, deleteHandler }: RaceListProps): JSX.Element {
  return (
    <Row style={{ background: 'black' }}>
      {races?.map((race) => (
        <Col key={race.id} style={{ margin: '20px' }}>
          <RaceCard race={race} deleteHandler={deleteHandler} />
        </Col>
      ))}
    </Row>
  );
  
}