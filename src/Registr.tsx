import React, { useState } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export default function Registr(): JSX.Element {
  const { index } = useParams();
  console.log(index)



  const [inputs, setInputs] = useState({ name: '', class: '', gender: '', biography: '' });

  const submitHandler = async (): Promise<void> => {
    const response = await axios.post('/registr', inputs);

    if (response.status === 200) {
      window.location.href = '/'
    }
  };


  const onChangeInputs = (event: any): void => {
    setInputs((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleClick = (): void => {
    window.location.replace('/');
  };
  return (

    <Container style={{ width: "100vw", background: "black", borderRadius: "15px", alignContent: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", background: "black" }}>
        <img src="https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png" alt="logo" style={{ width: "50rem", height: "40rem" }} onClick={handleClick} />
      </div>
      <h1 style={{ textAlign: "center", color: "#f7e58b", fontStyle: 'italic' }}> ПРИВЕТСТВУЮ, {index}! </h1>
      <div style={{ background: 'black', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={submitHandler} style={{ width: '1900px', background: 'black', padding: '20px', borderRadius: '10px' }}>
          <div style={{ textAlign: 'center' }}>
            <label style={{ fontSize: "20px", color: "#f7e58b", fontStyle: 'italic' }} >
              ИМЯ
            </label>
            <br />
            <input name="name" placeholder='Cyric' type="text" onChange={onChangeInputs} value={inputs.name} style={{ width: '400px', height: '50px', fontSize: '20px', background: '#f7e58b' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <label htmlFor="class" style={{ fontSize: "20px", color: "#f7e58b", fontStyle: 'italic' }}>КЛАСС</label>
            <br />
            <select name="class" onChange={onChangeInputs} value={inputs.class} style={{ width: '400px', height: '50px', fontSize: '20px', background: '#f7e58b' }}>
              <option value="">ВЫБЕРИТЕ КЛАСС</option>
              <option value="1">ВОИН</option>
              <option value="2">МАГ</option>
              <option value="3">ВОР</option>
              <option value="4">ЖРЕЦ</option>
              <option value="5">РЕЙНДЖЕР</option>
              <option value="6">ДРУИД</option>
            </select>
          </div>
          <div style={{ textAlign: 'center' }}>
            <label htmlFor="gender" style={{ fontSize: "20px", color: "#f7e58b", fontStyle: 'italic' }}>ПОЛ</label>
            <br />
            <select name="class" onChange={onChangeInputs} value={inputs.class} style={{ width: '400px', height: '50px', fontSize: '20px', background: '#f7e58b' }}>
              <option value="">ПОЛ</option>
              <option value="1">МУЖ</option>
              <option value="2">ДЕВА</option>
            </select>
          </div>
          <div style={{ textAlign: 'center' }}>
            <label style={{ fontSize: "20px", color: "#f7e58b", fontStyle: 'italic' }}>
              БИОГРАФИЯ
            </label>
            <br />
            <input name="biography" type="password" placeholder='Напишите о себе, ваше прошлое, ваше настоящее и куда вы стремитесь' className="form-control" id="passwordrepeatinput" onChange={onChangeInputs} value={inputs.biography} style={{ width: '400px', height: '50px', fontSize: '20px', background: '#f7e58b' }} />
          </div>
          <br />
          <div style={{ textAlign: 'center', color: '#f7e58b' }}>
            <button type="submit" style={{ alignContent: 'center', background: '#f7e58b' }} >
              НА ПОИСКИ ПРИКЛЮЧЕНИЙ!
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}


