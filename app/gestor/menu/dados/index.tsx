import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { useRouter } from "expo-router";

export default function DadosColaborador(){

    const router = useRouter()
    const screenWidth = Dimensions.get('window').width

    const tarefas = [
        {
            titulo:'Reunião com a equipe'
        },
        {
            titulo:'Manutenção do código'
        },
        {
            titulo:'Manutenção do código'
        },
        {
            titulo:'Manutenção do código'
        },
        {
            titulo:'Manutenção do código'
        },
    ]

    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/gestor/menu')}>
                <MaterialCommunityIcons style={styles.icon} name='arrow-left' size={22} color='black'></MaterialCommunityIcons>
            </TouchableOpacity>
            <Text style={styles.title}>Nome do Colaborador</Text>
            <View style={styles.boxDashboard}>
                <LineChart data={{
                    labels:['seg','ter','qua','qui','sex', 'sab','dom'],
                    datasets:[
                        {
                            data:[12,20,30,10,25,15]
                        }
                    ]
                }}
                width={screenWidth*0.9}
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
                    }}/>
            </View>
            <View>
                <Text style={styles.subtitle}>Tarefas Pendentes</Text>
                {
                    tarefas.map((item,index) => (
                        <TouchableOpacity key={index} style={styles.cardTarefa}>
                            <Text>{item.titulo}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
        container:{
        flex:1,
        backgroundColor:'#f0f0f0'
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
    },
    cardTarefa:{
        backgroundColor:'#b353b3ff',
        borderRadius:10,
        padding:15,
        marginTop:20,
        width:300,
        marginLeft:35
    },
    subtitle:{
        color:'#993399',
        marginLeft:30,
        fontSize:20,
        marginTop:30
    }
})