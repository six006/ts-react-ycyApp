import { baseNativeSceneComponent } from 'ts-react-app-native';

export abstract class baseUserScene<P, S> extends baseNativeSceneComponent<P, S> {
    constructor() {
        super();
        this._navigatorType = eNativeCommon.navigatorType.user;
    }
}