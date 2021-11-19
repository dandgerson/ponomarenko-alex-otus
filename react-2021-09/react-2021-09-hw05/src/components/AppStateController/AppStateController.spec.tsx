import React from 'react';
import { AppStateController } from './AppStateController';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { str } from '../../testFramework/lib/reducer';

describe('AppStateController', () => {
    it('It renders "Game of life proto"', () => {
        const { container, unmount } = render(<AppStateController></AppStateController>);
        const caption = screen.getByText('Game of life proto');
        expect(caption).toBeInTheDocument();
        unmount();
        expect(container.innerHTML).toBe('');
    });

    it('It renders field of size 10x10 on click at "small 10x10"', () => {
        const { unmount } = render(<AppStateController></AppStateController>);
        const btSmall = screen.getByText('small 10x10');
        userEvent.click(btSmall);
        const grid = screen.getByRole('grid');
        expect(grid.children.length).toBe(10 * 10);
        unmount();
    });

    it('It renders field of size 20x20 on click at "medium 20x20"', () => {
        const { unmount } = render(<AppStateController></AppStateController>);
        const btSmall = screen.getByText('medium 20x20');
        userEvent.click(btSmall);
        const grid = screen.getByRole('grid');
        expect(grid.children.length).toBe(20 * 20);
        unmount();
    });

    it('It renders field of size 30x30 on click at "large 30x30"', () => {
        const { unmount } = render(<AppStateController></AppStateController>);
        const btSmall = screen.getByText('large 30x30');
        userEvent.click(btSmall);
        const grid = screen.getByRole('grid');
        expect(grid.children.length).toBe(30 * 30);
        unmount();
    });

    it('It switch off a cell after click', () => {
        const getCellIsAlive = (cell: Element) => {
            const classes = [...cell.children[0].classList];
            const cellIsVisible = classes.filter((s) => s === 'show').length === 1;
            return cellIsVisible;
        };

        const { unmount } = render(<AppStateController></AppStateController>);
        const grid = screen.getByRole('grid');
        const firstCell = grid.children[0];
        userEvent.click(firstCell);
        const cellIsAlive = getCellIsAlive(firstCell);

        expect(cellIsAlive).toBe(false);
        unmount();
    });

    it('allows to click submit-button at LoginForm', () => {
        render(<AppStateController></AppStateController>);

        const rndName = str();
        const input = screen.getByLabelText('Введите имя:');
        userEvent.click(input);
        userEvent.type(input, rndName);
        userEvent.click(screen.getByText('submit'));
    });

    it('allows to click gameSpeed-slow-button', () => {
        render(<AppStateController></AppStateController>);

        const bt = screen.getByText('slow');
        userEvent.click(bt);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        cleanup();
    });
});
