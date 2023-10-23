import { Component } from "react";

class ImageComponent extends Component{

render(){

    const src=this.props.UrlGattino;
    const alt=this.props.DescrizioneGattino;
return <img src={src} alt={alt} />
}

}
export default ImageComponent