import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The number 1</Text>
      <Text>The number 2</Text>

      <View>
        <Text style={styles.card}>
            Hello, this is a card component!
        </Text>
    </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    card: {
        backgroundColor: "#eee",
        padding: 10,
        borderRadius: 5,
    },

})