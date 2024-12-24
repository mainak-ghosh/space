import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mainak</title>
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-between p-24 font-mono'>
        <div className='max-w-5xl w-full items-center text-sm'>
          <p className='pb-4'>hi there!</p>

          <p className='text-2xl font-semibold'>
            I&apos;m mainak & welcome to my little space on the web!
          </p>
          <br />
          <div className='flex space-x-3 pt-3'>
            <div className='border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 rounded-full px-3 py-1'>
              <a href='https://github.com/mainak-ghosh' target='_blank'>
                github
              </a>
            </div>
            <div className='border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 rounded-full px-3 py-1'>
              <a href='https://x.com/mainakghosh_' target='_blank'>
                x
              </a>
            </div>
            <div className='border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30 rounded-full px-3 py-1'>
              <a href='https://instagram.com/mainakghosh_' target='_blank'>
                instagram
              </a>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div>
            <h1 className='font-bold'>events</h1>
            <br></br>
            <p>
              24th Jan 2025 - 26th Jan 2025 • Mainak & Satabari&apos;s Wedding{' '}
            </p>
            <a href='/wedding-invitation' className='underline'>
              check invitation
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
