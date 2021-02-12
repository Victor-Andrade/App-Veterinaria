import React from "react";
import {
    FlatList,
    Image,
    TouchableOpacity,
    Text,
    View  } from "react-native";
import {listarDoencas} from "../../Controllers/controladorDoenças";
import { useNavigation } from '@react-navigation/native';
import BarraDeBusca from '../../Components/Visuais/barraDeBusca';
import styles from "./styles";

export default function Glossario({route}, ...props){
    const [encontradas, setEncontradas] = React.useState(null);
    const [textoBarra, setTextoBarra] = React.useState('');
    const [doencas, setDoencas] = React.useState([]);
    const [carregado, setCarregando] = React.useState(true);
    const navigation = useNavigation();

    /**
     * Métodos do ciclo de vida da tela
     */
    //Inicializa as doenças
    React.useEffect(()=>{
        listarDoencas()
            .then(itens => {
                setDoencas(itens);
            }
        )
    }, []);

    React.useEffect(()=>{
        try{
            if(route.params.busca !== undefined){
                setTextoBarra(route.params.busca);
            }
        }catch(e){
            console.log(e);
        }
        
    }, [route.params]);

    //É responsável por atualizar as doenças com base na pesquisa dada pela barra de busca
    function autoComplete(busca){
        if(busca !== undefined){
            let pesquisa = busca.toLowerCase()
            if(busca.trim() !== ""){
                const resultado = doencas.filter(obj => {
                    return obj.scientificName.toLowerCase().match(new RegExp(`${pesquisa}`)) || (obj.name.toLowerCase().match(new RegExp(`${pesquisa}`)));
                })
                setEncontradas(resultado)
            }else{
                setEncontradas(null)
            }
        }
    }
 
    React.useEffect(()=>{
        autoComplete(textoBarra)
    },[textoBarra])

    /*Se for dado uma busca prévia pelo usuário, as doencas encontradas são atualizadas
      com base na busca, se não, é listado todas as doenças.*/
    React.useEffect(()=>{
        autoComplete(textoBarra)
    }, [doencas]);

    //RenderItem da flatList
    function itemListModel(props){
        return(
            <TouchableOpacity
                style={styles.listitem}
                onPress={() => {navigation.navigate("Informações", props)}}>
                <Image
                    style={styles.imagem}
                    source={require('../../../assets/favicon.png')} />
                <View style={styles.listitemContainerDescricao}>
                    <Text style={styles.txtTitulo}>{props.scientificName}</Text>
                    <Text style={styles.txtDescricao}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <BarraDeBusca
                onChangeText={(a)=> setTextoBarra(a)}
                value={textoBarra}
                style={{position: "relative"}}/>
            <FlatList contentContainerStyle={styles.flatList}
                data={encontradas !== null ? encontradas : doencas}
                keyExtractor={item => item._id}
                renderItem={({item}) => itemListModel(item)}/>
        </View>
    )
}
