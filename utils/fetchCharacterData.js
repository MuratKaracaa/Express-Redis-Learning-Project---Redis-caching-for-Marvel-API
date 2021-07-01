import axios from 'axios'
import * as $ from './apiAuth.js'

async function fetchCharacterData() {
    // i<=1480
    const results = []
    const promises = []
    for (let i = 0; i <= 0; i += 20) {
        let response = await axios.get(
            `${$.baseAPIurl + 'characters' + $.urlSuffix}&offset=${i}&limit=5`
        )
        promises.push(response)
    }

    const resolvedPromises = await Promise.all(promises)

    resolvedPromises.map((page) => {
        page.data.data.results.map((result) => {
            results.push(result)
        })
    })
    return results
}

const characterData = await fetchCharacterData()

export default characterData
