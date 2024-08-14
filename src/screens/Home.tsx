import React from 'react';
import { View, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { Text, Card, Button, IconButton, Avatar } from 'react-native-paper';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.deliveryContainer}>
      <Image
                source={require('../database/icons/gps.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 20,
                }}
              />
        <Text style={styles.locationText}>Delivery: 96744, Puulena St 74, Kaneohe, HI</Text>
        <Image
                source={require('../database/icons/alarm-bell.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
      </View>

      <Card style={styles.featuredCard}>
        <ImageBackground
          source={ require('../database/images/rose-hibiscus.jpg') }
          style={styles.cardCover}
          imageStyle={{ borderRadius: 8 }}
        >
          <View style={styles.cardContentOverlay}>
          <Text variant="bodySmall" style={styles.herb}>Herbviore</Text>
            <Text variant="titleLarge" style={styles.cardTitle}>Rose Hibiscus Mist</Text>
            <Text variant="bodySmall" style={[styles.strikethroughText, styles.textColor]}>$36.00</Text>
            <Text variant="bodyLarge" style={styles.cardPrice}>$34.20</Text>
            <Button textColor='white' style={styles.cardButton}>Add to Cart</Button>
          </View>
        </ImageBackground>
      </Card>

      <View style={styles.categoriesHeader}>
        <Text variant="titleLarge" style={{ fontWeight: 'bold', color: '#565656'}}>Popular categories</Text>
        <Text style={{color: '#3C6EEF', fontWeight: 'bold', marginLeft: 110}} onPress={() => {}}>See all</Text>
        <Image
                source={require('../database/icons/next.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: '#3C6EEF'
                }}
              />
      </View>
      <View style={styles.categoriesContainer}>
        {renderCategory('Beauty', require('../database/icons/lotion.png'))}
        {renderCategory('Clothes', require('../database/icons/ladies-cloth.png'))}
        {renderCategory('Books', require('../database/icons/open-book.png'))}
        {renderCategory('Home', require('../database/icons/flower.png'))}
        {renderCategory('Sport',  require('../database/icons/basket-ball.png'))}
      </View>
     
      <View style={styles.productsGrid}>
        {renderProduct('Moisturising tonic', '$27.90', 'data:image/jpeg;base64,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')}
        {renderProduct('Facial moisturiser', '$45.50', 'https://bloomskinbeauty.com/wp-content/uploads/2022/08/20211004_Repechage-4_14a221c8-88c1-4301-b891-000b17af7bab_2000x.jpg')}
        {renderProduct('Facial moisturiser', '$45.50', 'https://bloomskinbeauty.com/wp-content/uploads/2022/08/20211004_Repechage-4_14a221c8-88c1-4301-b891-000b17af7bab_2000x.jpg')}
        {renderProduct('Facial moisturiser', '$45.50', 'https://bloomskinbeauty.com/wp-content/uploads/2022/08/20211004_Repechage-4_14a221c8-88c1-4301-b891-000b17af7bab_2000x.jpg')}
      </View>
    </ScrollView>
  );
};

const renderCategory = (title: string, icon: string) => (
  <View style={styles.category}>
    <Avatar.Icon size={56} icon={icon} 
    style={{
      backgroundColor: '#FFFFFF', 
      borderColor: '#F8F8F7', 
      borderWidth: 2,
      padding: 30
      
    }}
    color="#5A5A5A"
    />
    <Text>{title}</Text>
  </View>
);

const renderProduct = (name: string, price: string, imageUrl: string) => (
  <View style={styles.productContainer}>
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.productImage}
      imageStyle={styles.imageBackground}
    >
    </ImageBackground>
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  locationText: {
     marginRight: 30,
     paddingLeft: 0,
  }, 
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  featuredCard: {
    marginBottom: 16,
    borderRadius: 20
  },
  cardCover: {
    height: 200,
    justifyContent: 'flex-end',
  },
  cardContentOverlay: {
    padding: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: '#565656',
  },
  strikethroughText: {
    textDecorationLine: 'line-through',
  },
  cardPrice: {
    color: '#565656',
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardButton: {
    marginTop: 26,
    marginRight: 230,
    marginBottom: 12,
    backgroundColor: '#3C6EEF',
    borderRadius: 10,
    width: 110,
    height: 36,
    
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 12
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  
  },
  category: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productsContainer: {
    width: '48%',  
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  productContainer: {
    width: '48%',
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 200,  
    borderWidth: 1,
    borderColor: '#E0E0E0',  
    borderRadius: 15,
    overflow: 'hidden',  
  },

  imageBackground: {
    borderColor: '#E0E0E0',  
    borderRadius: 15,
    backgroundColor: '#E0E0E0',  
  },
  productInfo: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#565656',
  },
  productPrice: {
    fontSize: 14,
    color: '#565656',  
    marginTop: 4,
  },
  textColor: {
    color: '#A9A9A9',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
    marginTop: 8
  },
  herb: {
    fontWeight: 'bold',
    color: '#565656',
    marginTop: 10

  }
});

export default Home;
