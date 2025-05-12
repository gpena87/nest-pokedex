import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    console.log('executeSeed!!!!!');
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon/?limit=650');

    data.results.forEach(({ name, url}) => {
      const segments = url.split('/');
      const no = +segments[segments.length -2];
      console.log({ no, name });
    });

    // console.log(data);
    return data.results;
  }
}
