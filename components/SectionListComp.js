import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const SectionListComp = () => {
  const sections = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Orange'],
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Broccoli', 'Spinach'],
    },
    {
      title: 'Berries',
      data: ['Strawberry', 'Blueberry', 'Raspberry'],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (// ({ section:{title} }) access by <Text>{title}</Text> 
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text> 
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'pink'

  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16, 
    marginLeft:10,
  },
});

export default SectionListComp;
