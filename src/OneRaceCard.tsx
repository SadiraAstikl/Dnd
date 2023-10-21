import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import type { DescriptionType } from './types/races';


// type OneRaceProps = {
//   race: DescriptionType;
// };


export default function OneRaceCard(): JSX.Element {


  function getRaceImage(name: string | undefined): string {
    switch (name) {
      case 'Elf':
        return 'https://images.hdqwalls.com/wallpapers/bthumb/elf-azralith-fantasy-4k-ol.jpg';
      case 'Dwarf':
        return 'https://wallpapers.com/images/hd/dwarf-in-dnd-0sjt2ehutoa3y7z1.jpg';
      case 'Human':
        return 'https://tabletopden.com/wp-content/uploads/2023/06/Half-elf-Rogue.png';
      case 'Dragonborn':
        return 'https://i.redd.it/xgyv45ff4l771.jpg';
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

  const audioHandler = async (name: string | undefined): Promise<void> => {
    const audio1 = new Audio('https://vgmsite.com/soundtracks/baldurs-gate-ii-soundtrack-2010/hqeomgfrki/19%20-%20Mountain%20Battle%20II.mp3');
    const audio2 = new Audio(' https://vgmsite.com/soundtracks/baldurs-gate-ii-soundtrack-2010/tvdeaxygdl/10%20-%20Taverns.mp3');
    const audio3 = new Audio('https://vgmsite.com/soundtracks/baldurs-gate-ii-soundtrack-2010/vwtytumidm/24%20-%20The%20Druid%20Grove.mp3');
    const audio4 = new Audio('https://vgmsite.com/soundtracks/baldurs-gate-ii-soundtrack-2010/occhrsgsnq/09%20-%20The%20Pirate%27s%20Isle.mp3');
    const audio5 = new Audio('https://vgmsite.com/soundtracks/baldurs-gate-ii-soundtrack-2010/xebvuoncht/20%20-%20City%20Battle%20I.mp3');
    const audio6 = new Audio('https://vgmsite.com/soundtracks/baldurs-gate-ii-soundtrack-2010/dfnfmfohef/17%20-%20Plains%20Battle%20II.mp3');
    const audio7 = new Audio('https://vgmsite.com/soundtracks/baldurs-gate-ii-soundtrack-2010/oxltkktkyg/32%20-%20Amongst%20the%20Sahauq.mp3');
    const audio8 = new Audio('https://vgmsite.com/soundtracks/baldurs-gate-ii-enhanced-edition-official-soundtrack-2016/nehyupxeua/06.%20City%20Gates.mp3');
    const audio9 = new Audio('https://vgmsite.com/soundtracks/baldurs-gate-ii-enhanced-edition-official-soundtrack-2016/ulweqewvqg/28.%20Romance%202.mp3');

    switch (name) {
      case 'Dragonborn':
        await audio1.play();
        break;
      case 'Dwarf':
        await audio2.play();
        break;
      case 'Elf':
        await audio3.play();
        break;
      case 'Gnome':
        await audio4.play();
        break;
      case 'Half-Elf':
        await audio5.play();
        break;
      case 'Half-Orc':
        await audio6.play();
        break;
      case 'Halfling':
        await audio7.play();
        break;
      case 'Human':
        await audio8.play();
        break;
      case 'Tiefling':
        await audio9.play();
        break
      default:
        await audio1.play();
    }
  }


  type ParamsType = {
    index: string;

  };

  const params = useParams<ParamsType>();
  const raceIndex = params.index;

  const [race, setRace] = useState<DescriptionType>();


  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/races/${raceIndex}`)
      .then((res) => res.json())
      .then((data: DescriptionType) => {
        setRace(data);
      })
      .catch((error) => console.log(error))
  }, []);

  const handleBack = (): void => {
    window.location.replace(`/`);
  };

  const handleRegClick = (): void => {
    window.location.replace(`/${race?.index}/registr`);
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black', marginTop: '100px', paddingTop: '200px'}}>
      <Card style={{ minWidth: '15rem', border: '2px solid darkred', borderRadius: '30px', backgroundColor: 'black' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '60px', color: '#f7e58b', textAlign: 'center', fontStyle: 'italic', marginTop: '300px' }}>{race?.name}</Card.Title>
          <Card.Img variant="top" src={getRaceImage(race?.name)} style={{ width: '800px', borderRadius: '30px', marginLeft: '300px', border: '2px solid #f7e58b' }} />
          <Button onClick={() => audioHandler(race?.name)}
            style={{ color: '#f7e58b', background: 'linear-gradient(to right, brown, darkred, red, #d95923)', fontSize: '2rem', margin: '0 auto', display: 'block', fontStyle: 'italic', borderRadius: '50px', border: '1px solid white' }} >
            МУЗЫКАЛЬНОЕ СОПРОВАЖДЕНИЕ
          </Button>
          <Card.Text style={{ fontSize: '30px', color: '#f7e58b', textAlign: 'center', fontStyle: 'italic' }}>{race?.alignment}</Card.Text>
          <Card.Text style={{ fontSize: '30px', color: '#f7e58b', textAlign: 'center', fontStyle: 'italic' }}>{race?.age}</Card.Text>
          <Card.Text style={{ fontSize: '30px', color: '#f7e58b', textAlign: 'center', fontStyle: 'italic' }}>{race?.size_description}</Card.Text>

          <br />
          <Button style={{ color: '#f7e58b', background: 'linear-gradient(to left, brown, darkred, red, #d95923)', fontSize: '2rem', margin: '0 auto', display: 'block', width: '300px', fontStyle: 'italic', borderRadius: '50px', border: '1px solid white' }} variant="danger" onClick={() => handleRegClick()}>
            ВЫБРАТЬ
          </Button>
          <br />
          <Button style={{ color: '#f7e58b', background: 'linear-gradient(to left, brown, darkred, red, #d95923)', fontSize: '2rem', margin: '0 auto', display: 'block', width: '300px', fontStyle: 'italic', borderRadius: '50px', border: '1px solid white' }} variant="danger" onClick={() => handleBack()}>
            НАЗАД
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}