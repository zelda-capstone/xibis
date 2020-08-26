import React from 'react'
import { Bubo } from '../index'
import { useDropzone } from "react-dropzone";
import  './style.css'
import Spritesheet from 'react-responsive-spritesheet';
import Green from './Green-Portal-Sprite.png'
import Purple from './Purple-Portal-Sprite.png'
import PurpleUpsd from './Purple-Portal-Sprite-UpsD-1.png'
import GreenRev from './Green-Portal-Sprite-Rev.png'





class Wormhole extends React.Component{

    
    Dropzone = ({ onDrop, accept }) => {
        // Initializing useDropzone hooks with options
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop,
          accept
    });


    render(){
        return (

            <div className="background" >
                    <div className="portal" >
                    <Spritesheet
                        image={PurpleUpsd}
                        widthFrame={73}
                        heightFrame={64}
                        steps={8}
                        fps={2}
                        autoplay={true}
                        loop={true}
                        onClick={spritesheet => {
                            spritesheet.play();}}
                    />
                    </div>
                    <div className="bubos-puzzle-container">
                        <div className="bubos-container">
                        <Bubo />
                        <Bubo/>
                        </div>
                        <Spritesheet
                        image={Green}
                        widthFrame={64}
                        heightFrame={64}
                        steps={24}
                        fps={2.5}
                        autoplay={true}
                        loop={true}
                        onClick={spritesheet => {
                            spritesheet.play();}}
                    />  
                    </div>
                  <div className="portal-reverse">
                    <Spritesheet
                        image={Green}
                        widthFrame={64}
                        heightFrame={64}
                        direction="rewind"
                        steps={24}
                        fps={2.5}
                        autoplay={true}
                        loop={true}
                        onClick={spritesheet => {
                            spritesheet.pause();
                            spritesheet.play()}}
                    /> 
                    </div> 
                    <div className="portal-reverse">
                    <Spritesheet
                        image={GreenRev}
                        widthFrame={64}
                        heightFrame={64}
                        direction="rewind"
                        steps={24}
                        fps={2.5}
                        autoplay={true}
                        loop={true}
                        onClick={spritesheet => {
                            spritesheet.pause();
                            spritesheet.play()}}
                    />  
                    </div>
            </div>
          );
    }

}






export default Wormhole
