import React from "react";

class ImageCard extends React.Component{
    constructor(props){
        super(props)
        
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef.current.clientHeight);
        //this.imageRef.current.addEventListener('load', this.setSpan)
    }

    setSpan(){
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 150 + 1)
        this.setState({spans});
    }
    
    render(){
        const {description, urls} = this.props.image; 

        return(
            <div>
                <img
                    //style={{gridRowEnd : `span ${this.state.spans}`}}
                    ref={this.imageRef}
                    alt={description} 
                    src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard;