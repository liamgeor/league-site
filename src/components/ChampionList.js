import { render } from '@testing-library/react';
import PropTypes from 'prop-types'
import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import ChampionsContext from '../context/champions/ChampionsContext'
import {getChampions} from '../context/champions/ChampionsActions'

function ChampionList(props) {

    const {champions, dispatch, loading} = useContext(ChampionsContext)

    const [renderChamps, setRenderChamps] = useState(false);

    useEffect(() =>{   
        const getChampData = async() =>{
            await getChampions();
        }

        const champData = getChampData();
        dispatch({type: 'GET_CHAMPIONS', payload: champData})
    }, [])

    useEffect(() =>{
        console.log(champions)
    }, [champions])


    

    


    return (
        <div>
          {champions[0] && champions.map((champion, id) =>{
              return (
                  <div key={id}>
                      <Link  to={`/champion/${champion.id}`}>{champion.name}</Link>
                  </div>
                
              )
          })}
        </div>
    )
}

ChampionList.propTypes = {

}

export default ChampionList

