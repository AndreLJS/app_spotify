import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://bemsertanejo.net/wp-content/uploads/2018/10/CD-Gusttavo-Lima-O-Embaixador-Ao-Vivo-2018.jpg"
          alt="Playlist"
        />
        <strong>Melhor do Sertanejo</strong>
        <p>Ouça as melhores do sertanejo universitário</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
