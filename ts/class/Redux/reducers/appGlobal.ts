import * as ac from '../actions';
import { objHp } from '../../../helper';

type art = tRedux.actionReturn;
type rht = tRedux.reducerHandler;


const appGlobalDefault: tApp.appGlobal = {
    locationInfo: {
        province_id: '',
        province_name: '',
        city_id: '',
        city_name: '',
        district_id: '',
        district_name: ''
    },
    clearLargePicture: {
        show: false,
        path: ''
    },
    spinnerShow: false,
    navBarShow: false,
    navBarSelectIndex: 0,
    cartGoodsTotal: 0,
    addGoodsInfo: {
        show: false,
        data: undefined
    }
}

const appGlobalHandler: {
    [k: string]: rht
} = {
        [ac.app_reset]: () => {
            return objHp.cloneDeep(appGlobalDefault)
        },
        [ac.app_recoverByLastUnLoadState]: (_state: tApp.appGlobal, newValue: ac.app_recoverByLastUnLoadState) => {
            return newValue.appGlobal;
        },


        [ac.app_exit]: (state: tApp.appGlobal, newValue: ac.app_exit) => {
            return objHp.assign({}, state, newValue);
        },
        [ac.app_init]: (state: tApp.appGlobal, newValue: ac.app_init) => {
            const v = {
                navBarShow: true,
                locationInfo: newValue.info,
                cartGoodsTotal: newValue.cartGoodsTotal
            }
            return objHp.assign({}, state, v);
        },
        [ac.app_location_change]: (state: tApp.appGlobal, newValue: ac.app_location_change) => {
            const v = {
                locationInfo: newValue.locationInfo
            }
            return objHp.assign({}, state, v);
        },
        [ac.app_spinner_show]: (state: tApp.appGlobal, newValue: ac.app_spinner_show) => {
            const v = {
                spinnerShow: newValue.show
            }
            return objHp.assign({}, state, v);
        },
        [ac.app_clearLargePicture_show]: (state: tApp.appGlobal, newValue: ac.app_clearLargePicture_show) => {
            const v = objHp.assign({}, state.clearLargePicture, newValue);
            return objHp.assign({}, state, { clearLargePicture: v });
        },
        [ac.app_navBar_selectChange]: (state: tApp.appGlobal, newValue: ac.app_navBar_selectChange) => {
            const v = {
                navBarSelectIndex: newValue.index
            }
            return objHp.assign({}, state, v);
        },
        [ac.user_login]: (state: tApp.appGlobal, newValue: ac.user_login) => {
            let v: any = {
                cartGoodsTotal: newValue.cartGoodsTotal
            };
            if (newValue.nowUser) {
                v.locationInfo = {
                    province_id: newValue.nowUser.province_id,
                    province_name: newValue.nowUser.province_name,
                    city_id: newValue.nowUser.city_id,
                    city_name: newValue.nowUser.city_name,
                    district_id: newValue.nowUser.district_id,
                    district_name: newValue.nowUser.district_name
                }
            };
            return objHp.assign({}, state, v);
        },
        [ac.user_logout]: (state: tApp.appGlobal) => {
            return objHp.assign({}, state, { cartGoodsTotal: 0 });
        },
        [ac.user_updateInfo]: (state: tApp.appGlobal, newValue: ac.user_updateInfo) => {
            if (!newValue) return state;
            return objHp.assign({}, state, {
                locationInfo: {
                    province_id: newValue.province_id,
                    province_name: newValue.province_name,
                    city_id: newValue.city_id,
                    city_name: newValue.city_name,
                    district_id: newValue.district_id,
                    district_name: newValue.district_name
                }
            });
        },
        [ac.goods_showInfo]: (state: tApp.appGlobal, newValue: ac.goods_showInfo) => {
            const v = {
                addGoodsInfo: objHp.assign({}, state.addGoodsInfo, newValue)
            }
            return objHp.assign({}, state, v);
        },
        [ac.goods_addToCart]: (state: tApp.appGlobal, newValue: ac.goods_addToCart) => {
            const v = {
                cartGoodsTotal: newValue.cartGoodsTotal
            }
            return objHp.assign({}, state, v);
        },
        [ac.goods_deleteFromCart]: (state: tApp.appGlobal, newValue: ac.goods_deleteFromCart) => {
            const v = {
                cartGoodsTotal: newValue.cartGoodsTotal
            }
            return objHp.assign({}, state, v);
        },
        [ac.cart_getList]: (state: tApp.appGlobal, newValue: ac.cart_getList) => {
            const v = {
                cartGoodsTotal: newValue.cartGoodsTotal
            }
            return objHp.assign({}, state, v);
        },
    };

export const appGlobal = (state = objHp.cloneDeep(appGlobalDefault), action: art) => {
    const _handler = appGlobalHandler[action.type];
    if (_handler) {
        return _handler(state, action.newValue);
    }

    return state;
}
