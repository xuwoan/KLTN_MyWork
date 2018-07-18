import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight, ListView, TouchableOpacity, Image
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
var majordata = require('../../data/dept.json')

import {
  Header, Title,
  Container,
  Body, Item, ListItem, Row, Col,
  Input, Button, Content, Card, CardItem,
  Icon, Left, Right
} from "native-base";
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#DFDFDF',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    elevation:3,
    height: 40,
    borderRadius: 5,




  },
  headerText: {
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#60819E',

  },
  itemText: {
    paddingTop: 4,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 17,
    height: 35,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 3,
    marginTop: 3,
    borderWidth: 1,
    backgroundColor: 'white',
    color: '#60819E',
    fontWeight: 'bold',
    borderBottomColor: '#60819E',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',

  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 30,
    width: 30,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

export default class QuickFilterScreen extends Component {
  
  setcollapsed(num) {
    this.setState({ collapsed: this.changearray(num, this.state.collapsed) });
  }
  changearray(num, array) {
    array[num] = !array[num];
    return array
  }
  setstate(list) {
   // console.log("aaa");
    this.setState({
      data1: list[0],
      data2: list[1],
      data3: list[2],
      data4: list[3],
      data5: list[4],
      data6: list[5],
      data7: list[6],
      // data8: list[7],
      // data9: list[8],
      // data10: list[9],
      // data11: list[10],
      // data12: list[11],
      // data13: list[12],
      // data14: list[13],
      // data15: list[14],
      // data16: list[15],
      // data17: list[16],
      // data18: list[17],
      // data19: list[18],
      // data20: list[19],
      // data21: list[20],
      // data22: list[21],

    }, function () {
    //  console.log("/", this.state.data2)
    })
  }
  goBack() {
    Actions.pop()
  }
  filterlistbyname(data) {
   // console.log(data)
    var list = [[], [], [], [], [], [], []];
    //var data1 = [], data2 = [], data3 = [], data4 = [], data5 = [], data6 = [], data7 = [], data8 = [], data9 = [], data10 = [], data11 = [], data12 = [], data13 = [], data14 = [], data15 = [], data16 = [], data17 = [], data18 = [], data19 = [], data20 = [], data21 = [], data22 = [], data23 = [], data24 = []
    for (var i = 0; i < data.length; i++) {

      switch (data[i].name.charAt(0).toUpperCase()) {
        case 'A':
          list[0].push(data[i])
          break;
        case 'Ă':
          list[0].push(data[i])
          break;
        case 'Â':
          list[0].push(data[i])
          break;
        case 'B':
          list[0].push(data[i])
          break;
        case 'C':
          list[0].push(data[i])
          break;
        case 'D':
          list[1].push(data[i])
          break;
        case 'Đ':
          list[1].push(data[i])
          break;
        case 'E':
          list[1].push(data[i])
          break;
        case 'Ê':
          list[1].push(data[i])
          break;
        case 'G':
          list[1].push(data[i])
          break;
        case 'H':
          list[2].push(data[i])
          break;
        case 'I':
          list[2].push(data[i])
          break;
        case 'K':
          list[2].push(data[i])
          break;
        case 'L':
          list[3].push(data[i])
          break;
        case 'M':
          list[3].push(data[i])
          break;
        case 'N':
          list[3].push(data[i])
          break;
        case 'O':
          list[4].push(data[i])
          break;
        case 'Ô':
          list[4].push(data[i])
          break;
        case 'Ơ':
          list[4].push(data[i])
          break;
        case 'P':
          list[4].push(data[i])
          break;
        case 'Q':
          list[4].push(data[i])
          break;
        case 'R':
          list[5].push(data[i])
          break;
        case 'S':
          list[5].push(data[i])
          break;
        case 'T':
          list[5].push(data[i])
          break;
        case 'U':
          list[6].push(data[i])
          break;
        case 'Ư':
          list[6].push(data[i])
          break;
        case 'V':
          list[6].push(data[i])
          break;
        case 'X':
          list[6].push(data[i])
          break;
        case 'Y':
          list[6].push(data[i])
          break;
        default:
          break;
      }

    }
    list[0].sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    list[1].sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    list[2].sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    list[3].sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    list[4].sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    list[5].sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    list[6].sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    this.setstate(list);
  //  console.log("LIST", list[1])

  }
  componentDidMount() {
    
  //  console.log('AA')
    setTimeout(() => {

      this.setState({
        datasource1: this.state.datasource1.cloneWithRows(this.state.data1),
        datasource2: this.state.datasource2.cloneWithRows(this.state.data2),
        datasource3: this.state.datasource3.cloneWithRows(this.state.data3),
        datasource4: this.state.datasource4.cloneWithRows(this.state.data4),
        datasource5: this.state.datasource5.cloneWithRows(this.state.data5),
        datasource6: this.state.datasource6.cloneWithRows(this.state.data6),
        datasource7: this.state.datasource7.cloneWithRows(this.state.data7),
        datasource8: this.state.datasource8.cloneWithRows(this.state.data8),
        datasource9: this.state.datasource9.cloneWithRows(this.state.data9),
        datasource10: this.state.datasource10.cloneWithRows(this.state.data10),
        datasource11: this.state.datasource11.cloneWithRows(this.state.data11),
        datasource12: this.state.datasource12.cloneWithRows(this.state.data12),
        datasource13: this.state.datasource13.cloneWithRows(this.state.data13),
        datasource14: this.state.datasource14.cloneWithRows(this.state.data14),
        datasource15: this.state.datasource15.cloneWithRows(this.state.data15),
        datasource16: this.state.datasource16.cloneWithRows(this.state.data16),
        datasource17: this.state.datasource17.cloneWithRows(this.state.data17),
        datasource18: this.state.datasource18.cloneWithRows(this.state.data18),
        datasource19: this.state.datasource19.cloneWithRows(this.state.data19),
        datasource20: this.state.datasource20.cloneWithRows(this.state.data20),
        datasource21: this.state.datasource21.cloneWithRows(this.state.data21),
        datasource22: this.state.datasource22.cloneWithRows(this.state.data22),



      }, function () {
      //  console.log(this.state.datasource2)
      })

    }, 500);

   // console.log('VV')
  }




  renderrow(data, sectionID, that) {
   // console.log("data", data)
    return (
      <TouchableOpacity onPress={()=>that.gotoFilter(data)}>
      <Text style={styles.itemText}>{data.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    let that=this;
  //  console.log(this.state.datasource2);
    return (
      <Container>
        <Header style={{ backgroundColor: '#60819E' }}>
          <Left >
            <TouchableOpacity onPress={() => this.goBack()}>
              <Image resizeMode='stretch' style={styles.image} source={require('../../images/arrow_icon.png')} />
            </TouchableOpacity>
          </Left>
          <Body >
            <Title>Tìm Nhanh</Title>
          </Body>
         
        </Header>
        <Content style={{ backgroundColor: 'white' }}>
          {this.props.user.type ===0 ?
           <TouchableOpacity  onPress={() => this.onfetchUserMajor(0)}>
           < View style={styles.header}>
             <Text style={styles.headerText}>NGÀNH CỦA BẠN</Text>
           </View>
         </TouchableOpacity> :
        null}
         

          <TouchableOpacity onPress={() => this.setcollapsed(0)
          }>
            <View style={styles.header}>
              <Text style={styles.headerText}>A,B,C ({this.state.data1.length})</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed[0]} align="center">
            {this.state.data1.length < 1 ? null :
              <ListView dataSource={this.state.datasource1} renderRow={(rowData, rowId)=>this.renderrow(rowData, rowId,that)}>

              </ListView>}

          </Collapsible>

          <TouchableOpacity onPress={() => this.setcollapsed(1)
          }>
            <View style={styles.header}>
              <Text style={styles.headerText}>D,E,G ({this.state.data2.length})</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed[1]} align="center">
            {
              this.state.data2.length < 1 ? null :
                <ListView dataSource={this.state.datasource2} renderRow={(rowData, rowId)=>this.renderrow(rowData, rowId,that)} />
            }


          </Collapsible>

          <TouchableOpacity onPress={() => this.setcollapsed(2)
          }>
            <View style={styles.header}>
              <Text style={styles.headerText}>H,I,K ({this.state.data3.length})</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed[2]} align="center">
            {
              this.state.data3.length < 1 ? null :
                <ListView dataSource={this.state.datasource3} renderRow={(rowData, rowId)=>this.renderrow(rowData, rowId,that)} />
            }

          </Collapsible>

          <TouchableOpacity onPress={() => this.setcollapsed(3)
          }>
            <View style={styles.header}>
              <Text style={styles.headerText}>L,M,N ({this.state.data4.length})</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed[3]} align="center">
            {
              this.state.data4.length < 1 ? null :
                <ListView dataSource={this.state.datasource4} renderRow={(rowData, rowId)=>this.renderrow(rowData, rowId,that)} />

            }
          </Collapsible>

          <TouchableOpacity onPress={() => this.setcollapsed(4)
          }>
            <View style={styles.header}>
              <Text style={styles.headerText}>O,P,Q ({this.state.data5.length})</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed[4]} align="center">
            {
              this.state.data5.length < 1 ? null :
                <ListView dataSource={this.state.datasource5} renderRow={(rowData, rowId)=>this.renderrow(rowData, rowId,that)} />

            }
          </Collapsible>

          <TouchableOpacity onPress={() => this.setcollapsed(5)
          }>
            <View style={styles.header}>
              <Text style={styles.headerText}>R,S,T ({this.state.data6.length})</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed[5]} align="center">
            {
              this.state.data6.length < 1 ? null :
                <ListView dataSource={this.state.datasource6} renderRow={(rowData, rowId)=>this.renderrow(rowData, rowId,that)} />

            }
          </Collapsible>

          <TouchableOpacity onPress={() => this.setcollapsed(6)
          }>
            <View style={styles.header}>
              <Text style={styles.headerText}>U,V,X,Y ({this.state.data7.length})</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed[6]} align="center">
            {
              this.state.data7.length < 1 ? null :
                <ListView dataSource={this.state.datasource7} renderRow={(rowData, rowId)=>this.renderrow(rowData, rowId,that)} />

            }
          </Collapsible>

         
         



        </Content>
      </Container >
    );
  }
}