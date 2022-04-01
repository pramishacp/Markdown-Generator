import config from '../../startup/config';
import ChuckDAL from './chuckDAL';
import {
    ChuckNorrisFact,
    ChuckNorrisCategory
} from "../types/chuckNorris";

const baseURL: string = config.chuck.uri;

type ChuckService = {
    getRandomFoodFacts: (words: string[]) => Promise < ChuckNorrisFact[] >
}

const chuckService: ChuckService = {
    /**
     * Get Facts
     */
    getRandomFoodFacts: (words) => {
        const category: ChuckNorrisCategory = "food"

        const endpoints = words.map(word => `${baseURL}/jokes/random?category=${category}&query=${word}`);

        return ChuckDAL.getRandomFoodFacts(endpoints);
    },
};

export default chuckService;