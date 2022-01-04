import React from 'react';
import { FillPercent, Size } from '@src/consts';
import {
    AppState,
    clear,
    defaultAppState,
    fieldSize,
    fillPercent,
    invert,
    user,
} from '@src/store/ducks/game';
import appReducer from '@src/store/ducks/game';

import { MyStorage } from '@src/MyStorage';
import { AppRouter } from '@src/components/AppRouter';
import { Store } from 'redux';
export interface AppStateManagerProps {
    storage: MyStorage;
    store: Store;
}

export class AppStateManager extends React.Component<AppStateManagerProps, AppState> {
    state: AppState;

    constructor(props: AppStateManagerProps) {
        super(props);
        this.state = defaultAppState;
        this.invert = this.invert.bind(this);
        // console.error('store.getState()=', this.props.store.getState());
    }

    private setSmall = () => this.setState(appReducer(this.state, fieldSize(Size.SMALL)));
    private setMedium = () => this.setState(appReducer(this.state, fieldSize(Size.MIDDLE)));
    private setLarge = () => this.setState(appReducer(this.state, fieldSize(Size.LARGE)));
    private invert(num: number) {
        this.setState(appReducer(this.state, invert(num)));
    }
    private clear = () => {
        this.setState(appReducer(this.state, clear()));
    };
    private fill25 = () => {
        this.setState(appReducer(this.state, fillPercent(FillPercent.P25)));
    };
    private fill50 = () => {
        this.setState(appReducer(this.state, fillPercent(FillPercent.P50)));
    };
    private fill75 = () => {
        this.setState(appReducer(this.state, fillPercent(FillPercent.P75)));
    };
    private fill100 = () => {
        this.setState(appReducer(this.state, fillPercent(FillPercent.P100)));
    };
    private onChangeName = (name: string) => {
        this.setState(appReducer(this.state, user(name)));
        this.props.storage.setName(name);
    };
    private onLogout = () => {
        this.setState(appReducer(this.state, user('')));
        this.props.storage.clearName();
    };

    componentDidMount() {
        if (this.props.storage.getName() !== null) {
            this.onChangeName(this.props.storage.getName() as string);
        }
    }

    render() {
        return (
            <AppRouter
                appState={this.state}
                invert={this.invert}
                setSmall={this.setSmall}
                setMedium={this.setMedium}
                setLarge={this.setLarge}
                clear={this.clear}
                fill25={this.fill25}
                fill50={this.fill50}
                fill75={this.fill75}
                fill100={this.fill100}
                onChangeName={this.onChangeName}
                onLogout={this.onLogout}
            />
        );
    }
}
