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





// import React, { Component } from 'react'
// import { Text, View,StyleSheet,Image, TouchableHighlight, Slider, Switch, Button, TextInput, ColorPropType } from 'react-native'

// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {uname:'',email:'',errors:[]}
//   }
//   _unameChangeHandler = txt => this.setState({uname:txt})
//   _pwdChangeHandler = txt => this.setState({pwd:txt})

//   _emailChangeHandler = txt => this.setState({email:txt})
//   _regist = () =>{
//     let errors =[]
//     if(this.state.uname.trim().length <=3){
//       errors.push("用户名称的长度必须大于3")
//     }
//     if(this.state.pwd.trim().length <=6){
//       errors.push("密码的长度必须大于6")
//     }
   

//     let reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
//   if(!reg.test(this.state.email.trim())){
//     errors.push("笨不笨 邮箱格式不正确")
//   } 
//   this.setState({errors: errors })
//   if(errors.length === 0){
//     alert("注册成功!")
//   }
//  }
//  _xjh=()=>{
//   alert("熊嘉豪 17111652115!")
// }
//  render(){
//    return(
//      <View backgroundColor='#32C5E9'>
//        <TextInput backgroundColor='#96BFFF' placeholder="请输入用户名" value={this.state.uname} onChangeText={this._unameChangeHandler} />
//        <TextInput backgroundColor='#c4ccd3' placeholder="请输入密码" value={this.state.pwd} onChangeText={this._pwdChangeHandler} />
//        <TextInput backgroundColor='#f49f42' placeholder="请输入电子邮箱" keyboardType="email-address" value={this.state.email} onChangeText={this._emailChangeHandler} />
//        <Text style={styles.button} onPress={this._xjh}>点击这里查看作业的作者</Text>
//        <Button onPress={this._regist} title="点这里可以注册" />
//        <View>
//          {this.state.errors.map((item,index) => {
//            return <Text key={index} style={styles.info}>{item}</Text>
//          })}
//        </View>
//      </View>
//    )
//  }
// }
// const styles=StyleSheet.create({
// info:{color:'red'},
// button:{backgroundColor:'pink',marginLeft:80,marginTop:15,borderWidth:1,width:250,height:60,borderRadius:5,textAlign:"center",textAlignVertical:'center'},
 
// })