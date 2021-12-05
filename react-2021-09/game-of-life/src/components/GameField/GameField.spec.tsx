import React from 'react';
import { GameField } from './GameField';
import renderer from 'react-test-renderer';
import { AppActions } from '@src/components/AppStateManager/appReducer';
import { mount } from 'enzyme';
import { num } from '@src/testFramework/lib/reducer';
import { CellInfo } from '@src/components/AppStateManager/playField.types';

interface RenderResult {
    type: string;
    children: { type: string }[];
}

describe('GameField', () => {
    it('It renders 3 cells from data:[3 items]', () => {
        const data: CellInfo[] = [
            { id: '0', visible: false },
            { id: '1', visible: false },
            { id: '2', visible: false },
        ];
        const width = 3;
        const snapshot = renderer
            .create(
                <GameField
                    showAll={false}
                    data={data}
                    onCellClick={() => {}}
                    width={width}
                    actionId={AppActions.INVERT}
                ></GameField>
            )
            .toJSON() as RenderResult;
        expect(snapshot.type).toBe('section');
        expect(snapshot.children[0].type).toBe('article');
        expect(snapshot.children[1].type).toBe('article');
        expect(snapshot.children[2].type).toBe('article');
    });

    it('It calls onCellClick(<cell id>) callback when a cell is clicked', () => {
        const mockCallBack = jest.fn();
        const lastID = num();
        const data: CellInfo[] = [
            { id: '0', visible: false },
            { id: '1', visible: false },
            { id: String(lastID), visible: false },
        ];
        const width = data.length;

        const wrapper = mount(
            <GameField
                showAll={false}
                data={data}
                onCellClick={mockCallBack}
                width={width}
                actionId={AppActions.INVERT}
            ></GameField>
        );
        wrapper.find('article').last().simulate('click');
        expect(mockCallBack.mock.calls.length).toBe(1);
        expect(mockCallBack.mock.calls[0][0]).toBe(lastID);
    });
});
