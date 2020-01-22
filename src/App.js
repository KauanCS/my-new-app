import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import image from './22033.jpg';
import './App.css';
import {ButtonBar,
      DivBar,
      Container,
      Square,
      Divisor,
      InnerContainer,
      InnerContent,
      P,
      H1,
      ButtonIntro,
      IconBar
         } from './styles';

const image1 = image;

function App() {
  const numbers =  Array.from(Array(3).keys());

  const [scroll, setScroll] = useState(window.scrollY);
  const handleScroll = () => setScroll(window.scrollY);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scroll]);
  console.log(scroll)
  return (
    <Container>
      <IconBar>#</IconBar>
        <Parallax bgImage={image1} strength={750} >
          <Divisor>
            <DivBar background={scroll}>
              <ButtonBar>Home</ButtonBar>
              <ButtonBar>About</ButtonBar>
              <ButtonBar>Contact Us</ButtonBar>
            </DivBar>
          </Divisor>
          <div style={{background: "linear-gradient(0deg, rgba(11,0,40, 1) 5%, rgba(0,0,0,0) 100%)"}}>
              <div style={{ height: 500, display: "table-cell", verticalAlign: "middle", textAlign: "center" }}>
                <Square color="black" transform="translate(-50%,-47%)" ><h3> PARALLAX EFFECT</h3></Square>
                <Square ><h3> PARALLAX EFFECT</h3></Square>
                <ButtonIntro>Click me!</ButtonIntro>
              </div>
          </div>
        </Parallax>
        <InnerContainer>
          {numbers.map((_value, index) => {
            return <> <InnerContent>
              <img src={image1}/>
              <H1>Titulo {index + 1} </H1>
              <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia mollis placerat. Praesent dignissim nec ante non dictum. Mauris laoreet in dolor in auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ipsum tortor, ultrices quis efficitur ac, porta eget quam. Ut sed lobortis dui, ut gravida libero. Maecenas et lorem quam. Nunc at imperdiet nisl, sit amet porttitor est. Vivamus molestie tortor vitae convallis dictum. Quisque porttitor risus quam. </P>
            </InnerContent> </>
          })}
        </InnerContainer>

    </Container>
  );
}

export default App;
