import { Stack } from '@mui/material';
import Background from './Components/Background/Background.component';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper.component';
import ImageCard from './Components/ImageCard/ImageCard.component';
import SideBar from './Components/SideBar/SideBar.component';
import { usePortfolioContext } from './Context/portfolio.context';
import About from './Pages/About/About.page';
import Contact from './Pages/Contact/Contact.page';
import Intro from './Pages/Intro/Intro.page';
import Projects from './Pages/Projects/Projects.page';
import Skills from './Pages/Skills/Skills.page';

const App = () => {
  const { page } = usePortfolioContext();

  const renderPage = () => {
    switch (page) {
      case 'intro': {
        return <Intro />;
      }
      case 'about': {
        return <About />;
      }
      case 'skills': {
        return <Skills />;
      }
      case 'projects': {
        return <Projects />;
      }
      case 'contact': {
        return <Contact />;
      }
    }
    return <></>;
  };

  return (
    <>
      <Background />
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        direction={'row'}
        maxWidth={'100rem'}
        margin={'0 auto'}
        bgcolor={'transparent'}>
        <SideBar />
        <main className='main-section'>
          <ImageCard />
          <ContentWrapper>{renderPage()}</ContentWrapper>
        </main>
      </Stack>
    </>
  );
};

export default App;
