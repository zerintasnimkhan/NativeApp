import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/slices/cartSlice';
import { addItemToFavorites } from '../redux/slices/favoritesSlice'; 
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'; 
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../App'; 
import Separator from '../components/separator';

type DetailsScreenRouteProp = RouteProp<StackParamList, 'Details'>;

type NavigationProp = NativeStackNavigationProp<StackParamList, 'Cart'>;

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<DetailsScreenRouteProp>();

  const product = route.params?.product;

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product details not available.</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    
    const productWithNumericPrice = {
      ...product,
      price: typeof product.price === 'string' ? parseFloat(product.price) : product.price, 
      quantity: 1,
    };
    dispatch(addItemToCart(productWithNumericPrice));
    navigation.navigate('Cart');
  };

  const handleAddToFavorites = () => {
    dispatch(addItemToFavorites(product));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={{ uri: product.image }} style={styles.image}>
          <View style={styles.overlay}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../database/icons/left.png')} style={styles.upperIcons} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={handleAddToFavorites}>
              <Image source={require('../database/icons/favorite.png')} style={styles.upperIcons} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.ratingContainer}>
          <TouchableOpacity style={styles.chipContainer}>
            <Image source={require('../database/icons/star.png')} style={styles.icon} />
            <Text style={styles.text}>{product.rating}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chipContainer}>
            <Image source={require('../database/icons/like.png')} style={styles.icon} />
            <Text style={styles.text}>{product.percentage}%</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.paragraph}>
          {product.description}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.specifications}>Specifications</Text>
          <Image
            source={require('../database/icons/next.png')}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
        <Separator />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.reviews}>{product.numberOfReviews} reviews</Text>
          <Image
            source={require('../database/icons/next.png')}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </View>
        <Separator />
        <View style={styles.flexButton}>
          <View>
            <Text style={styles.price}>${parseFloat(product.price.toString()).toFixed(2)}</Text>
            <Text style={styles.delivery}>{product.deliveryTime}</Text>
          </View>
          <Button
            mode="contained"
            style={styles.addButton}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonText}
            onPress={handleAddToCart}
          >
            Add to cart
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: "#F6F5F4",
    marginRight: 8,
  },
  recommendation: {
    marginLeft: 8,
  },
  specifications: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#424242"
  },
  overlay: {
    position: 'absolute',
    top: 16,  
    left: 0,  
    right: 0, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  reviews: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: "#424242"
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  icon: {
    width: 14,
    height: 16,
    marginRight: 6,
  },
  upperIcons: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    marginTop: 26,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#424242",
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 430,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: '#f6f5f4',
  },
  contentContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#424242",
  },
  paragraph: {
    marginBottom: 10,
    marginTop: 14,
    fontSize: 14.5,
    color: '#424242',
    lineHeight: 19,
    fontWeight: '600',
  },
  delivery: {
    marginBottom: 10,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#3C6EEF',
    width: 280,
    height: 52,
    borderRadius: 16,
    paddingTop: 6,
    marginTop: 26
  },
  buttonContent: {
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    paddingBottom: 8,
  },
  flexButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default DetailsScreen;
