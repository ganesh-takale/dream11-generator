import http from "../http-common";

class TeamService {
    getAll() {
        return http.get("/teams");
    }
    getUpcomingMatches() {
        return http.get("/matches/upcoming");
    }
    getplaying11(id){
        return http.get(`/playing11/${id}`);
    }

    get(id) {
        return http.get(`/players/${id}`);
    }

    create(data) {
        return http.post("/teams", data);
    }

    update(id, data) {
        return http.put(`/teams/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }

    deleteAll() {
        return http.delete(`/teams`);
    }

    findByTitle(title) {
        return http.get(`/teams?title=${title}`);
    }
}

export default new TeamService();