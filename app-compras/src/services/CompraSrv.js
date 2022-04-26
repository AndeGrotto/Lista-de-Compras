import axios from "./axios-common";
class CompraSrv {
    url = "/compras";
    async listar() {
        return await axios.get(this.url).catch(err => { throw err; });
    }
    async incluir(data) {
        return await axios.post(this.url, data).catch(err => { throw err; });
    }
}
export default new CompraSrv();