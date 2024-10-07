import { useState } from "react";


const App = () => {

    const [ playGame, setPlayGame ] = useState({sport: '', day: ''});

    const [addPlay, setAddPlay] = useState([]);

    const games = ['cricket', 'badminton', 'football', 'hockey'];
    const days = ['friday', 'saturday', 'sunday'];

    const handleChange = (e) => {
        const {name, value} = e.target;

        setPlayGame((prevData) => ({
            ...prevData, [name]: value
        }));
    };

    const handleClick = () => {
        if (playGame.sport === '' || playGame.day === '') {
            alert('choose one of the both')
        } else {
            setAddPlay((prevData) => [...prevData, playGame]);
            setPlayGame({sport: '', day: ''});
        }

    };

    console.log(addPlay);

    return (
        <div>
            <div>
                <p>Choose a game</p>
                {
                    games.map((ele, i) => (
                        <div key={i}>
                            <input type="radio" name="sport" onChange={handleChange} value={ele} checked={playGame.sport === ele} />
                            <label htmlFor={ele}>{ele}</label>
                        </div>
                    ))
                }

                <p>choose a day</p>
                {
                    days.map((ele, i) => (
                        <div key={i}>
                            <input type="radio" name="day" onChange={handleChange} value={ele} checked={playGame.day === ele} />
                            <label htmlFor={ele}>{ele}</label>
                        </div>
                    ))
                }
            </div>

            <div>
                <button onClick={handleClick}>submit</button>
            </div>

            {
                addPlay.map((ele, i) => (
                    <div key={i}>
                        <p>i want ot play <b>{ele.sport}</b> on {ele.day}</p>
                    </div>
                ))
            }
        </div>
    )
};

export default App;
