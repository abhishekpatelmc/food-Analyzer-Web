import React from 'react';
//import SyntaxHighlighter from 'react-syntax-highlighter';
import ImageUploader from './component/index.js';
//import { rainbow } from 'react-syntax-highlighter/styles/hljs';

const steps = {
    one: `npm install --save react-images-upload`,
    two: `import React from 'react';
import ImageUploader from 'react-images-upload';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: pictureFiles
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}`
}


export default class App extends React.PureComponent {
    render() {
        return (
            <div className="page">
                <h1>Food Analyzer</h1>
                <p>We can detect what kind of food you are eating,
                     what ingredients are used in your food, what are the 
                     calories present in that food and many more features 
                     similar to these combined with Machine learning 
                     and React as frontend developed especially for your good 
                     health.</p>
                <div className="head">Upload your image here!</div>
                <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                               withPreview={true} />
            </div>
        );
    }
}
