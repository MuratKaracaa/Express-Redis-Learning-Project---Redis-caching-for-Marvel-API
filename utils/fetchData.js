import axios from 'axios'
import dotenv from 'dotenv'
import crypto from 'crypto-js'
import categories from '../lists/categories.js'

dotenv.config()

const public_key = process.env.public_key
const private_key = process.env.private_key
const date = Date.now()
const hashed = crypto.MD5(`${date + private_key + public_key}`).toString()

const baseAPIurl = 'http://gateway.marvel.com/v1/public/'
const urlSuffix = `?ts=${date}&apikey=${public_key}&hash=${hashed}`

async function fetchData() {
    // i<=1480
    const results = []
    for await (const category of categories) {
        results[category] = []
        const promises = []
        for (let i = 0; i <= 0; i += 20) {
            let response = await axios.get(
                `${baseAPIurl + category + urlSuffix}&offset=${i}&limit=5`
            )
            promises.push(response)
        }

        const resolvedPromises = await Promise.all(promises)

        resolvedPromises.map((page) => {
            page.data.data.results.map((result) => {
                results[category].push(result)
            })
        })
    }
    return results
}

export default fetchData
