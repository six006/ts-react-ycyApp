import * as React from 'react';
import { StyleSheet } from 'react-native';
import { baseNativeSceneComponent } from '../base';
import {
    View,
} from '../common';
import {
    CommonPageTitleBar,
    GoodsListView
} from '../part/common';
import { Factory as f } from '../../class/Factory';

type props = tCommon.reactProps;
type state = {
    list?: tScene.goodsList
}

export default class GoodsSales extends baseNativeSceneComponent<props, state> {
    private goodsListPageSize = f.App.AppConfig.listViewPageSize;
    private nowGoodsListRowCount = f.App.AppConfig.listViewPageSize;
    private isGoodsListViewMounted = false;
    private isUpdateGoodsListView = true;
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getGoodsListAsyncOperation();
    }
    render() {
        const {list} = this.state;

        return (
            <View style={styles.container}>
                <CommonPageTitleBar titie='促    销' />
                <GoodsListView list={list} onRefresh={this.onRefresh} onEndReached={this.onEndReached} />
            </View >
        )
    }
    private onEndReached = () => {
        if (!this.isGoodsListViewMounted) return;

        const nowCount = this.nowGoodsListRowCount;
        this.nowGoodsListRowCount += this.goodsListPageSize;

        return this.getGoodsList().then(
            () => {
                if (!this.isUpdateGoodsListView && nowCount == this.nowGoodsListRowCount) {
                    /*f.Prompt.promptToast('没有更多商品了！');*/
                }
                this.isUpdateGoodsListView = false;
            }
        );
    }

    private onRefresh = () => {
        this.nowGoodsListRowCount = this.goodsListPageSize;
        return this.getGoodsList()
    }
    private getGoodsListAsyncOperation = () => {
        return f.AsyncOperation.run(
            this.getGoodsList
        )
    }
    private getGoodsList = () => f.Request.getGoodsList({ is_sales: 1, psize: this.nowGoodsListRowCount }).then(
        (data: tScene.goodsList) => {
            this.setState({
                list: data
            });
            this.nowGoodsListRowCount = data.length;
            this.isGoodsListViewMounted = true;
        }
    )
}


const styles = StyleSheet.create<{
    container: React.ViewStyle,
}>({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
});