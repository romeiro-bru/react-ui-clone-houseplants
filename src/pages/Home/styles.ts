import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10.5rem;
    h1 {
        margin-left: 5%;
        margin-bottom: 1.5rem;
    }

    .input-icon {
        img {
            width: 20px;
            position: absolute;
            margin-left: 25px;
        }     
    }

    input {
        border-radius: 22px;
        border: 1px solid #0F2D24;
        height: 2.5rem;
        width: 90%;
        background: #f0f8ff00;
        margin: -1rem 0 0 0.7rem;
    }

    .card-plants {
        display: grid;
        grid-template-columns: 45% 45%;
        grid-column-gap: 1.3rem;
        grid-row-gap: 1.3rem;
        padding: 0 0 0 13px;
        margin-top: 2rem;
    }

    .card {
        border-radius: 15px;
        h3 {
            margin: 7% 0 0 10%;
        }
        img {
            width: 60%;
            margin-left: 16%;
        }
    }
    .card-1 {
        background: cornsilk;
    }

    .card-2 {
        background: #eef4e8;
    }

    .card-3 {
        background: #f0fff6;
    }

    .card-4 {
        background: #fff0f2;
    }

    footer {
        display: flex;
        justify-content: space-evenly;

        background: #d1e3e2;
        height: 79px;
        border-top-left-radius: 34px;
        border-top-right-radius:34px;
        margin-top: 22px;

        img {
            width: 27px;
            height: 27px;
            margin-top: 1.8rem;
        }
        .footer-plus {
            background: #95bbb9;
            margin-left: -12%;            
            padding: 0 2.5rem;

            border-top-left-radius: 35px;
            border-top-right-radius: 31px;
            border-right-style: solid;
            border-right-color: white;
            border-right-width: thick;   

            @media (min-width: 767px) {
                margin-left: -20%;
            }      
        }
    }

`;