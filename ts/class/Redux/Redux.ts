import { ANativeRedux } from 'ts-react-app-native';
import rootReducer from './reducers';
import * as action from './actions';
export class Redux extends ANativeRedux<tApp.state, typeof action> {
    static readonly instance: Redux = new Redux();
    private constructor() {
        super(rootReducer)
    }
    action = action
}