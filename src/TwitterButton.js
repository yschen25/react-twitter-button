import {useState} from 'react';
import PropTypes from 'prop-types';
import {
    btnBaseStyle, IconStyle,
    TextIconStyle,
    TextIconLineStyle,
    TextIconCircleStyle,
    BirdCuteIconStyle,
    WeirdBirdIconStyle,
    BirdFurryIconStyle,
    BirdCircleIconStyle,
    BirdCircleIconStyle2,
    BirdSquareIconStyle,
    BirdCasualIconStyle,
    btnBaseHoverStyle,
    disabledStyle
} from './style';

export const TwitterButton = (props) => {

    if (Object.keys(props.config).length === 0)
    {
        alert('Please enter config!');
        return false;
    }

    let config = {...TwitterButton.defaultProps.config, ...props.config};

    const [hover, setHoverState] = useState(false);

    const modifyStyle = (propStyles) => {

        let hoverStyle;
        if (config.hoverStyle !== '') {
            hoverStyle = {...btnBaseHoverStyle, ...config.hoverStyle}
        }

        if (hover) {
            return {...btnBaseStyle, ...propStyles, ...hoverStyle}
        }

        if (config.disabled) {
            return {...btnBaseStyle, ...propStyles, ...disabledStyle}
        }

        return {...btnBaseStyle, ...propStyles}
    };

    const modifyIconStyle = () => {

        switch (config.iconType) {
            case 'text':
                return TextIconStyle;
            case 'text-line':
                return TextIconLineStyle;
            case 'text-circle':
                return TextIconCircleStyle;
            case 'bird-cute':
                return BirdCuteIconStyle;
            case 'bird-weird':
                return WeirdBirdIconStyle;
            case 'bird-furry':
                return BirdFurryIconStyle;
            case 'bird-circle':
                return BirdCircleIconStyle;
            case 'bird-circle2':
                return BirdCircleIconStyle2;
            case 'bird-square':
                return BirdSquareIconStyle;
            case 'bird-casual':
                return BirdCasualIconStyle;
            default:
                return IconStyle;
        }
    };

    const mouseOver = () => {
        if (!config.disabled) {
            setHoverState(true)
        }
    };

    const mouseOut = () => {
        if (!config.disabled) {
            setHoverState(false)
        }
    };

    const click = () => {
        if (!config.disabled) {
            config.onClick();
        }
    };

    let text = config.text;
    let style = config.style;

    return (
        <div data-testid="btn"
             style={modifyStyle(style)}
             onMouseOver={mouseOver}
             onMouseOut={mouseOut}
             onClick={click}>{text}
            <div style={modifyIconStyle()}></div>
        </div>
    )
}

TwitterButton.propTypes = {
    iconType: PropTypes.oneOf([
        'icon', 'text', 'text-line', 'text-circle',
        'bird-cute', 'bird-weird', 'bird-furry',
        'bird-circle', 'bird-circle2',
        'bird-square', 'bird-casual']),
    text: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

TwitterButton.defaultProps = {
    config: {
        iconType: 'icon',
        text: 'Login With Twitter',
        disabled: false,
        onClick: () => {
            alert('Clicked !')
        }
    }
};

export default TwitterButton;