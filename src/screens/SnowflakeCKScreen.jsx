import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from "../config/styles";
import { Appbar, Button, Modal, Paragraph, TextInput } from "react-native-paper";
import { Pressable, View } from "react-native";
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

      </View>
      <View style={styles.containernomeper}>
        <Paragraph style={styles.paragraphper}>1.Resuma seu livro em uma frase: <Icon name="information-outline" style={styles.iconinfo} />
         </Paragraph>
      </View>
      <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}></Modal>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
          <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
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
