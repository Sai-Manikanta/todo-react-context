import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import ToggleThemeButton from './ToggleThemeButton';

class BookList extends Component {
  render() { 
    return ( 
      <ThemeContext.Consumer>
        {(themeContext) => (
          <AuthContext.Consumer>
            {(authContext => {
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              const { isLoggedIn } = authContext;

              return (
                <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                  <p>{ isLoggedIn ? 'LoggedIn' : 'Not LoggedIn' }</p>
                  <ul>
                    <li style={{ background: theme.ui }}>the way of kings</li>
                    <li style={{ background: theme.ui }}>the name of the wind</li>
                    <li style={{ background: theme.ui }}>the final empire</li>
                  </ul>
                  <ToggleThemeButton />
                </div>
              )
            })}
          </AuthContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
 
export default BookList;