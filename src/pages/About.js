import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>A propos</h1>
            <br />
            <p>Le Studio Ghibli Inc. (株式会社スタジオジブリ, Kabushiki gaisha sutajio Jiburi) est un studio d'animation japonais fondé par Hayao Miyazaki et Isao Takahata en 1985. Il produit des longs-métrages et courts-métrages d'animation, ainsi que, dans une moindre mesure, des téléfilms, des séries et des jeux vidéo. Le studio est connu principalement pour ses longs-métrages destinés à un large public et dont plusieurs ont remporté des succès auprès de la critique et du public, ainsi que de nombreuses récompenses. Le logo du studio est une représentation de Totoro, une créature apparue dans Mon voisin Totoro, l'un des films emblématiques du studio, sorti en 1988.</p>
            <br />
            <p> Le nom Ghibli vient du mot italien ghibli (que l’on trouve en anglais sous les formes « ghibli », « gibli », « gibleh »), issu du nom arabe libyen du sirocco, le vent chaud du désert : قبلي ('ghiblī'). Il renvoie également au nom d’un avion de reconnaissance italien utilisé pendant la Seconde Guerre mondiale, le Caproni Ca.309 Ghibli. C’est Hayao Miyazaki, grand amateur d'aviation, qui a choisi ce nom. Pour lui, le studio Ghibli se doit de jouer un rôle d'éclaireur dans le secteur de l'animation japonaise, et d'y faire souffler un vent de nouveauté. </p>
            <br />
            <p> En savoir plus: <a href="https://fr.wikipedia.org/wiki/Studio_Ghibli" target="_blank" rel="noopener noreferrer">   Wikipédia</a></p>
            <br />
            <p> Ce site est un projet personnel réalisé en React grâce à <em> The Studio Ghibli API </em>, qui catalogue les personnages, les lieux et les objets des mondes de Ghibli.</p>
            <br />
            <p> © Victoria Gouin - 2021</p>
        </div>
    );
};

export default About;
