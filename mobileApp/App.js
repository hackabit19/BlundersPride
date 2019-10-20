// import React from 'react';
// import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

// export default class FetchExample extends React.Component {

//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         alert(JSON.stringify(responseJson.movies));
//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }



//   render(){

//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={({id}, index) => id}
//         />
//       </View>
//     );
//   }
// }



import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as Ably from 'ably';

const ably = new Ably.Realtime("0BeZCQ.p_xJxQ:kVy3m7kzD63IqtwN");
const channel = ably.channels.get('light');
//import axios from 'axios'

export default class HelloWorldApp extends Component {

  constructor(props) {
    super(props);
    this.state = {email: 'abcd@gmail.com' , password: '1234' , isAuthenticated : false , token : ''  , data : []};
  }
  componentDidMount() {
    channel.subscribe(message => {
      this.setState(prev => {
        let newD = prev.data
        newD.push(message.data)
        return {
          ...this.state,
          data: newD.reverse()
        }
      })
    })
  }
  _onPressButton = () => {

          fetch('http://172.16.91.84:12345/api/users/login' , {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
            })
          })
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson.token)
            {
              this.setState({token: responseJson.token});
              this.setState({isAuthenticated : true});

              fetch('http://172.16.91.84:12345/api/missingpersons/all')
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({data : responseJson});
                 
              })
              .catch((error) => {
                console.error(error);
              });
            }
            else{
              alert("Invalid Credentails")
            }
            //alert(JSON.stringify(responseJson));
          })
          .catch((error) =>{
            // console.error(error);
          });

  }

  render() {

    if( this.state.isAuthenticated) {
      // return ()
      const list = this.state.data.map((row , index) => (
        <View key={index} >
          <Avatar source={{uri:'http://172.16.91.84:12345/' + row.imageData}} />
          <Text> { row.name } </Text>
      </View>
      ))
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {list}
        {/* {this.showList()} */}
        </View>
    

  );
    }

    return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Light</Text>

          <TextInput
          style={{height: 60, width: "80%" , borderColor:'grey'}}
          placeholder="Email"
          onChangeText={(text) => this.setState({email:text})}
          value={this.state.email}
          />
      
          <TextInput secureTextEntry = {true}
          style={{height: 60, width: "80%", borderColor:'grey'}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          type='password'
          />
          
          <Button
                onPress={this._onPressButton}
                title="Log In"
              />

          </View>
      

    );
  }
}
