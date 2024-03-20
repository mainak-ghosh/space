import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mainak</title>
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-10 max-w-5xl w-full items-center font-mono text-sm'>
          <p className='pb-4'>hi there, welcome to my corner of the web!</p>

          <p className='text-2xl font-semibold'>
            I&apos;m Mainak, excited to share my world with you.
          </p>
          <div className='flex space-x-3 pt-3'>
            <div className='border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 rounded-full px-3 py-1'>
              <a href='https://github.com/mainak-ghosh' target='_blank'>
                Github
              </a>
            </div>
            <div className='border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 rounded-full px-3 py-1'>
              <a href='https://instagram.com/mainakghosh_' target='_blank'>
                Instagram
              </a>
            </div>
            <div className='border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 rounded-full px-3 py-1'>
              <a href='https://x.com/mainakghosh_' target='_blank'>
                x
              </a>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className='text-sm '>
            [ This page is currently a work in progress, but stick around
            because great things are coming your way soon! ]
          </p>

          <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'></div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

        <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
      </main>
    </div>
  );
}
