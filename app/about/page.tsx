import { PageContent, PageHeader } from '@/components';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<main className='about flex flex-col gap-2'>
			<PageHeader title='About me'/>
			<PageContent>
				<div className={'bg-about-bg content-bg'} aria-hidden="true" />
				<div className='relative flex flex-col md:flex-row max-w-[1175px] m-auto gap-4'>
					<div className='md:w-1/2'>
						<div className='border-solid border-white border flex justify-center p-5'>
							<Image src={'/assets/portrait.jpg'} alt="portrait" width={300} height={200} className='w-full h-auto object-cover max-h-[500px]' />
						</div>
					</div>
					<div className='relative md:w-1/2'>
						<div className='absolute bg-white opacity-50 w-full h-full' aria-hidden="true"/>
						<div className='relative px-5 py-10 flex flex-col gap-6'>
							<h2 className='text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>Who am I ?</h2>
							<p>
						I'm a passionate fashion illustrator with a keen eye for capturing the essence of the most iconic runway moments. My journey into the realm of art and design began with a childhood full of dreams and a fascination for the world of fashion. From the early sketches of elegant dresses in my sketchbooks to the refined illustrations I create today, I've embarked on a creative odyssey inspired by the grandeur of haute couture.r sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo.
							</p>
							<p>
						The mesmerizing allure of the greatest haute couture shows fuels my artistic fire. Each brushstroke and line I meticulously craft is a tribute to the craftsmanship, innovation, and sheer artistry that grace the catwalks. My inspiration knows no bounds, drawing from the opulent fabrics, daring silhouettes, and avant-garde designs showcased by the fashion industry's luminaries. Every illustration I bring to life is infused with the magic that these iconic collections radiate, allowing me to share my vision of beauty and elegance with the world.
							</p>
							<p>
						Embarking on the path of an independent illustrator was a leap of faith driven by my relentless pursuit of creativity and authenticity. The decision to translate my passion into a profession was rooted in a deep desire to contribute my unique perspective to the realm of fashion illustration. My illustrations tell stories of aspiration, resilience, and the celebration of individuality. With every stroke of my digital pen, I endeavor to capture the soul of haute couture and breathe life into art that resonates with both fashion enthusiasts and fellow artists alike. Join me on this artistic voyage, where I merge the worlds of high fashion and artistry, one illustration at a time.
							</p>
						</div>
					</div>
				</div>
			</PageContent>
		</main>
	);
};

export default AboutPage;