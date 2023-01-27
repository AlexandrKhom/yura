import {axiosService} from "./axios.service";
import {urls} from "../constants";

const questService = {
    getAll: () => axiosService.get(urls.quests),
    create: (quest: any) => axiosService.post(urls.quests, quest),
    getById: (id: any) => axiosService.get(`${urls.quests}/${id}`),
    deleteById: (id: any) => axiosService.delete(`${urls.quests}/${id}`),
    updateById: (id: any, quest: any) => axiosService.put(`${urls.quests}/${id}`, quest),
}

export {
    questService
}