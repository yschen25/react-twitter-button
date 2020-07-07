import React from 'react';
import TwitterButton from '../src/index';
import {storiesOf} from '@storybook/react';

storiesOf("Twitter Button", module)
    .add('Different Types of Button', () => (
        <div>
            <TwitterButton/>
            <TwitterButton config={{iconType: "text"}}/>
            <TwitterButton config={{iconType: "text-line"}}/>
            <TwitterButton config={{iconType: "text-circle"}}/>
            <TwitterButton config={{iconType: "bird-cute"}}/>
            <TwitterButton config={{iconType: "bird-weird"}}/>
            <TwitterButton config={{iconType: "bird-furry"}}/>
            <TwitterButton config={{iconType: "bird-circle"}}/>
            <TwitterButton config={{iconType: "bird-circle2"}}/>
            <TwitterButton config={{iconType: "bird-square"}}/>
            <TwitterButton config={{iconType: "bird-casual"}}/>
        </div>
    ))
    .add('Custom Text', () => (
        <div>
            <TwitterButton config={{text: "Share With Twitter"}}/>
        </div>
    ))
    .add('Custom Style', () => {

        const config = {
            iconType: 'bird-cute',
            text: 'As Above, So Below',
            style: {
                background: 'rgb(193, 19, 19)',
                boxShadow: 'none'
            },
            hoverStyle: {
                background: '#000',
                right: '0',
                bottom: '0'
            }
        };

        return <TwitterButton config={config}/>
    });