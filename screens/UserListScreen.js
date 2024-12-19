import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import axios from 'axios';

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false); // Track loading more data
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);
  const [search, setSearch] = useState('');

  const fetchUsers = async () => {
    if (loading || loadingMore || isEndReached) return;

    setLoadingMore(true); // Set loadingMore to true before fetching

    try {
      const url = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`;
      const response = await axios.get(url);

      if (response.data.length < 5) {
        setIsEndReached(true);
      } else {
        setUsers((prevUsers) => [...prevUsers, ...response.data]);
        setFilteredUsers((prevUsers) => [...prevUsers, ...response.data]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoadingMore(false); // Set loadingMore to false after fetching
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts or page changes
  }, [page]);

  // Handle search functionality
  const handleSearch = (text) => {
    setSearch(text);
    if (text === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  // Sort by Name
  const sortByName = () => {
    const sorted = [...filteredUsers].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredUsers(sorted);
  };

  // Sort by Email
  const sortByEmail = () => {
    const sorted = [...filteredUsers].sort((a, b) => a.email.localeCompare(b.email));
    setFilteredUsers(sorted);
  };

  // Render each user item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('UserDetails', { user: item })}
    >
      <Image
        source={{ uri: `https://picsum.photos/seed/${item.id}/50` }}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name"
        value={search}
        onChangeText={handleSearch}
      />

      {/* Sorting Buttons */}
      <View style={styles.sortButtons}>
        <Button title="Sort by Name" onPress={sortByName} />
        <Button title="Sort by Email" onPress={sortByEmail} />
      </View>

      {/* User List */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={() => {
          if (!loadingMore && !isEndReached) {
            setPage((prevPage) => prevPage + 1);
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loadingMore && <ActivityIndicator size="large" color="#0000ff" />}
      />
    </View>
  );
};
      
const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    margin: 10,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sortButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});

export default UserListScreen;
