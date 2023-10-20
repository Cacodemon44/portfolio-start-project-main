import React from 'react';
import iconsSprite  from "../../assets/images/icons-sprite.svg"

// создаем компоненту Icon, которая будет получать нужную иконку по id  из файла icon-sprite.svg через компоненту iconSpr   ite
// не забываем, что props передаются через типизацию
type IconPropsType = {
    iconId: string;
    width? : string;
    height? : string;
    viewBox?: string

}
//Icon делает 2 вещи: ывающую компоненту
export const Icon = (props:IconPropsType) => {
    return (
        // 1) рисует оболочку для svg с заданными параметрами или по умолчанию
        <svg width={props.width || "90"}  height = {props.height || "90"}
             viewBox= {props.viewBox || "0 0 180 180"} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/*// 2) делает запрос вниз в icons-sprite.tsx для поиска нужного пропса по iconID, получает код svg и передает его выше*/}
            <use xlinkHref={ `${iconsSprite}#${props.iconId}`} />
        </svg>
            );
};

