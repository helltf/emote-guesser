import Image from 'next/image'
import Link from 'next/link'
import typingGif from '../../../public/typing.gif'

export default function Hero(){
	return (
	<div className='flex flex-col items-center justify-center h-full'>
		<Image alt="typing gif" width="384" height="128" src={typingGif}></Image>
		<div className='flex flex-col w-[30%]'>
		<h1 className='text-purple-600 text-8xl italic self-start'>Emote</h1>
		<h1 className='text-purple-600 text-8xl italic self-end'> Guesser</h1>
		</div>
		<div>
			<Link href="/play"></Link>
			<Link href="/stats"></Link>
		</div>
	</div>)
}