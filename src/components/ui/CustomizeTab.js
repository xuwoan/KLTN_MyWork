
import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,Image
} from 'react-native';



const propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
};

export default class CustomizeTab extends Component {

  render() {
    return (
      <View style={{backgroundColor:'white' , borderBottomColor:'#2E4053',borderBottomWidth:0.5}} height={50}>
        
        <View style={{  flex:6 , flexDirection:'row', alignItems: 'center',
                                                            justifyContent: 'center',margin:5}}>
            { this.props.tabs.map((tab, i) => {
            var isTabActive = this.props.activeTab == i;//khi tab đó được chọn
            var vitri = i;
          return (
              <View style={{height:40}}>
                    <TouchableOpacity   key={tab} onPress={() => {this.props.goToPage(i)}} >
                        <Text style={{color: isTabActive ? 'white' : 'grey',
                                        backgroundColor:isTabActive ? '#2E4053':'white',
                                        borderColor:'#2E4053',
                                        fontSize:16,
                                        borderWidth:1.5,
                                        paddingTop:8,
                                        fontWeight:'bold',
                                        paddingLeft:5,
                                        paddingRight:5,
                                        height:40,
                                        textAlign:'center',
                                        width:120,
                                        borderTopLeftRadius:vitri?0:5,
                                        borderBottomLeftRadius:vitri?0:5,
                                        borderTopRightRadius:vitri?5:0,
                                        borderBottomRightRadius:vitri?5:0,}}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
              </View>
            
          );
        })}
        </View>
         {/*phần dấu cộng*/}
       
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  tabs: {
    backgroundColor:'red',
    flexDirection: 'row',
    padding:8,
    justifyContent:'center',
    alignItems:'center'
  },
  
  image:{
      width: 25,
      height: 25
  }
});

CustomizeTab.propTypes = propTypes;