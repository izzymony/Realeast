import React,{ useState, useRef} from 'react'
import Image from 'next/image'

interface Testimonial {
  id: number;
  quote: string;
  image: string;
  role: string;
  name:string;
}

const testimonials: Testimonial[] = [
  {
      id: 1,
      image: '/eb76a46ab920d056b02d203ca95e9a22.jpg',
      quote: "From start to finish, the team made the entire process stress-free. Their expertise and personalized attention ensured we found our dream home.",
      name: "Alexander",
      role: "Buyer"
    },
    {
      id: 2,
       image: '/c79a37e13ef14be556b51143bcbb1b01.jpg',
      quote: "From start to finish, the team made the entire process stress-free. Their expertise and personalized attention ensured we found our dream home.",
      name: "Rayzan",
      role: "Buyer"
    },
    {
      id: 3,
       image: '/25338f488af2c45912c15ebab325e363.jpg',
      quote: "This team made absolute breeze. Property perfect deal for us",
      name: "Jerry",
      role: "Buyer"
       },
    {
      id: 4,
       image: '/7dbb92eaf7f58d767c92151f57bfa05e.jpg',
      quote: "Excellent service from the entire team. They understood exactly what we were looking for.",
      name: "Sarah",
      role: "Buyer"
    },
    {
      id: 5,
       image: '/b0ffad4cec49316bf62af895378c5db6.jpg',
      quote: "Quick response time and professional approach throughout the process.",
      name: "Michael",
      role: "Buyer"
    },
   
]

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement> (null) 
  const [activeIndex, setActiveIndex] = useState(0)
  
  const scrollTo =(index: number) => {
     if(scrollContainerRef.current){
        const container = scrollContainerRef.current;
              const card = container.children[index] as HTMLElement;
      const cardWidth = card.offsetWidth;
      const scrollPosition = cardWidth * index;
      
      container.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
      })

      setActiveIndex(index)
     }         
  }

  const handleScroll = () => {
     if(scrollContainerRef.current){
        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollLeft;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const newIndex = Math.round(scrollPosition / cardWidth);  
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
     }         
  }


  return (
       <div>
      <section>
        <div className='bg-white p-6 md:p-12 '>
          <div className=''>
            <p className='bg-[#e3dffb] text-center px-3 py-1 w-fit text-[12px] rounded-full text-black font-bold'>Testimonials</p> 
            <h1 className="text-[30px] md:text-4xl font-bold text-gray-900 mt-5">What our Clients Say about us</h1>
          </div> 
          
        <div className='mt-6 relative'>
  <div 
    ref={scrollContainerRef}
    onScroll={handleScroll}
    className='flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide'
    style={{ scrollSnapType: 'x mandatory' }}
  >
    {testimonials.map((testimonial) => (
      <div 
        key={testimonial.id}
        className='flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-start'
      >   
        <div className='bg-gray-100 rounded-lg p-12 flex flex-col h-full'>  
          <p className='text-gray-600 mb-4 flex-grow'>{testimonial.quote}</p>      
          <div className='flex items-center gap-3 mt-auto'>
            <div className='relative w-10 h-10 flex-shrink-0'>
              <Image
                src={testimonial.image || '/placeholder.svg'}
                alt={testimonial.name}
                fill
                className='rounded-full object-cover'
              />
            </div>
            <div className=''>
            <div>
              <h2 className='text-black font-semibold text-sm'>{testimonial.name}</h2>
              <p className="text-gray-500 text-xs">{testimonial.role}</p>    

            </div>
             
            </div>
             <Image src={'/icons8-quote-left-50 (1).png'} width={50} height={50} alt='' className=' ml-14' />
          </div>
         
        </div>             
      </div>             
    ))}
  </div>
</div>        
        </div>
        
        <div className='flex gap-4 justify-center mt-6'>     
          {testimonials.map((_, index) => (       
            <button 
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-[#37a1ab] w-3' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>       
          ))}
        </div>
      </section>              
    </div>        
  )
}

export default Testimonials