import axios from 'axios'

const host = 'http://localhost:8080'
const fns = {
  async TimuList() {
    const page = 2
    let httUrl = `${host}/api/rtimu?page=${page}`
    const res = await axios.get(httUrl)
    return res.data
  }
}

export default fns