import React, { Component } from 'react';

class App extends Component {
    state = { displayBio: false }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){
        return(
            <div>
                <h1>Hello!</h1>
                <p>My name is Ivan. I'm a software developer.</p>
                <p>I'm always improving my skills with new courses and projects.</p>
                { this.state.displayBio ? (
                    <div>
                        <p>I live in São Paulo</p>
                        <p>My favorite language is Pyhton, but I'm learning React.js too.</p>
                        <p>Besides coding, I also like play video-games.</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                    ) : (
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    )
                }
                
            </div>
        )
    }
}

export default App;