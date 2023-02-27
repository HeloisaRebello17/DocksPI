import { StyleSheet } from "react-native";
import { shouldUseActivityState } from "react-native-screens";


export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 26,
    flex: 1,
    backgroundColor: "#FFF2D8",
    justifyContent: "center",
    fontFamily: "Open Sans",

  },
  cad: {
    backgroundColor: "white",
    paddingRight: '40px',
    paddingLeft: '40px',
    paddingTop: '40px',
    paddingBottom: '100px',
    borderRadius: '35px',
  },
  imagedocks: {
    width: '80px',
    height: '80px',
    margin: "auto",
  },
  paragraphbv: {
    fontWeight: "bold",
    margin: "auto",
    fontSize: '23px',

  },
  paragraphbv1: {
    fontWeight: "bold",
    margin: "auto",
    marginTop: '0px',
    fontSize: '23px',
  },
  textbv: {
    margin: "auto",
  },
  textbv1: {
    margin: "auto",
    marginTop: '0px',
  },
  buttoncontinuar: {
    backgroundColor: "#F6EB60",
    borderRadius: "10px",
    width: "140px",
    margin: "auto",
  },

  esqueceuSenha: {
    // alignItems: "flex-end",
    alignSelf: "stretch",
    marginBottom: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  input: {
    alignSelf: "stretch",
    backgroundColor: "white",
    border: '5px solid',
    borderColor: "#EDEDED",
    underline: "none",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    height: "40px",
  },
  buttoncadface: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    border: '5px solid #EDEDED',
    height: "60px",
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",


  },
  textcadface: {
    color: "black",
    fontFamily: "Open Sans",
    margin: "auto",
    fontSize: "15px",

  },
 
  buttoncadgoogle: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    border: '5px solid #EDEDED',
    height: "60px",
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  imageface: {
    width: "30px",
    height: "30px",
    marginLeft: "0px",
    marginBottom: "1px",
  },
  imagegoogle: {
    width: "40px",
    height: "40px",
    marginLeft: "0px",
    marginBottom: "1px",
  },
  label: {
    color: "black",
  },
  logindocks:{
     margin:"auto",
  },

  link: {
    fontWeight: "bold",
    color: "black",
  },
});