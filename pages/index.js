import React from 'react';
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

import Banner from "../src/components/Banner";

function HomePage() {
   
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Banner />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
    background-color: ${({ theme}) => theme.backgroundLevel1};
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 10px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return ( 
        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...propriedades}) {
    const playlistNames = Object.keys(propriedades.playlists);
  
    return (
      <StyledTimeline>
        {playlistNames.map((playlistName, index) => { // Adicione o parâmetro "index" aqui
          const videos = propriedades.playlists[playlistName];
  
          return (
            <section key={index}> {/* Use o "index" como a chave */}
              <h2>{playlistName}</h2>
              <div>
                {videos
                    .filter((video) => {
                        const titleNormalized = video.title.toLowerCase();
                        const searchValueNormalized = searchValue.toLowerCase();
                        return titleNormalized.includes(searchValueNormalized)
                })
                .map((video, key) => ( 
                  <a href={video.url} key={key}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </StyledTimeline>
    );
  }