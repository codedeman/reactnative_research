
import React , {Component} from 'react'
import {AppRegistry,
        ScrollView, 
        Image, 
        Text,
        FlatList,
        StyleSheet,
        View } from 'react-native';
import flatListData from '../dataserver/flatListData';


class FlatListItems extends Component {

        render()
        {
                return(

                        <View style={{
                                flex:1,
                                backgroundColor:this.props.index % 2 == 0 ?'mediumseagreen':'tomato'
                        }}>

                        <Text> {this.props.item.name} </Text>
                        <Text> {this.props.item.foodDescription} </Text>


                        </View>
                );
        }
}

const styles = StyleSheet.create({

        flataListItems:{

                color:'white',
                padding:10,
                fontSize:10
        }
})


export default class FlatListBasic extends  Component {

        render(){

                return(



                <View style={{flex: 1, marginTop: 22}}>
                        <FlatList 
                            data={flatListData}
                            renderItem={({item, index})=>{
                                console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                                return (
                                <FlatListItems item={item} index={index}>
            
                                </FlatListItems>);
                            }}
                            >
            
                        </FlatList>
                    </View>

                // <View style={{flex:1,marginTop:20}}>
                //         <FlatList
                //                 data = {flataListData}

                //                 renderItem={(item,index)=>{

                //                         console.log(`Item = ${JSON.stringify(item)},index =${index}`)
                //                         return(<FlatListItems item={item} index={index}>

                //                                 </FlatListItems>);
                //                 }}
                                
                //                 >
                //         </FlatList>
                // </View>


                );
                
        }

}