import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({ joke: json }));
    }
    
    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }));
    }

    render() {
        return(
            <div>
                <h2>Jokes</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want more jokes?</h3>
                <button onClick={this.fetchJokes}>Click Here!</button>
                {this.state.jokes.map(joke => (<Joke joke={joke} key={joke.id} />))}
            </div>
        )
    }
}

export default Jokes;