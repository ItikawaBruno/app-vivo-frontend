import {View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import {useRouter} from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';

export default function Dashboard(){

    const router = useRouter()
    const screenWidth = Dimensions.get('window').width

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('./menu/') }>
                <MaterialCommunityIcons style={styles.icon} name='arrow-left' color='black' size={22}></MaterialCommunityIcons>
            </TouchableOpacity>
            <Text style={styles.title}>Dashboard do seu{'\n'}desempenho!</Text>
            <View style={styles.boxDashboard}>
                <LineChart
                    data={{
                        labels: ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom'],
                        datasets: [
                            {
                                data: [0, 20, 15, 10,20,5,35],
                            },
                        ],
                    }}
                    width={screenWidth * 0.9}
                    height={350}
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
                            borderRadius: 10
                        },
                        propsForDots: {
                            r: '5',
                            strokeWidth: '2',
                            stroke: '#993399',
                        },
                        propsForBackgroundLines:{
                            stroke:'#c96fc9ff'
                        }
                    }}
                    bezier
                    style={{
                        borderRadius: 10
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    title:{
        fontSize:24,
        color:'#993399',
        fontWeight:'700',
        marginLeft:15,
        marginTop:10
    },
    icon:{
        marginLeft:'auto',
        marginRight:20,
        marginTop:20
    },
    boxDashboard:{
        backgroundColor:'#c96fc9ff',
        width:350,
        height:350,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:50,
        borderRadius:10,
    }
})