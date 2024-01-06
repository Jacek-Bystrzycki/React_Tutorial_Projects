import BasicTitle, { SecondTitle } from './components/BasicTitle';
import { DefaultButton, HipsterButton, HipsterButtons } from './components/Buttons';
import ComplexTitle from './components/ComplexTitle';
import RandomTitle from './components/RandomTitle';
import WrapperExtendedTitle from './components/ExtendedTitle';
import UtilsTitle from './components/UtilsTitle';
import { ThemeProvider } from 'styled-components';
import { BaseTheme, DarkTheme } from './Themes';
import { useState } from 'react';
import Loading from './components/Loading';
import Form from './components/Form';

function App() {
  const [darkThemeActive, setDarkThemeActive] = useState<boolean>(false);

  const changeTheme = (): void => {
    setDarkThemeActive((prev) => !prev);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <ThemeProvider theme={darkThemeActive ? DarkTheme : BaseTheme}>
        <ComplexTitle title="more complex title" />
        <Loading />
        <RandomTitle title="random title" />
        <WrapperExtendedTitle title="extended title" />
        <UtilsTitle title="utils title" />
        <BasicTitle>styled components</BasicTitle>
        <BasicTitle special>styled components</BasicTitle>
        <SecondTitle special>styled components</SecondTitle>
        <SecondTitle special>component with theme</SecondTitle>
        <SecondTitle>styled components</SecondTitle>
        <DefaultButton>click me</DefaultButton>
        <HipsterButton onClick={changeTheme}>toggle theme</HipsterButton>
        <HipsterButtons />
        <Form />
      </ThemeProvider>
    </div>
  );
}

export default App;
