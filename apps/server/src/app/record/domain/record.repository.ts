import { Record } from './record';

export interface RecordsRepository {
    findOne: (id: string) => Promise<Record>;
    saveOne: (record: Record) => Promise<void>;                                                                                          
}