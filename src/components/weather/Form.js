import React from 'react';

const Form = (props) => {
    return (
        <div className={"weather-form"}>
            <form action="" onSubmit={props.weatherMethod}>
                <input type="text" name={"city"} placeholder={"Введите город"}/>
                <button>Узнать погоду</button>
            </form>
        </div>
    );
};
export default Form;