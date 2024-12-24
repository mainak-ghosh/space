import Head from 'next/head';

export default function Wedding() {
  return (
    <div>
      <Head>
        <title>Wedding Invitation Mainak & Satabari</title>
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-between p-24 font-mono  text-sm'>
        <p className='max-w-5xl w-full'>
          {' '}
          <a href='/' className='underline'>
            home
          </a>{' '}
          / <a href='#'>wedding-invitation</a>
        </p>
        <div className='max-w-5xl w-full items-center '>
          <p className='pb-4'>Wedding invitation of</p>

          <p className='text-2xl font-semibold'>Mainak & Satabari</p>
          <div className='flex space-x-3 pt-3'></div>

          <br />
          <div className='text-sm '>
            <p>
              With the blessings of the Almighty and our beloved elders, We
              joyfully invite you to the wedding of
            </p>
            <br />
            <p>Mainak Ghosh </p>
            <p>Son of Gopi Kanta Ghosh & Manjula Ghosh</p>
            <p>&</p>
            <p>Satabari Mukherjee</p>
            <p>Daughter of Alomoy mukherjee & Tandra Mukherjee </p>
            <br />
            <p>Date: Friday, 24th January 2025 </p>
            <p>
              Venue:{' '}
              <a
                href='https://maps.app.goo.gl/7Es3efFPkJ1oMqS19'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                Newtown Utsab, 5th Floor, Newtown Plaza Street No 175, Action
                Area 1C, Newtown Kolkata - 700156{' '}
              </a>
            </p>
            <p>Time: 7.30 pm </p>
            <br />
            <p>Reception Invitation </p>
            <p>
              To celebrate this beautiful union, We cordially invite you to
              grace us with your presence at the Reception Ceremony.{' '}
            </p>
            <br />
            <p>Date: Sunday, 26th January 2025 </p>
            <p>Time: 7:00 PM onwards </p>
            <p>
              Venue:{' '}
              <a
                href='https://maps.app.goo.gl/WVibZ7oeFHk842EE6'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                Ma Nirmala Anusthan Bhaban, Netaji Road, Kalikapur, Bolpur
              </a>
            </p>

            <br />
            <p>
              Your presence will add warmth and joy to this special occasion.
              Kindly consider this as a personal invitation from us.
            </p>
          </div>

          <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'></div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

        <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'></div>
      </main>
    </div>
  );
}
