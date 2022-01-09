

const DDRAGON_URL = process.env.REACT_APP_DDRAGON_URL
const API_KEY = process.env.REACT_APP_RIOT_API_KEY



export const getChampions = async() =>{

    const response = await fetch(`${DDRAGON_URL}/champion.json`)

    const {data} = await response.json()
    const dataObj = Object.values(data).sort((a,b) => a.name.localeCompare(b.name))

    console.log(dataObj)

    return dataObj

    // setChampions(dataObj);

}
