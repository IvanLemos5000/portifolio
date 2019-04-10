import React, { Component } from 'react';
import Projects  from './Projects';
import SocialProfiles from './SocialProfiles';
import profilePicture from './assets/profile.png'

class App extends Component {
    state = { displayBio: false }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){
        return(
            <div>
                <img src={profilePicture} alt='profile' className='profilePicture' />
                <h1>Hello!</h1>
                <p>My name is Ivan. I'm a software developer.</p>
                <p>I'm always improving my skills with new courses and projects.</p>
                { this.state.displayBio ? (
                    <div>
                        <p>I live in São Paulo</p>
                        <p>My favorite language is Pyhton, and I'm learning React.js now.</p>
                        <p>Besides coding, I also like play video-games and listen music.</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                    ) : (
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;