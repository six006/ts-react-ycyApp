import { ANativeStorage } from 'ts-react-app-native';

export class Storage extends ANativeStorage {
    static readonly instance: Storage = new Storage();
    private constructor() {
        super();
    }
}
