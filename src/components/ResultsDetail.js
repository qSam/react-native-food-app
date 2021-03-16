import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = props => {
  return (
    <View styles={styles.container}>
      <Image style={styles.image} source={{ uri: props.result.image_url }} />
      <Text style={styles.name}>{props.result.name}</Text>
      <Text>
        {props.result.rating} Stars, {props.result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginLeft: 10
  },
  name: {
    fontWeight: 'bold'
  }
});

export default ResultsDetail;
