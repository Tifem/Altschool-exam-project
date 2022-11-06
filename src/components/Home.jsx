import {Helmet} from 'react-helmet-async';
function Home() {
  return (
    <>
      <Helmet>
      <title>AlSchool Exam Project | Home</title>
        <meta
          name="description"
          content="This pages is my home page"
        />
        <link rel="canonical" href="/" />
      </Helmet>
    <div className="container">
      <h1 className="home-name">Welcome to my Github Repository!</h1>
    </div>
    </>
    
  );
}

export default Home;
