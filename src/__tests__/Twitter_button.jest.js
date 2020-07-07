import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';

Enzyme.configure({adapter: new Adapter()});
import TwitterButton from '../index';
import {
    BirdCasualIconStyle,
    BirdCircleIconStyle, BirdCircleIconStyle2,
    BirdCuteIconStyle,
    BirdFurryIconStyle, BirdSquareIconStyle,
    TextIconCircleStyle,
    TextIconLineStyle,
    TextIconStyle,
    WeirdBirdIconStyle
} from "../style";

describe('<TwitterButton />', () => {

    test('Render without crash', () => {
        const {getByTestId} = render(<TwitterButton/>);
        expect(getByTestId('btn')).toBeInTheDocument();
    });

    test('Should not enter config with empty text', () => {
        window.alert = jest.fn();
        render(<TwitterButton config={{}}/>);
        expect(window.alert).toHaveBeenCalledTimes(1);
    });

    test('Should disabled button when disabled equal to true', () => {
        const mockModifyStyle = jest.fn();
        const {getByTestId} = render(<TwitterButton config={{disabled : true}}/>);

        mockModifyStyle();
        expect(getByTestId('btn').style.cursor).toEqual('not-allowed');
    });

    test('Listen to click events', () => {
        window.alert = jest.fn();
        const {getByTestId} = render(<TwitterButton/>);

        fireEvent.click(getByTestId('btn'));
        expect(window.alert).toHaveBeenCalledTimes(1);
    });

    test('Listen to mouse hover events', () => {
        window.onmouseover = jest.fn();
        const {getByTestId} = render(<TwitterButton/>);

        fireEvent.mouseOver(getByTestId('btn'));
        expect(window.onmouseover).toHaveBeenCalledTimes(1);
    });

    test('Listen to mouse out events', () => {
        window.onmouseout = jest.fn();
        const {getByTestId} = render(<TwitterButton/>);

        fireEvent.mouseOut(getByTestId('btn'));
        expect(window.onmouseout).toHaveBeenCalledTimes(1);
    });

    test('Change state after mouse hover', () => {
        window.onmouseover = jest.fn();
        const {getByTestId} = render(<TwitterButton/>);

        fireEvent.mouseOver(getByTestId('btn'));
        expect(getByTestId('btn').style.backgroundColor).toEqual('rgb(71, 202, 252)');
    });

    test('Change state after mouse out', () => {
        window.onmouseover = jest.fn();
        window.onmouseout = jest.fn();
        const {getByTestId} = render(<TwitterButton/>);

        fireEvent.mouseOver(getByTestId('btn'));
        expect(getByTestId('btn').style.backgroundColor).toEqual('rgb(71, 202, 252)');

        fireEvent.mouseOut(getByTestId('btn'));
        expect(getByTestId('btn').style.backgroundColor).toEqual('rgb(0, 172, 238)');
    });

    test('Receive TextIconStyle if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'text'}} />);
        mockModifyIconStyle.mockReturnValue(TextIconStyle);
        mockModifyIconStyle();
    });

    test('Receive TextIconLineStyle if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'text-line'}} />);
        mockModifyIconStyle.mockReturnValue(TextIconLineStyle);
        mockModifyIconStyle();
    });

    test('Receive TextIconCircleStyle if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'text-circle'}} />);
        mockModifyIconStyle.mockReturnValue(TextIconCircleStyle);
        mockModifyIconStyle();
    });

    test('Receive BirdCuteIconStyle if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'bird-cute'}} />);
        mockModifyIconStyle.mockReturnValue(BirdCuteIconStyle);
        mockModifyIconStyle();
    });

    test('Receive WeirdBirdIconStyle if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'bird-weird'}} />);
        mockModifyIconStyle.mockReturnValue(WeirdBirdIconStyle);
        mockModifyIconStyle();
    });

    test('Receive BirdFurryIconStyle if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'bird-furry'}} />);
        mockModifyIconStyle.mockReturnValue(BirdFurryIconStyle);
        mockModifyIconStyle();
    });

    test('Receive BirdCircleIconStyle if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'bird-circle'}} />);
        mockModifyIconStyle.mockReturnValue(BirdCircleIconStyle);
        mockModifyIconStyle();
    });

    test('Receive BirdCircleIconStyle2 if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'bird-circle2'}} />);
        mockModifyIconStyle.mockReturnValue(BirdCircleIconStyle2);
        mockModifyIconStyle();
    });

    test('Receive BirdSquareIconStyle if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'bird-square'}} />);
        mockModifyIconStyle.mockReturnValue(BirdSquareIconStyle);
        mockModifyIconStyle();
    });

    test('Receive BirdCasualIconStyle if iconType equal to text', () => {
        const mockModifyIconStyle = jest.fn();
        render(<TwitterButton config={{iconType : 'bird-casual'}} />);
        mockModifyIconStyle.mockReturnValue(BirdCasualIconStyle);
        mockModifyIconStyle();
    });
});

