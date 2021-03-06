import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    flatListContentContainer:{
        justifyContent: "center"
    },
    listitem: {
        backgroundColor: "#fff",
        flexWrap: "wrap",
        flexDirection: "row",
        padding: 6,
        marginHorizontal: 0,
        marginVertical: 0

    },
    txtTitulo: {
        fontSize: 16,
        color: '#4f40b5',
        fontWeight: 'bold'
    },
    txtDescricao: {
        marginTop: 2,
        color: '#000'
    },
    containerLetra: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#4f40b5",
        flexWrap: "wrap",
        marginTop: 10,
        marginHorizontal: 16
    },
    letra: {
        alignSelf: "center", 
        color: "#fff", 
        fontSize: 18
    },
    listitemContainerDescricao: {
        flex: 1,
        flexGrow: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        marginVertical: 4,
        borderRadius: 6,
        paddingTop: 6,
        paddingBottom: 12,
        paddingEnd: 30,
        borderBottomWidth: 0.03,
        borderBottomColor: "#e4ddf3",
    }
})

export default styles;
