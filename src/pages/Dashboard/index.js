import { Button, Image, Text, View } from "react-native";
import styles from "./styles";

export default function Dashboard(){
    return(
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={require('../../assets/imgs/navalha.jpg')} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.desc}>Nome: Navalha de Mehrunes</Text>
                <Text style={styles.desc}>Atributos: Dano base: 11 / Peso: 3</Text>
                <Text style={styles.desc}>Passiva: Possui uma pequena chance de matar instantaneamente</Text>
                <Text style={styles.desc}>Jogo: Elder Scrolls V: Skyrim</Text>
                <Text style={styles.desc}>Um artefato divino.</Text>
                <Button style={styles.botao} title="Equipar" color="#AB00FF"></Button>
            </View>
        </View>
    )
}