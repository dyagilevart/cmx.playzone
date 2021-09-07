import qs from 'qs';
import { AxiosInstance } from 'axios';
import axiosInstance from './axiosInstance';

export default abstract class AbstractCrud<T> {
  protected url: string;

  public name: string;

  public instance: AxiosInstance;

  protected constructor(url: string) {
    this.url = url;
    this.name = url;
    this.instance = axiosInstance;
  }

  public async get(id?: string, params?: Record<string, unknown>): Promise<T> {
    let url = this.url;
    if (id) {
      url += `/${id}`;
    }

    if (params) {
      url += `?${qs.stringify(params)}`;
    }

    return this.instance.get(url).then(response => {
      return response?.data;
    });
  }

  public async delete(id: string): Promise<T> {
    const url = this.url;

    return this.instance.delete(url).then(response => {
      return response?.data;
    });
  }

  public async getAll(params?: T | Record<string, unknown>): Promise<Array<T>> {
    let url = this.url;

    if (params) {
      url += `?${qs.stringify(params)}`;
    }

    return this.instance.get(url).then(response => {
      return response?.data;
    });
  }

  public async put(obj?: T): Promise<T> {
    const url = this.url;

    return this.instance.put(url, obj).then(response => {
      return response?.data;
    });
  }

  public async post(obj?: T | Record<string, unknown>): Promise<T> {
    const url = this.url;

    return this.instance.post(url, obj).then(response => {
      return response?.data;
    });
  }

}
