import "./App.css";

function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <header class=" xl:bg-blue-500 md:bg-orange-400 sm:bg-green-600">
        <h1 class="text-orange-100 text-3xl text-center pt-5">Fiji Radio</h1>
      </header>
      <br></br>
      <div>
        <div class="test hover:bg-red-700 p-6 max-w-sm mx-auto bg-yellow-400 rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0"></div>
          <div>
            <div class="text-xl font-medium text-black">Radio Fiji 2</div>
            <audio controls>
              <source
                src="http://peridot.streamguys.com:7150/RFTwo"
                type="audio/mp3"
              />
            </audio>
            <p class="text-gray-500">Julum Lage</p>
          </div>
        </div>
        <br></br>
        <div class="test hover:bg-red-700 p-6 max-w-sm mx-auto bg-yellow-400 rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0"></div>
          <div>
            <div class="text-xl font-medium text-black">
              Radio navtarang fiji
            </div>
            <audio controls>
              <source
                src="https://stream.fijivillage.com/navtarang?ver=636650.mp3"
                type="audio/mp3"
              />
            </audio>
            <p class="text-gray-500">Julum Lage</p>
          </div>
        </div>
        <br></br>
        <div class="test hover:bg-red-700 p-6 max-w-sm mx-auto bg-yellow-400 rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0"></div>
          <div>
            <div class="text-xl font-medium text-black">Radio Sargam</div>
            <audio controls>
              <source
                src="https://stream.fijivillage.com/radiosargam"
                type="audio/mp3"
              />
            </audio>
            <p class="text-gray-500">Julum Lage</p>
          </div>
        </div>
        <br></br>
        <div class="hover:bg-red-700 p-6 max-w-sm mx-auto bg-yellow-400 rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0"></div>
          <div>
            <div class="text-xl font-medium text-black">Mirchi FM Fiji </div>
            <audio controls>
              <source
                src="http://peridot.streamguys.com:7150/Mirchi"
                type="audio/mp3"
              />
            </audio>
            <p class="text-gray-500">Julum Lage</p>
          </div>
        </div>
        <br></br>
        <div class="hover:bg-red-700 p-6 max-w-sm mx-auto bg-yellow-400 rounded-xl shadow-md flex items-center space-x-4">
          <div class="flex-shrink-0"></div>
          <div>
            <div class="text-xl font-medium text-black">Bula FM Fiji </div>
            <audio controls>
              <source
                src="http://peridot.streamguys.com:7150/Bula"
                type="audio/mp3"
              />
            </audio>
            <p class="text-gray-500">Julum Lage</p>
          </div>
        </div>
      </div>
      <br></br>
      <button
        onClick={refreshPage}
        class="hover:bg-red-500 text-white-700 font-semibold hover:text-green py-2 px-4 border border-blue-500 hover:border-transparent rounded bg-yellow-400"
      >
        Click to Reload
      </button>

      <body class="flex flex-col">
        <footer> Made By Chidoro Batkau V2.0 MixKarDo</footer>
      </body>
    </div>
  );
}

export default App;
