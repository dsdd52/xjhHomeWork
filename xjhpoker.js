import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, TouchableHighlight, Slider, Switch, Button, TextInput, ColorPropType } from 'react-native'


export default class App extends Component {
  constructor(props){
    super(props)
    this.imgs=[ require('./assets/back.png'),
      require('./assets/R1.png'),
    require('./assets/R2.png'),
    require('./assets/R3.png'),
    require('./assets/R4.png'),
    require('./assets/R5.png'),
    require('./assets/R6.png'),
    require('./assets/R7.png'),
    require('./assets/R8.png'),
    require('./assets/R9.png'),
    require('./assets/R10.png'),
    require('./assets/R11.png'),
    require('./assets/R12.png'),
    require('./assets/R13.png')]
          this.state = {
          pokers:[0,0,0,0],
          timer:null
      } 
  }

  _randomPoker=()=>{
          this.timer = setInterval(() => {
        this._timer && clearInterval(this._timer); 
    let pokers=[]
    for(let i=0;i<4;i++){
      let temp=Math.floor( Math.random()*13)
      pokers.push(temp)
    }
    this.setState({pokers:pokers})
  }, 100);      
     }
     _stopRandom=()=>{
    clearInterval(this.timer)
}
  render() {
    return(
      
      <View >
     <Text style={styles.button} onPress={this._randomPoker}>熊嘉豪作业点这个开始抽纸牌</Text>
    
          <View style={styles.container}>
            {this.state.pokers.map((item,index)=>{
              return <Image source={this.imgs[item]}/>
            })}
          </View>
          <Button onPress={this._stopRandom} title="学号17111652115 "/>
      </View>
    )
  }              
}
const styles=StyleSheet.create({
  container:{flexDirection:'row',justifyContent:'space-around'},
  button:{backgroundColor:'pink',marginLeft:80,marginTop:15,borderWidth:1,width:250,height:60,borderRadius:5,textAlign:"center",textAlignVertical:'center'},
  img:{color:'red',width:100,height:80,backgroundColor:'yellow',margin:1,textAlign:'center',textAlignVertical:'center'}
  
})