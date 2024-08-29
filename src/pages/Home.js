const Home = () => {
    return (
      <>
      <div class="flex flex-col justify-center ">

        <h1 className="text-5xl font-bold text-center text-black">Home</h1>
        <hr className="w-24 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700" />
        <img src="/ImmagineProgetto.png" className="w-[25%] pl-5 ml-auto mr-auto"/>
        <p className="text-center text-black text-xl pr-5">Benvenuti nel progetto finale del corso Front-End. <br/>
            Clicca su Registrati per poter accedere alle funzionalità del sito <br/>
            Se sei gia Registrato ti basterà cliccare su Login. <br/>
            Infine vai su Form per compilare le tue Attività. </p>
            
        
        
      </div>
        
      </>
    );
  };
  
  export default Home;