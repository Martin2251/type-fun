import React from "react";
import {Wrapper} from "./Card.styles";


type Props = {
    name: string;
    imgUrl: string;

};

const Card: React.FC<Props> = ({name, imgUrl}) => (
    <Wrapper>
        <p>{name}</p>
        <p>{imgUrl}</p>
    </Wrapper>


);
export default Card;