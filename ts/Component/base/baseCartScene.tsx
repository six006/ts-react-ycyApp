import { baseNativeSceneComponent } from 'ts-react-app-native';

export abstract class baseCartScene<P, S> extends baseNativeSceneComponent<P, S> {
    constructor() {
        super();
        this._navigatorType = eNativeCommon.navigatorType.cart;
        this._sceneProps.push(eNativeCommon.sceneProps.user);
    }
}