import { View, StyleSheet, Text, TouchableOpacity, Animated, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Menu() {
    const [menuAberto, setMenuAberto] = useState(false);
    const menuWidth = useRef(new Animated.Value(40)).current;
    const router = useRouter();


    let tarefas = [
        {
            nome:"Reunião com a equipe"
        },
        {
            nome:"Manutençã no código"
        }
    ]

    function confirmaLogOut(){
         Alert.alert(
    "Confirmação",
    "Você deseja realmente sair?", 
    [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "Sair",
        onPress: () => {
          console.log("Usuário saiu");
          router.push('./cadastrar/')
        }
      }
    ],
  );
  
    }

    function AbreMenu() {
        const proximoEstado = !menuAberto;
        setMenuAberto(proximoEstado);

        Animated.timing(menuWidth, {
            toValue: proximoEstado ? 80 : 35, 
            duration: 300,
            useNativeDriver: false,
        }).start();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.menu, { width: menuWidth }]}>
                <TouchableOpacity onPress={AbreMenu} style={styles.icon}>
                    <MaterialCommunityIcons name="menu" size={24} color="white" />
                </TouchableOpacity>
                {menuAberto && (
                    <>
                        <TouchableOpacity style={styles.icon} onPress={() => router.push('./chat/')}>
                            <MaterialCommunityIcons name="chat" size={20} color='white'></MaterialCommunityIcons>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon} onPress={() => router.push('./list-status/')}>
                            <MaterialCommunityIcons name="list-status" size={20} color='white'></MaterialCommunityIcons>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon} onPress={() => router.push('./dashboard/')}>
                            <MaterialCommunityIcons name="chart-bar" size={20} color='white'></MaterialCommunityIcons>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={confirmaLogOut}
                            style={styles.icon}>
                            <MaterialCommunityIcons name="logout" size={20} color="white" />
                        </TouchableOpacity>
                    </>
                )}
            </Animated.View>
            <View style={styles.content}>
                <Text style={styles.greeting}>Olá, Bruno!</Text>
                <Text style={styles.subtitle}>Tarefas Pendentes</Text>

                {tarefas.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.taskCard}>
                        <Text style={styles.taskText}>{item.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    menu: {
        backgroundColor: '#993399',
        height: '100%',
        alignItems: 'center',
        paddingTop: 50,
    },
    icon: {
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 50,
    },
    greeting: {
        color: '#993399',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        color: '#993399',
        fontSize: 18,
        marginBottom: 15,
    },
    taskCard: {
        backgroundColor: '#B266B2',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        width: '80%',
    },
    taskText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});
