import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

function ChampionInfo() {

    const params = useParams()

    const DDRAGON_URL_CHAMP = process.env.REACT_APP_DDRAGON_URL_CHAMP

    useEffect(() =>{
    }, [])

    //todo need to create global context state to store champion list in


    return (
        <div>
            Champion Info: {params.name}
            <div>
                <img src={`${DDRAGON_URL_CHAMP}/loading/${params.name.replace(/'/g, '%27')}_0.jpg`} alt="" className="" />
                <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/champion/${params.name}.png`} alt="" className="" />
                <img src={`http://ddragon.leagueoflegends.com/cdn/12.1.1/img/passive/${params.name}_P.png`} alt="" className="" />
            </div>
        </div>
    )
}

ChampionInfo.propTypes = {

}

export default ChampionInfo

