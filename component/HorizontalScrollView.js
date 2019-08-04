import React , {Component} from 'react'
import {AppRegistry,
        ScrollView, 
        Image, 
        Text, 
        TextInput,
        Dimensions,
        View } from 'react-native';

export default class HorizontalScrollView extends Component{

    render()
    {
        let  screenWidth = Dimensions.get('window').width;
        let  screenHeight = Dimensions.get('window').height;


        return(
            <ScrollView horizontal={true} 
                        pagingEnabled={true}
                        scrollIndicatorInsets = {{top:10,left:10,right:10}}

                        onMomentumScrollBegin={()=>{
                            // alert('Begin srolling')
                        }}

                        onMomentumScrollEnd={()=>{

                            // alert('Scroll Ended')
                        }}

                        onScroll={(event)=>{

                            let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x} y = ${event.nativeEvent.contentSize.y}`
                            console.log(logData);
                        }}

                        scrollEventThrottle={10}

                >

                <View style={{backgroundColor: 'black', 
                            flex: 1,
                            width:screenWidth,
                            height:screenHeight,
                            marginTop:20,
                            ustifyContent:'center',
                            alignItems:'center'
                            }} >

                <Image source={require('../image/girl1.jpg')} style = 
                                        {{width:screenWidth,
                                        height:screenHeight,
                                        width:screenWidth,
                                        marginTop:20}}>
                </Image>

                    

                </View>


                <View style={{backgroundColor: 'tomato', 
                            flex: 1,
                            width:screenWidth,
                            height:screenHeight,
                            marginTop:20,
                            ustifyContent:'center',
                            alignItems:'center'
                            }} >

                <Image source={require('../image/girl2.jpg')} style = 
                                        {{width:screenWidth,
                                        height:screenHeight,
                                        width:screenWidth,
                                        marginTop:20}}>
                </Image>




                </View>

                <View style={{backgroundColor: 'tomato', 
                            flex: 1,
                            width:screenWidth,
                            height:screenHeight,
                            marginTop:20,
                            ustifyContent:'center',
                            alignItems:'center'
                            }} >

                <Image source={require('../image/girl3.jpg')} style = 
                                        {{width:screenWidth,
                                        height:screenHeight,
                                        width:screenWidth,
                                        marginTop:20}}>
                </Image>

                </View>


               

            </ScrollView>
            
          
        );

    }
}