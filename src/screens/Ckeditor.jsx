import React, {useState} from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from "../config/styles";
import { Appbar, Button, Paragraph, TextInput } from "react-native-paper";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";




export default function CKeditor(){
  const _goBack = () => console.log("Went back");
  const _handleMore = () => console.log("Shown more");
  const [data, setData]= useState('');
  const handleChange =(e, editor) =>{
   setData(editor.getData());
  }
  return (
   <SafeAreaProvider style={styles.containercriacaoper}>
     <Appbar.Header style={styles.navConfig}>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content titleStyle={{ textAlign: "center", fontWeight: "bold", fontSize:"20px" }} title="Criação de Personagem" />
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
        <Paragraph style={styles.paragraphper}>Nome do Personagem:<TextInput style={styles.inputper}></TextInput></Paragraph>
        </View>

      <div style={{maxWidth:"300px", margin: "0 auto",}}>
      <CKEditor 
      editor={ClassicEditor}
      onChange={(e, editor)=> {handleChange(e, editor)}}/>
      <View style={styles.containersalvarper}>
      <Button style={styles.buttonper}  mode="contained" onPress={()=> navigation.navigate("LoginScreen")}>
        Salvar
        </Button>
      </View>
      <div style={{display:"flex", justifyContent:"end"}}>
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
