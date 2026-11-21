import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Image, Button } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

const datasource = [
  {
    data: [
      { key: 'Weepinbell', card: 70 },
      { key: 'Victreebel', card: 71 },
    ],
    title: "Grass",
    bgcolor: 'lightgreen',
    iconColor: 'darkgreen',
    icon: "leaf",
  },
  {
    data: [
      { key: 'Magnemite', card: 81 },
      { key: 'Magneton', card: 82 },
    ],
    title: "Electric",
    bgcolor: 'yellow',
    iconColor: 'goldenrod',
    icon: "bolt",
  },
  {
    data: [
      { key: 'MewEX', card: 193 },
    ],
    title: "Psychic",
    bgcolor: 'plum',
    iconColor: 'purple',
    icon: "eye",
  },
  {
    data: [
      { key: 'Erikas Invitation', card: 203 },
    ],
    title: "Trainer",
    bgcolor: 'lightgrey',
    iconColor: 'dimgray',
    icon: "user",
  }
];

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity
          style={styles.opacityStyle}
          onPress={() => { Alert.alert(item.key + " card " + item.card + " selected!"); }}
      >
        <Text style={styles.textStyle}>{item.key}</Text>

        {item.card && (
            <Image
                source={{
                  uri: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.card + "-2x.png",
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
              title="ADD POKEMON"
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