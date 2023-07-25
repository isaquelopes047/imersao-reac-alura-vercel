import React from 'react';
import styled from "styled-components";

const StyleBanner = styled.header`
    .containerImg {
        width: 100%;
        height: 400px;
        overflow: hidden;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Banner = () => {
    return (
        <StyleBanner>
            <div className='containerImg'>
                <img src="./img/banner.jpg" alt="Banner" />
            </div>
        </StyleBanner>
    )
};



