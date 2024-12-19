import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailsScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</Text>
      <Text>Company: {user.company.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});

export default UserDetailsScreen;
