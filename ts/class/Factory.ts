import { setNativeFactory } from 'ts-react-app-native';
import { App } from './App';
import { Storage } from './Storage';
import { Redux } from './Redux';
import { Request } from './Request';
import { Prompt } from './Prompt';
import { Navigation } from './Navigation';
import { ErrorHandler } from './Error';
import { AsyncOperation } from './AsyncOperation';
import { Device } from './Device';
import { User } from './User';

class _Factory {
    readonly App = App.instance;

    readonly Storage = Storage.instance;

    readonly Redux = Redux.instance;

    readonly Request = Request.instance;

    readonly Prompt = Prompt.instance;

    readonly Navigation = Navigation.instance;

    readonly ErrorHandler = ErrorHandler.instance;

    readonly AsyncOperation = AsyncOperation.instance;

    readonly Device = Device.instance;

    readonly User = User.instance;
}

export const Factory = new _Factory();
setNativeFactory(Factory);