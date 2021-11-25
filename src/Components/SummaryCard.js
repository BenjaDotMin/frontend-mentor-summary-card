import React from 'react';
import Button from './Button';
import styled from "styled-components";
import summaryHeader from "../img/illustration-hero.svg";
import musicNote from "../img/icon-music.svg";

const SummaryCard = styled.div`
    width: 87.3vw; max-width: 450px; height: 697px;
    background-color: white; text-align: center; border-radius: 20px; overflow: hidden; padding-bottom: 17px; box-shadow: 0px 40px 46px -20px hsl(245deg 75% 52% / 18%);

    .summary-card{padding:54px 48px 0; height:465px;} 
    .summary-card__price-plan{display: flex; align-items: center; justify-content: space-between; margin: 19px 0 32px; border-radius:10px; padding: 25px 24px; background-color: ${props => props.theme.veryPalBlue};}
    .summary-card__price-plan div{text-align:left;}
    .summary-card__plan{display: flex; align-items: center; justify-content: center;}
    .summary-card__plan div{margin-left:20px;}
    
    img{display:block;}
    h1{font-size:28px; font-weight:900; line-height:21px; margin-bottom:25px;}
    p, label{color:${props => props.theme.desaturatedBlue};}
    a{color:${props => props.theme.brightBlue}; will-change: transition; transition: 0.2s;
        &:hover{
            color: ${props => props.theme.desaturatedBlue};
        }
    }
    h1, h3{color:${props => props.theme.darkBlue};}

    @media(max-width:465px){padding-bottom: 35px; height: auto;
        .summary-card{padding: 30px 25px 0; height: auto;}
        .summary-card__price-plan{padding: 18px 16px; margin-bottom:25px;}
        &>img{width:100%;}
        a{font-size:13px;}
        h1{font-size:22px;}
        h3, label{font-size:14px; line-height:14px; white-space:nowrap;}
    }

    @media(max-width:345px){width: 93.3vw;
        .summary-card{padding: 24px 15px 0;}
        h1{margin-bottom: 10px;}
    }
`

function Card() {
    return (
        <SummaryCard>
            <img src={summaryHeader} alt="Summary banner"/> 

            <div className="summary-card">
                <div className="summary-card__intro">
                    <h1>Order Summary</h1>
                    <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                </div>

                <div className="summary-card__price-plan">
                    <div className="summary-card__plan">
                      
                        <img src={musicNote} alt="music note"/>
                        <div>
                            <h3>Annual Plan</h3>
                            <label>$59.99/year</label>
                        </div>                          
                                     
                    </div>
                    <a href="/">Change</a>
                </div>

                <Button>Proceed to Payment</Button>
                <Button white>Cancel Order</Button>
            </div>
        </SummaryCard>
    )
}

export default Card;
