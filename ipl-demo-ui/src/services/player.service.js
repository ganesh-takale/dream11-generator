import http from "../http-common";

class PlayerService {
    getAll(id) {
        return http.get(`/players/${id}`);
    }

    get(id) {
        return http.get(`/player/${id}`);
    }

    create(data) {
        return http.post("/players", data);
    }

    update(id, data) {
        return http.post(`/player/${id}`, data);
    }

    delete(id) {
        return http.delete(`/players/${id}`);
    }

    deleteAll() {
        return http.delete(`/players`);
    }

    findByTitle(title) {
        return http.get(`/players?title=${title}`);
    }
}

export default new PlayerService();