import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LineChart } from 'react-native-chart-kit'

export default function Dashboard() {
  const router = useRouter()
  const screenWidth = Dimensions.get('window').width

  const boxWidth = Math.min(screenWidth * 0.9, 600)
  const boxHeight = boxWidth
  const titleFontSize = screenWidth > 600 ? 32 : 24
  const titleMarginLeft = screenWidth > 600 ? 55 : 15

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push('./menu/')}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="arrow-left"
            color="black"
            size={22}
          />
        </TouchableOpacity>

        <Text style={[styles.title, { fontSize: titleFontSize, marginLeft: titleMarginLeft }]}>
          Dashboard do seu{'\n'}desempenho!
        </Text>

        <View style={[styles.boxDashboard, { width: boxWidth, height: boxHeight }]}>
          <LineChart
            data={{
              labels: ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'],
              datasets: [
                {
                  data: [0, 20, 15, 10, 20, 5, 35],
                },
              ],
            }}
            width={boxWidth}
            height={boxHeight}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#c96fc9',
              backgroundGradientFrom: '#c96fc9',
              backgroundGradientTo: '#c96fc9',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              propsForDots: {
                r: '5',
                strokeWidth: '2',
                stroke: '#993399',
              },
              propsForBackgroundLines: {
                stroke: '#c96fc9ff',
              },
            }}
            bezier
            style={{
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#993399',
    fontWeight: '700',
    marginTop: 10,
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 20,
  },
  boxDashboard: {
    backgroundColor: '#c96fc9ff',
    marginTop: 40,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
})
