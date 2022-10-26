import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'orange',
    borderRadius: 4,
    marginHorizontal: 5,
  },
  inner_container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  Ctitle: {
    fontWeight: 'bold',
    fontSize: 27,
    textDecorationLine: 'line-through',
  },
  managerButton:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  },
  button: {
    borderRadius: 6,
    justifyContent: 'center'
  },
});
