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


class Trivia extends Component {

    state = {
        questions: [],
        questionIndex: 0
    }

    componentDidMount() {
        let triviaQuestions = FetchData();

        console.log("triviaQuestions", triviaQuestions)

        // this.setState({
        //     questions: triviaQuestions
        // })

    }

    render() {
        return (
            <div>
                <h1>Trivia</h1>
                <div>
                    <h3>{this.state.questions}</h3>
                </div>
            </div>
        )
    }
}

export default Trivia



// https://stackoverflow.com/questions/66507362/react-async-and-await-not-working-with-fetch
// https://dmitripavlutin.com/javascript-fetch-async-await/
