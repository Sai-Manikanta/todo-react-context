import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ToggleThemeButton extends Component {
    static contextType = ThemeContext;

    render() {
        const { toggleTheme } = this.context;

        return (
            <button onClick={toggleTheme}>Toggle Theme</button>
        );
    }
}

export default ToggleThemeButton;