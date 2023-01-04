import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav className="MainNav flex justify-around	items-center px-4">
          <a href="/" aria-label="HitGub homepage">
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              className="AppHeader-logo WhiteIcon"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <div className="SearchWrapper">
            <input type="text" placeholder="Search HitGub"></input>
            <button type="submit">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                className="WhiteIcon"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="ProfileControls">
            <button
              aria-label="New Repository, opens a dialog"
              className="ProfileControls-Item BtnAlt"
            >
              New
              <svg
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                className="WhiteIcon pl-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"
                ></path>
              </svg>
            </button>
            <a
              href="/notifications"
              aria-label="Notifications"
              className="ProfileControls-Item"
            >
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                className="WhiteIcon"
              >
                <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
                <path
                  fill-rule="evenodd"
                  d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
                ></path>
              </svg>
            </a>
            <a href="/profile" className="ProfileControls-Item">
              <img
                src="https://avatars.githubusercontent.com/u/35239154?v=4"
                alt="lindseywild avatar"
                className="Avatar"
              />
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto mt-8 px-4 max-w-screen-xl">
        <div className="flex justify-between pb-8 border-b-2">
          <h1 className="text-2xl font-bold">
            <a href="#">cool-repo</a>
          </h1>

          <div className="flex">
            <button className="Btn">Watch</button>
            <button className="Btn ml-2">Fork</button>
            <button className="Btn ml-2">Star</button>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <div className="grow mr-8">
            <div className="flex justify-between mb-8">
              <div>
                <button className="Btn">main</button>
                <a href="#" className="ml-2">
                  <strong>85</strong> Branches
                </a>
                <a href="#" className="ml-2">
                  <strong>141</strong> Tags
                </a>
              </div>

              <div>
                <button className="Btn">Go to file</button>
                <button className="Btn ml-2">Add file</button>
                <button className="Btn ml-2">Code</button>
              </div>
            </div>

            <ul>
              <li class="flex justify-between">
                <img
                  src="https://avatars.githubusercontent.com/u/35239154?v=4"
                  alt="avatar"
                  className="Avatar"
                />
                <p>
                  <a href="#">lindseywild</a> adds tailwind styling to files (
                  <a href="#">#235</a>)
                </p>
                <p>checkmark de7d1c3</p>
                <p>2 weeks ago</p>
                <p>
                  <a href="#">15,204 commits</a>
                </p>
              </li>
            </ul>
          </div>

          <div className="max-w-sm border bg-neutral-100 p-4">
            <h2>About</h2>
            <p>This is the coolest repo you'll ever see.</p>
            <a href="#" className="block">
              coolrepos.com
            </a>

            <ul className="Tags mt-4">
              <li>
                <a href="#" className="Pill">
                  website
                </a>
              </li>
              <li>
                <a href="#" className="Pill">
                  engineering
                </a>
              </li>
              <li>
                <a href="#" className="Pill">
                  js
                </a>
              </li>
              <li>
                <a href="#" className="Pill">
                  bun
                </a>
              </li>
              <li>
                <a href="#" className="Pill">
                  demo
                </a>
              </li>
              <li>
                <a href="#" className="Pill">
                  user interface
                </a>
              </li>
              <li>
                <a href="#" className="Pill">
                  design
                </a>
              </li>
            </ul>

            <ul className="RelatedLinks mt-4">
              <li>
                <a href="#">Readme</a>
              </li>
              <li>
                <a href="#">Code of conduct</a>
              </li>
              <li>
                <a href="#">Security policy</a>
              </li>
              <li>
                <a href="#">179k stars</a>
              </li>
              <li>
                <a href="#">6.7k watching</a>
              </li>
              <li>
                <a href="#">41.5k forks</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
