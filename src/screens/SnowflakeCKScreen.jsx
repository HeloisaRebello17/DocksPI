import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from "../config/styles";
import { Appbar, Button, Paragraph, TextInput } from "react-native-paper";
import { Alert, Modal, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";






export default function SnowflakeCK() {
 
  const [modalVisible, setModalVisible] = useState(false);
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");
  const [data, setData] = useState('');
  const handleChange = (e, editor) => {
    setData(editor.getData());
  }
  return (
    <SafeAreaProvider style={styles.containercriacaoper}>
      <Appbar.Header style={styles.navConfig}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content titleStyle={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }} title="Snowflake" />
        <Appbar.Action icon="menu" onPress={_handleMore} />
      </Appbar.Header>

      <View>
        <LinearGradient
          // Background Linear Gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[
            "rgba(190,228,228,1)",
            "rgba(190,228,228,1)",
            "rgba(242,204,201,1)",
            "rgba(242,204,201,1)",
            "rgba(235,222,240,1)",
            "rgba(235,222,240,1)",
            "rgba(239,196,167,1)",
            "rgba(239,196,167,1)",
            "rgba(239,196,167,1)",
            "rgba(190,228,228,1)",
            "rgba(190,228,228,1)",
            "rgba(242,204,201,1)",
            "rgba(242,204,201,1)",
            "rgba(235,222,240,1)",
            "rgba(235,222,240,1)",
            "rgba(239,196,167,1)",
            "rgba(239,196,167,1)",
            "rgba(190,228,228,1)",
            "rgba(190,228,228,1)",
            "rgba(242,204,201,1)",
            "rgba(242,204,201,1)",
          ]}
          locations={[
            0, 0.1, 0.1, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6, 0.6,
            0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1, 1,
          ]}
          style={{ height: 7, width: "100%" }}
        />
 <View>
      </View>
      <View style={styles.containermodal}>
      <View style={styles.containernomeper}>
        <Paragraph style={styles.paragraphper}>1.Resuma seu livro em uma frase: 
         </Paragraph>
      </View>
      <View style={styles.centeredView}>
            <Modal
                
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Icon name="close" 
                            style={styles.buttonclose}
                            onPress={() => setModalVisible(!modalVisible)}
                           
                            />
                       
                        <Text style={styles.modalText}>O primeiro passo é pequeno, mas não tão simples.
                            Você deve escrever uma frase que resuma toda a história do seu livro.
                            Recomendamos fazer uma frase com menos de 15 palavras que aborda as principais questões da estória sem citar nomes de personagens.
                        </Text>
                        <Text style={styles.modalText2}>
                            O resultado deve ficar mais ou menos assim:
                        </Text>
                        <Text style={styles.modalText3}>
                            “Um cientista excêntrico viaja no tempo para matar Hitler.”
                        </Text>
                        <Text>
                            Como você pode observar, descrevemos o protagonista em vez de citar seu nome.
                            Mencionar Hitler não tem problema, pois ele é uma figura histórica.
                            Não se preocupe em alcançar a perfeição. O objetivo de cada etapa é justamente desenvolver e aperfeiçoar o seu enredo aos poucos.
                        </Text>
                        <Text style={styles.modalText4}>
                            Aqui há outros exemplos para se inspirar:
                        </Text>
                        <Text style={styles.modalText5}>
                            “Garoto órfão descobre que é um bruxo famoso e é levado para uma escola de magia” (Harry Potter e a Pedra filosofal)
                        </Text>
                        <Text style={styles.modalText6}>
                            “Estudante adolescente descobre que o garoto que ela está interessada é um vampiro” (Crepúsculo)</Text>
                       
                    </View>
                </View>
            </Modal>


            <Icon name="information-outline" style={styles.iconinfo}
                onPress={() => setModalVisible(true)} />



        </View>
         </View>
        </View>

      <div style={{ maxWidth: "300px", margin: "0 auto", }}>
        <CKEditor
          editor={ClassicEditor}
          onChange={(e, editor) => { handleChange(e, editor) }} />
        <View style={styles.containersalvarper}>
          <Button style={styles.buttonper} mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
            Salvar
          </Button>
        </View>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <LinearGradient
            // Background Linear Gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[
              "rgba(190,228,228,1)",
              "rgba(190,228,228,1)",
              "rgba(242,204,201,1)",
              "rgba(242,204,201,1)",
              "rgba(235,222,240,1)",
              "rgba(235,222,240,1)",
              "rgba(239,196,167,1)",
              "rgba(239,196,167,1)",
              "rgba(239,196,167,1)",
              "rgba(190,228,228,1)",
              "rgba(190,228,228,1)",
              "rgba(242,204,201,1)",
              "rgba(242,204,201,1)",
              "rgba(235,222,240,1)",
              "rgba(235,222,240,1)",
              "rgba(239,196,167,1)",
              "rgba(239,196,167,1)",
              "rgba(190,228,228,1)",
              "rgba(190,228,228,1)",
              "rgba(242,204,201,1)",
              "rgba(242,204,201,1)",
            ]}
            locations={[
              0, 0.1, 0.1, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.5, 0.5, 0.6, 0.6,
              0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1, 1,
            ]}
            style={styles.linhafinal}
          />
        </div>
      </div>

    </SafeAreaProvider>
  );
}
