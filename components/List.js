import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import RenderUserData from './RenderUserData'

const users = [
    { id: 1, name: 'Alice Brown', age: 28, occupation: 'Software Developer' },
    { id: 2, name: 'Bob White', age: 32, occupation: 'Architect' },
    { id: 3, name: 'Catherine Lee', age: 29, occupation: 'Nurse' },
    { id: 4, name: 'David Black', age: 40, occupation: 'Project Manager' },
    { id: 5, name: 'Eva Green', age: 27, occupation: 'Photographer' },
    { id: 6, name: 'Frank Blue', age: 33, occupation: 'Marketing Specialist' },
    { id: 7, name: 'Blue', age: 83, occupation: 'Finance Specialist' },
    { id: 8, name: 'Lee', age: 39, occupation: 'Doctor' },
];

const List = () => {
    return (
        <View style={{ marginBottom: 250 }}>
            <Text style={styles.title}>List</Text>
            <FlatList
                data={users}
                renderItem={({item})=><RenderUserData item= {item}/>}
                keyExtractor={(item) => item.id.toString()} />
        </View>

    );
};

const CustomList = () => {
    return (
        <View >
            <ScrollView style={{ marginBottom: 120 }}>
                {users.map((item) => (
                    <View key={item.id} style={styles.container}>
                        <Text style={styles.item}> {item.name}</Text>
                        <Text style={styles.item}> {item.occupation}</Text>
                    </View>
                ))
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'pink',
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        borderWidth: 3,
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
    },
    item: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    }
})
export { List, CustomList };
