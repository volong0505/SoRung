import { Forest } from './forest';

export interface ForestRepository {
    findOne: (id: string) => Promise<Forest>;
    saveOne: (record: Forest) => Promise<void>;                                                                                          
}