import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { DataProvider } from './context/DataContext';
import { IData } from './data';
import { data } from './data';
import Home from './components';
// import Navbar from './components/Navbar';
// import Movies from './components/Movies';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(_theme => ({
  errorContent: {
    'position': 'relative',
    'padding': '1rem',
    'margin': 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
  },
  errorHeading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
    fontSize: 24,
  },
  errorSubHeading: {
    color: '#fff',
    padding: 0,
    textTransform: 'uppercase',
    fontSize: 22,
    inlineSize: '400px',
    overflowWrap: 'break-word',
  },
  errorButton: {
    fontSize: 22,
  },
}));

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const classes = useStyles();
  return (
    <div role='alert' className={`${classes.errorContent}`}>
      <p className={classes.errorHeading}>Something went wrong:</p>
      <p className={classes.errorSubHeading}>{error.message}</p>
      <button onClick={resetErrorBoundary} className={classes.errorButton}>
        Try again
      </button>
    </div>
  );
}

function App() {
  const [appData, setAppData] = React.useState<IData.default | undefined>();
  React.useEffect(() => {
    data.then(setAppData);
  }, []);

  return (
    <React.Fragment>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <CssBaseline />
        {appData && (
          <DataProvider value={appData}>
            {/*<Navbar />*/}
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                {/*
              <Route exact path='/workexp' component={WorkExp} />
              <Route exact path='/opensource' component={OpenSourceProjects} />
              <Route exact path='/contact' component={Contact} />
            */}
              </Routes>
            </BrowserRouter>
          </DataProvider>
        )}
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
