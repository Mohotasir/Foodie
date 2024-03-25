import heroImg from '../assets/cover.jpg'
const Hero = () => {
    return (
        <div className='container mulish h-screen mx-auto flex flex-col-reverse text-center md:text-left md:flex-row md:-mt-6 gap-4 items-center justify-center'>
              <div className=' md:w-1/2 px-4'>
                    <h1 className=" text-4xl lg:text-7xl font-bold ">Best Foods Which Makes You <span className="text-secondary">Hungry</span></h1>
                    <p className="py-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet numquam dicta possimus tempora, cum a totam molestiae dignissimos vel, commodi veritatis aliquam ut accusantium placeat consectetur quae dolorem aut?</p>
                    <button className="btn btn-secondary text-lg px-12 rounded-full mr-4 mb-2 md:mb-0 " >Order Now</button>
                    <button className="btn bg-white border-secondary text-lg px-12 rounded-full" >Order Now</button>
              </div>
              <div className=' md:w-1/2'>
                  <img className='w-[100%] rounded-full' src={heroImg} alt="" />
              </div>
        </div>
    );
};

export default Hero;