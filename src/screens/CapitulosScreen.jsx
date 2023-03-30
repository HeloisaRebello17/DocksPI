import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { Appbar, Button, Paragraph } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "../config/styles";

export default function CapitulosScreen(){
    const _goBack = () => console.log("Went back");
    const _handleMore = () => console.log("Shown more");

return(
    <SafeAreaProvider>
         <Appbar.Header style={styles.navConfig}>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content titleStyle={{ textAlign: "center", fontWeight: "bold", fontSize:"20px" }} title="Alice na Favela" />
            <Appbar.Action icon="menu" onPress={_handleMore} />
        </Appbar.Header>
        <View>
        <LinearGradient
        // Background Linear Gradient 
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
          colors={colors} 
          locations={locations} 
          style={{ height: 7, width: "100%" }}
        />
        </View>
        <Paragraph style={styles.capitulosparagraph}>Capítulos</Paragraph>
        <Button><Text style={{fontStyle:"italic", height:"5px", width:"5px"}}></Text><Text>Capítulo1</Text></Button>
        <Button><Text style={{fontStyle:"italic", height:"5px", width:"5px"}}></Text><Text>Capítulo2</Text></Button>
        <Button><Text style={{fontStyle:"italic", height:"5px", width:"5px"}}></Text><Text>Capítulo3</Text></Button>
        <Button><Text style={{fontStyle:"italic", height:"5px", width:"5px"}}></Text><Text>Capítulo4</Text></Button>
        <Button><Text style={{fontStyle:"italic", height:"5px", width:"5px"}}></Text><Text>Capítulo5</Text></Button>
        <View>
          <Button>Adicionar novo capítulo</Button>
        </View>
        
    </SafeAreaProvider>
    );
}