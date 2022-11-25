import React, { Component } from "react";

const triviaApi = "https://the-trivia-api.com/api/questions?categories=general_knowledge&limit=5";

// This component uses this api: 
// https://the-trivia-api.com/docs/



const FetchData = async () => {
    await fetch(triviaApi)
        .then(response => response.json())
        .then(response => {
            console.log("aaa==>",response);
            return response
        })
        .catch(err => console.error(err));
}

const aaaaa = []
class Trivia extends Component {

    state = {
        questions: [],
        questionIndex: 0
    }

    

    async componentDidMount() {
        await fetch(triviaApi)
        .then(response => response.json())
        .then(response => {
            console.log("response==>",response, typeof(response));
            response.map(item =>{
                aaaaa.push(item.question)
            });

            console.log("aaaaa",aaaaa)
            this.setState({
                questions: aaaaa
            });
        })
        .catch(err => console.error(err));

    }

    render() {
        return (
            <div>
                <h1>Trivia</h1>
                <div>
                    <h3>{this.state.questions[this.state.questionIndex]}</h3>
                    <ul className="list-group">
                        {/* {this.state.questions.map(item => (
                            <li
                            >
                                {item[textProperty]}
                            </li>
                        ))} */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Trivia



// https://stackoverflow.com/questions/66507362/react-async-and-await-not-working-with-fetch
// https://dmitripavlutin.com/javascript-fetch-async-await/
