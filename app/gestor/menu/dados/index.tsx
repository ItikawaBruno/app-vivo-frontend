import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { useRouter } from "expo-router";

export default function DadosColaborador() {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;

  const tarefas = [
    { titulo: "Reunião com a equipe" },
    { titulo: "Manutenção do código" },
    { titulo: "Manutenção do código" },
    { titulo: "Manutenção do código" },
    { titulo: "Manutenção do código" },
  ];

  const boxWidth = Math.min(screenWidth * 0.9, 600);
  const boxHeight = boxWidth;
  const titleFontSize = screenWidth > 600 ? 32 : 24;
  const subtitleFontSize = screenWidth > 600 ? 24 : 20;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push("/gestor/menu")}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="arrow-left"
            size={22}
            color="black"
          />
        </TouchableOpacity>

        <Text style={[styles.title, { fontSize: titleFontSize }]}>
          Nome do Colaborador
        </Text>

        <View style={[styles.boxDashboard, { width: boxWidth, height: boxHeight }]}>
          <LineChart
            data={{
              labels: ["seg", "ter", "qua", "qui", "sex", "sab", "dom"],
              datasets: [
                {
                  data: [12, 20, 30, 10, 25, 15],
                },
              ],
            }}
            width={boxWidth}
            height={boxHeight}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: "#c96fc9",
              backgroundGradientFrom: "#c96fc9",
              backgroundGradientTo: "#c96fc9",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: "#993399",
              },
              propsForBackgroundLines: {
                stroke: "#c96fc9ff",
              },
            }}
            bezier
            style={{
              borderRadius: 10,
            }}
          />
        </View>

        <View>
          <Text style={[styles.subtitle, { fontSize: subtitleFontSize }]}>
            Tarefas Pendentes
          </Text>
          {tarefas.map((item, index) => (
            <TouchableOpacity key={index} style={[styles.cardTarefa, { width: Math.min(screenWidth * 0.85, 600), marginLeft: 'auto', marginRight: 'auto' }]}>
              <Text style={{ color: "#000000" }}>{item.titulo}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  title: {
    color: "#993399",
    fontWeight: "700",
    marginLeft: 15,
    marginTop: 10,
  },
  icon: {
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 20,
  },
  boxDashboard: {
    backgroundColor: "#c96fc9ff",
    marginTop: 50,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  subtitle: {
    color: "#993399", 
    marginLeft: 30,
    marginTop: 30,
    fontWeight: "600",
  },
  cardTarefa: {
    backgroundColor: "#b353b3ff",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
});
