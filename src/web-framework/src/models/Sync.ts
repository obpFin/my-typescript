import axios, { AxiosPromise } from 'axios';

interface hasId {
  id?: number;
}

export class Sync<T extends hasId> {
  constructor(public rooturl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rooturl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rooturl}/${id}`, data);
    } else {
      return axios.post(this.rooturl, data);
    }
  }
}
