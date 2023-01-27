const baseUrl = process.env.REACT_APP_API
console.log('baseUrl = ', baseUrl)

const urls = {
    quests: '/quests'
}

export default baseUrl;
export {
    urls
}