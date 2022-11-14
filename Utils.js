

import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Avatar, Button, Card, Title, Paragraph,TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign'

const Line = (props) =>{
    return(
        <View style={[styles.border,props.style]} >
        </View>
    )
}


const Dropdown = (props) => {
    const [visible, setVisible] = useState(false);

    const hideMenu = (e) => {

        props.setFn(e,props.label)
        setVisible(false);
    }
  
    const showMenu = () => setVisible(true);

    <TextInput style={styles.text_input}
    mode='outlined'
      label={props.label}
   onPressIn={showMenu}
   defaultValue={props.defaultValue ? props.defaultValue : null}
    />
    return (
        <View >
        <Menu
          visible={visible}
          anchor={ <Button style={styles.border_1} onPress={showMenu} >{props.defaultValue ? props.defaultValue : props.label}    {<Icon name='caretdown' size={18} />}</Button> }
          onRequestClose={hideMenu}
        >
            {
                props.items.map((data,key)=>{
                    return(
                        <View key={key} >
                        <MenuItem onPress={()=> hideMenu(data)}>{data}</MenuItem>
                        <MenuDivider />
                        </View>
                    )
                })
            }
          
        </Menu>
      </View>
    );
  };

module.exports  ={
    Line,
    Dropdown
}

const styles = StyleSheet.create({

    border:{
      margin: '7%',
      marginLeft:'0%',
      marginRight:'0%',
      borderTopColor:'blue',
      borderWidth:1,
    },
    border_1:{
        borderWidth:2,
        borderColor:'black',
        marginTop:10,
        margin:2
    }
  });
  

