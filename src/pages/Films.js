import { useEffect, useState } from "react";
import { RxPlus, RxCross1 } from "react-icons/rx";
import * as Dialog from "@radix-ui/react-dialog";
import { setCardImage } from "../utils/setCardImage";

const Films = () => {
  const [films, setFilms] = useState([]);

  function getDateYear(date) {
    var formatedDate = new Date(date);
    return formatedDate.getFullYear();
  }

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);

  return (
    <section id="films" className="films flex w-fill h-screen p-10 items-center">
      <div className="flex items-center w-11/12 h-fit flex-nowrap overflow-auto overflow-x-scroll scroll-auto snap-x">
        {films.map((film) => {
          return (
            <div key={film.episode_id}> 
              <div className="w-96 h-72 bg-black rounded-lg bg-opacity-60 m-2 hover:backdrop-blur-sm transition-all duration-200 text-white flex items-center justify-between">
                <div className="h-fit">{setCardImage(film.episode_id)}</div>
                <div className="flex h-100 flex-col h-full justify-between text-center items-center snap-center py-10">
                  <h1 className="font-lexend uppercase font-bold text-2xl w-2/3">
                    {film.title}
                  </h1>
                  <Dialog.Root>
                    <Dialog.Trigger asChild>
                      <button>
                        <RxPlus />
                      </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Overlay className="DialogOverlay" />
                      <Dialog.Content className="DialogContent bg-zinc-900 w-5/6 rounded-2xl py-10 px-20">
                        <header className="flex items-start justify-between">
                          <Dialog.Title className="DialogTitle text-3xl font-bold text-white">
                            {film.title}
                          </Dialog.Title>
                          <div className="flex flex-col items-end">
                            <label className="text-gray-500 text-sm">
                              Director:
                            </label>
                            <p className="text-white text-xl">
                              {film.director}
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <label className="text-gray-500 text-sm">
                              Producer:
                            </label>
                            <p className="text-white text-xl">
                              {film.producer}
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <label className="text-gray-500 text-sm">
                              Year:
                            </label>
                            <p className="text-white text-xl">
                              {getDateYear(film.release_date)}
                            </p>
                          </div>
                          <Dialog.Close asChild>
                            <button
                              className="IconButton text-white"
                              aria-label="Close"
                            >
                              <RxCross1 />
                            </button>
                          </Dialog.Close>
                        </header>
                        <article className="flex">
                          <div className="bg-gray-500 w-80 h-auto rounded-lg p-5 bg-opacity-10 text-white text-lg font-base">
                            {film.opening_crawl}
                          </div>
                          <div className="p-5">
                            <label className="text-gray-500">Characters</label>
                            <div className="grid grid-cols-2"></div>
                          </div>
                        </article>
                      </Dialog.Content>
                    </Dialog.Portal>
                  </Dialog.Root>
                  <p className="font-lexend font-bold text-2xl">
                    {getDateYear(film.release_date)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Films;
