import { View, Button, Text, StyleSheet } from 'react-native';
import {useState} from 'react';
import styles from '../assets/styles';  // Importing external styles

const ButtonComponent = ({ month }) => {        // we can also do this ButtonComponent = (props) => { and access it as props.month
    const [name,setName] = useState('Ahmad')

    const changeNameState= (val)=>{
        setName(val);
    }

    //if you want to pass parameters use this ()=>funcallbr()
    return (
        <View style={styles.container}>
            <Button title='press to change Name' onPress={()=>changeNameState('Azan')} ></Button> 
            
            <Text style={inStyle.customButton}>{name}</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>{month}</Text>

        </View>
    )
}

const inStyle = StyleSheet.create({
    customButton:{
        backgroundColor:'#C39178',
        borderRadius: 5,
        fontSize: 20, 
        fontWeight: 'bold', 
        textAlign: 'center',
        textAlignVertical: 'center',
        padding:5,
        margin:5,
        borderColor:'green',
        borderWidth:3

    }
})

export default ButtonComponent;
