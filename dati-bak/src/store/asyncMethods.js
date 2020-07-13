const host = 'http://localhost:8080'
const fns = {
  async TuList() {
    const page = 2
    let httUrl = `${host}/api/rtimu?page=${page}`
    const res = await axios.get(httUrl)
    console.log(res.data)
  }
}

export default fns