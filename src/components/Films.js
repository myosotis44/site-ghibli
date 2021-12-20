import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const Films = () => {

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(5);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["raccoon", "spirits", "Princess", "orphan", "pigs", "forest"];


    useEffect(() => {

        axios
            .get(' https://ghibliapi.herokuapp.com/films')
            .then((res) => setData(res.data));
        console.log(data);


    }, [rangeValue]);

    data.length = rangeValue;

    return (



        <div className="films">
            <div className="sort-container">
                <input
                    type="range"
                    min="1"
                    max="21"
                    value={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                <ul>
                    {radios.map((radio) => {
                        return (
                            <li key={radio}>
                                <input
                                    type="radio"
                                    value={radio}
                                    id={radio}
                                    checked={radio === selectedRadio}
                                    onChange={(e) => setSelectedRadio(e.target.value)}
                                />
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && (
                    <h5 onClick={() => setSelectedRadio("")}>Annuler la sélection</h5>
                )}
            </div>


            <div className="films">
                <ul className="films-list">
                    {data
                        .filter((film) => film.description.includes(selectedRadio))
                        .map((film) => (
                            <div>
                                <Card film={film} key={film.title} />
                                <br></br>
                            </div>

                        ))}
                </ul>
            </div>
        </div>
    );
};


export default Films;