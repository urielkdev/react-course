import React, { Component } from 'react';

class ImageCard extends Component {
    constructor(props) {
        super(props);

        this.state = { spanHeight: 10, spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans /* callback */);
    }

    // calculates and sets how many spans are needed for the image to fit
    setSpans = () => {

        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / this.state.spanHeight);
        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            // n ta multiplicando os gridColunEnd
            <div style={{gridAutoRows: `${this.state.spanHeight}px`,
                gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;