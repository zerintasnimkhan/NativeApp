import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton, Text } from 'react-native-paper';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: 'https://www.araba.ae/cdn/shop/files/2_ae55ee80-e23a-43a0-9546-d0afa3f0ac52.webp?v=1707835755' }} style={styles.image} />
        <Card.Content>
          <Title>Beats Studio Pro Headphones</Title>
          <View style={styles.ratingContainer}>
            <IconButton icon="star" size={20} />
            <Text>4.9</Text>
            <Text style={styles.recommendation}>88% recommend</Text>
          </View>
          <Paragraph>
            Beats Studio Pro Wireless is a premium Bluetooth overhead headphone. The gadget sounds great and effectively suppresses noise.
          </Paragraph>
          <Text style={styles.specifications}>Specifications</Text>
          <Text>172 reviews</Text>
          <Text style={styles.price}>$265.90</Text>
          <Text>Delivery: 2-5 days</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log('Added to cart')}>Add to cart</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 480,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendation: {
    marginLeft: 8,
  },
  specifications: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
