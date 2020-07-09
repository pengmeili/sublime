const fns = {
  async TuList() {
    const page = 2
    let httUrl = `http://localhost:8080/api/rtimu?page=${page}`
    const res = await axios.get(httUrl)
    console.log(res.data)
  }
}

export default fns