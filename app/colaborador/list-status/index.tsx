import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { useRouter} from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function ListStatus(){

    const router = useRouter()

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('./menu/')}>
                <MaterialCommunityIcons name='arrow-left' size={22} style={styles.icon} color='black'></MaterialCommunityIcons>
            </TouchableOpacity>
            <Text style={styles.title}>Tarefas Da Semana</Text>
            <View id="pendente">
                <Text style={styles.subTitle}>Tarefas Pendentes</Text>
                <TouchableOpacity style={styles.taskCardPendente}>
                    <Text style={styles.colorTask}>Reunião com a equipe</Text>
                </TouchableOpacity>
            </View>
            <View id="feito">
                <Text style={styles.subTitle}>Tarefas Finalizadas</Text>
                <TouchableOpacity style={styles.taskCardFeito}>
                    <Text style={styles.colorTask}>Reunião com a equipe</Text>
                    <MaterialCommunityIcons name='check-circle' color='green' size={25}></MaterialCommunityIcons>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        flex:1
    },
    title:{
        color:'#993399',
        marginLeft:40,
        fontSize:30
    },
    subTitle:{
        marginLeft:50,
        marginTop:25,
        color:'#993399',
        fontSize:17
    },
    icon:{
        marginLeft:'auto',
        marginRight:20,
        marginTop:20,
        color:'black'
    },
    taskCardPendente:{
        backgroundColor:'#a34da3ff',
        padding:15,
        width:250,
        borderRadius:10,
        marginLeft:50,
        marginTop:10,
    },
    taskCardFeito:{
        backgroundColor:'#5f125fff',
        padding:15,
        width:250,
        borderRadius:10,
        marginLeft:50,
        marginTop:10,
        flexDirection:'row',
        gap:40,
        alignItems:'center'
    },
    colorTask:{
        color:'#f0f0f0'
    }
})
