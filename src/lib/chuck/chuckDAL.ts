/* eslint-disable no-async-promise-executor */
import axios from "axios";

import {
    ChuckNorrisFact
} from '../types/chuckNorris';

type ChuckDAL = {
    getRandomFoodFacts: (endpoints: string[]) => Promise < ChuckNorrisFact[] >
}

const chuckDAL: ChuckDAL = {
    /**
     * Get Facts
     */
    getRandomFoodFacts: (endpoints) => new Promise(async (resolve, reject) => {
        try {
            const res = await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)));
            const data = res.map((res) => res.data.value).flat();
            resolve(data);
        } catch (err) {
            reject(err);
        }
    })
};

export default chuckDAL