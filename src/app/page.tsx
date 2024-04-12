import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-3/4 flex flex-col items-center gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
      <div className="flex items-center gap-[50px]">
        <Image
          src="/fleekLogo.svg"
          alt="Fleek Logo"
          width={200}
          height={87}
          priority
        />
        <Image
          src="/plus.svg"
          alt="add"
          width={20}
          height={20}
        />
        <Image
          src="/next.svg"
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          alt="Next Logo"
          width={200}
          height={87}
          priority
        />
      </div>

      <p className="text-2xl">
        This is a template for creating a Next.js site and deploying it on Fleek.
      </p>

      <ul
        className='grid grid-cols-2 gap-[15px]'
        role='list'
      >
        <Card
          icon='/fleekMark.svg'
          width={19}
          href="https://docs.fleek.xyz/"
          title="Fleek Documentation"
          body="Learn about Fleek & the available services by cheking our official docs."
        />
        <Card
          icon='/nextMark.svg'
          width={31}
          href="https://nextjs.org/docs"
          title="Next.js Documentation"
          body="Learn about how Next.js works and explore the official API docs."
        />
        <Card
          icon='/fleekMark.svg'
          width={19}
          href="https://blog.fleek.xyz/"
          title="Fleek Blog"
          body="Checkout our Blog for more information about Fleek."
        />
        <Card
          icon='/nextMark.svg'
          width={31}
          href="https://astro.build/integrations/"
          title="Next.js Blog"
          body="Check the latest news about Next.js."
        />
      </ul>
    </main>
  )
}

type CardProps = {
  title: string;
  body: string;
  href: string;
  icon: string;
  width: number;
}

const Card = ({ title, width, body, href, icon }: CardProps) => {
  return (
    <li className="list-none">
      <a href={href} className="h-full flex flex-col no-underline rounded-3xl border-[0.85px] border-[#313538] gap-[15px] px-8 py-5">
        <div className="flex gap-[15px] items-start ">
          <Image
            alt="card-icon"
            src={icon}
            height={31}
            width={width}
          />
          <h2 className="text-xl font-bold leading-8 m-0 text-white">
            {title}
          </h2>
        </div>
        <p className="text-md leading-6 text-[#9ca3af]">
          {body}
        </p>
      </a>
    </li>
  )
}
