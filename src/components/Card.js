import React from 'react';

const Card = (props) => {
    const { film } = props;
    console.log(film)
    return (
        <li className="card">
            <img src={film.image} alt={"Image de " + film.title} />
            <div className="data-container">
                <ul>
                    <li>{film.title}</li>
                    <li>{film.original_title}</li>
                    <li>{film.description}</li>
                    <li>{film.director}</li>
                    <li>{film.release_date}</li>
                </ul>
            </div>
        </li>

    );
};

export default Card;