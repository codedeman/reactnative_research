
import React , {Component} from 'react'
import {AppRegistry,
        ScrollView, 
        Image, 
        Text, 
        TextInput,
        Dimensions,
        View } from 'react-native';

        export default class ProductVC extends Component {
            render() {
                
                let  screenWidth = Dimensions.get('window').width;
                return(
                    <ScrollView keyboardDismissMode = 'on-drag'
                    
                        maximumZoomScale={3}
                        minimumZoomScale={0.2}
                    
                    > 
                        <Image source={require('../image/node.png')} style = {{width:screenWidth,height:screenWidth*500/900,marginTop:20}}>
                    
                        </Image>

                        <Text
                            style={{frontSize:20,
                                padding:15,
                                color:'white',
                                textAlign:'center',
                                backgroundColor:'red'}}
                        >
                        Node js 
                        </Text>

                        <TextInput style={{
                                            padding:10,
                                            margin:10,
                                            borderWidth:2}} placeholder="Enter research">


                        </TextInput>

                        <Image source={require('../image/node.png')} style = {{width:screenWidth,height:screenWidth*500/900,marginTop:20}}>
                    
                        </Image>

                        <Image source={require('../image/node.png')} style = {{width:screenWidth,height:screenWidth*500/900,marginTop:20}}>
                    
                        </Image>

                        <Image source={require('../image/node.png')} style = {{width:screenWidth,height:screenWidth*500/900,marginTop:20}}>
                    
                        </Image>

                    </ScrollView>


                );
                
            }
        }
          
         
          