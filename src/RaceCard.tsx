import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import type { RaceType, DeleteHandlerType } from './types/races';



type RaceProps = {
  race: RaceType;
  deleteHandler: DeleteHandlerType;
};

export default function RaceCard({ race, deleteHandler }: RaceProps): JSX.Element {


  const handleDetailsClick = (): void => {
    window.location.replace(`/${race.index}`);
  };

  function getRaceImage(name: string): string {
    switch (name) {
      case 'Elf':
        return 'https://images.hdqwalls.com/wallpapers/bthumb/elf-azralith-fantasy-4k-ol.jpg';
      case 'Dwarf':
        return 'https://wallpapers.com/images/hd/dwarf-in-dnd-0sjt2ehutoa3y7z1.jpg';
      case 'Human':
        return 'https://tabletopden.com/wp-content/uploads/2023/06/Half-elf-Rogue.png';
      case 'Dragonborn':
        return 'https://www.dndbeyond.com/attachments/9/41/chromatic-dragonborn.jpg';
      case 'Half-Elf':
        return 'https://storage.prompt-hunt.workers.dev/clgy1d89j0016jl089g8a3y3k_1';
      case 'Half-Orc':
        return 'https://i.pinimg.com/564x/16/c8/75/16c875de219a6ed199864b75e0b11a1c.jpg';
      case 'Halfling':
        return 'https://i0.wp.com/mythjourneys.com/wp-content/uploads/dnd-halfling-rogue-character-in-a-dark-alley.webp?fit=1920%2C1080&ssl=1';
      case 'Tiefling':
        return 'https://tabletopden.com/wp-content/uploads/2023/05/Tiefling-Druid.png';
      case 'Gnome':
        return 'https://c4.wallpaperflare.com/wallpaper/343/875/786/the-forgotten-realms-wallpaper-preview.jpg'
      default:
        return 'https://top-fon.com/uploads/posts/2023-02/1675354596_top-fon-com-p-fon-dlya-prezentatsii-odnotonnii-chernii-153.jpg';
    }
  }

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = (): void => {
    setShowModal(true);
  };

  const handleModalClose = (): void => {
    setShowModal(false);
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ minWidth: '15rem', border: '2px solid  #f7e58b', borderRadius: '30px' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '60px', color: '#f7e58b', textAlign: 'center', fontStyle: 'italic' }}>{race.name}</Card.Title>
          <Card.Img variant="top" src={getRaceImage(race.name)} style={{ width: '600px', border: '2px solid black', borderRadius: '30px', cursor: 'pointer' }} onClick={handleModalOpen} />
          <Button
            style={{ color: '#f7e58b', background: 'linear-gradient(to right, brown, darkred, red, #d95923)', fontSize: '2rem', margin: '0 auto', display: 'block', width: '300px', fontStyle: 'italic', borderRadius: '50px', border: '1px solid #f7e58b' }}
            onClick={() => handleDetailsClick()} >
            ПОДРОБНОСТИ
          </Button>
          <br />
          <Button style={{ color: '#f7e58b', background: 'linear-gradient(to left, brown, darkred, red, #d95923)', fontSize: '2rem', margin: '0 auto', display: 'block', width: '300px', fontStyle: 'italic', borderRadius: '50px', border: '1px solid #f7e58b' }} variant="danger" onClick={() => deleteHandler(String(race.id))}>
            ОТКАЗАТЬСЯ
          </Button>
        </Card.Body>
      </Card>
      {
        showModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img src={getRaceImage(race.name)} alt={race.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onClick={handleModalClose} />
            </div>
          </div>
        )
      }
    </div >
  );
}