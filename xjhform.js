import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, TouchableHighlight, Slider, Switch, Button, TextInput, ColorPropType } from 'react-native'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {uname:'',email:'',errors:[]}
  }
  _unameChangeHandler = txt => this.setState({uname:txt})
  _pwdChangeHandler = txt => this.setState({pwd:txt})

  _emailChangeHandler = txt => this.setState({email:txt})
  _regist = () =>{
    let errors =[]
    if(this.state.uname.trim().length <=3){
      errors.push("用户名称的长度必须大于3")
    }
    if(this.state.pwd.trim().length <=6){
      errors.push("密码的长度必须大于6")
    }
   

    let reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if(!reg.test(this.state.email.trim())){
    errors.push("笨不笨 邮箱格式不正确")
  } 
  this.setState({errors: errors })
  if(errors.length === 0){
    alert("注册成功!")
  }
 }
 _xjh=()=>{
  alert("熊嘉豪 17111652115!")
}
 render(){
   return(
     <View backgroundColor='#32C5E9'>
       <TextInput backgroundColor='#96BFFF' placeholder="请输入用户名" value={this.state.uname} onChangeText={this._unameChangeHandler} />
       <TextInput backgroundColor='#c4ccd3' placeholder="请输入密码" value={this.state.pwd} onChangeText={this._pwdChangeHandler} />
       <TextInput backgroundColor='#f49f42' placeholder="请输入电子邮箱" keyboardType="email-address" value={this.state.email} onChangeText={this._emailChangeHandler} />
       <Text style={styles.button} onPress={this._xjh}>点击这里查看作业的作者</Text>
       <Button onPress={this._regist} title="点这里可以注册" />
       <View>
         {this.state.errors.map((item,index) => {
           return <Text key={index} style={styles.info}>{item}</Text>
         })}
       </View>
     </View>
   )
 }
}
const styles=StyleSheet.create({
info:{color:'red'},
button:{backgroundColor:'pink',marginLeft:80,marginTop:15,borderWidth:1,width:250,height:60,borderRadius:5,textAlign:"center",textAlignVertical:'center'},
 
})