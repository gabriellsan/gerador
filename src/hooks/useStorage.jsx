import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    //buscar os itens salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log('====================================');
            console.log("Erro ao buscar", error);
            console.log('====================================');
            return [];
        }
    }

    //salvar um item no storage
    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key)
            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))

        } catch (error) {
            console.log('====================================');
            console.log("Erro ao Salvar", error);
            console.log('====================================');
            return [];
        }
    }
    
    //Remover algo do storage
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password) => {
                return (password !== item);
            });


            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
        } catch (error) {
            console.log('====================================');
            console.log("Erro ao Deletar", error);
            console.log('====================================');
            return [];
        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;