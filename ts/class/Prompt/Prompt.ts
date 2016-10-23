import { ANativePrompt } from 'ts-react-app-native';

export class Prompt extends ANativePrompt {
    static readonly instance: Prompt = new Prompt();
    private constructor() {
        super();
    }
}
