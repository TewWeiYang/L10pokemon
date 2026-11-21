import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Image, Button } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const datasource = [
  {
    data: [
      { key: 'Espresso', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400' },
      { key: 'Americano', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400' },
    ],
    title: "Hot Coffee",
    bgcolor: 'tan',
    iconColor: 'saddlebrown',
    icon: "mug-hot",
  },
  {
    data: [
      { key: 'Iced Latte', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400' },
      { key: 'Cold Brew', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400' },
    ],
    title: "Iced Coffee",
    bgcolor: 'lightblue',
    iconColor: 'steelblue',
    icon: "snowflake",
  },
  {
    data: [
      { key: 'Cappuccino', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400' },
    ],
    title: "Specialty",
    bgcolor: 'wheat',
    iconColor: 'sienna',
    icon: "mug-saucer",
  },
  {
    data: [
      { key: 'Croissant', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400' },
    ],
    title: "Pastry",
    bgcolor: 'bisque',
    iconColor: 'chocolate',
    icon: "cookie-bite",
  }
];

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity
          style={styles.opacityStyle}
          onPress={() => { Alert.alert(item.key + " selected!"); }}
      >
        <Text style={styles.textStyle}>{item.key}</Text>

        {item.image && (
            <Image
                source={{
                  uri: item.image,
                }}
                style={{ width: 200, height: 280, resizeMode: 'contain' }}
            />
        )}
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
              title="ADD COFFEE"
              onPress={() => Alert.alert("Coming Soon!")}
          />
        </View>

        <SectionList
            sections={datasource}
            contentContainerStyle={{ padding: 10 }}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgcolor, icon, iconColor } }) => (
                <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
                  <FontAwesome6 name={icon} size={20} color={iconColor} />
                  <Text style={[styles.headerText, { color: iconColor }]}>{title}</Text>
                </View>
            )}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },

  buttonContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  opacityStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 15,
    backgroundColor: 'white',
  },

  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderWidth: 1,
    gap: 8,
  },

  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});