import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://bemsertanejo.net/wp-content/uploads/2018/10/CD-Gusttavo-Lima-O-Embaixador-Ao-Vivo-2018.jpg"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Melhores do Sertanejo</h1>
        <p>13 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Zé da Recaída</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:20</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Zé da Recaída</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:20</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Zé da Recaída</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:20</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Zé da Recaída</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:20</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Zé da Recaída</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:20</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Zé da Recaída</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:20</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Zé da Recaída</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:20</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Zé da Recaída</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:20</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Zé da Recaída</td>
          <td>Gusttavo Lima</td>
          <td>O Embaixador</td>
          <td>3:20</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
