import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import type { RaceType, DeleteHandlerType, Races } from './types/races';
import RaceList from './RaceList';


export default function MainPage(): JSX.Element {

  const [races, setRaces] = useState<RaceType[]>([]);

  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/races')
      .then((res) => res.json())
      .then((data: Races) => {
        setRaces(data.results.map((race) => ({ ...race, id: crypto.randomUUID() })));
      })
      .catch((error) => console.log(error))
  }, []);

  const deleteHandler: DeleteHandlerType = (id) => {
    setRaces((prev) => prev.filter((race) => race.id !== id));
  }

  const audioHandler = async (): Promise<void> => {
    const audio = new Audio('https://vgmsite.com/soundtracks/baldurs-gate-enhanced-edition-official-soundtrack-2016/cqkjiihllb/01.%20Main%20Theme.mp3');
    await audio.play();
  }

  return (
    <Container style={{ width: "100vw", background: "black",  alignContent: "center"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png" alt="logo" style={{ width: "50rem", height: "40rem" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <button style={{ fontSize: "3rem", color: "#f7e58b", backgroundColor: "black", fontFamily: "italic", fontStyle: "italic" }} onClick={audioHandler}>НАЖМИ И ВЫБИРАЙ РАСУ</button>
      </div>
      <Row style={{ justifyContent: "center", marginTop: "2rem", marginBottom: '2rem' }}>
        <Col>
          <RaceList deleteHandler={deleteHandler} races={races} />
        </Col>
      </Row>
    </Container>
  );
}
