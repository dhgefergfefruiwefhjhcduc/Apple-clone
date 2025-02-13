"use client"
import Link from 'next/link';

export default function Page() {
  return (
    <>
    <div>

    </div>
    <div className="w-full min-h-screen bg-white">
      {/* Navbar */}
      <div className='pc flex flex-col'>
      <nav className="flex h-[6vh] flex-col justify-between top-0 z-30 items-center bg-gray-100 shadow-md fixed w-full">
      <div className='h-full w-full flex justify-center gap-9 items-center bg-[black]'>
      <img className='h-5 w-5' src='/apple.svg'></img>
      <ul className='flex gap-9 text-xs text-[rgb(156,156,156)] font-semibold'> 
          <li><Link href="/mac" className="">Store</Link></li>
          <li><Link href="/mac" className="">Mac</Link></li>
          <li><Link href="/ipad" className="">iPad</Link></li>
          <li><Link href="/iphone" className="">iPhone</Link></li>
          <li><Link href="/watch" className="">Watch</Link></li>
          <li><Link href="/support" className="">Airpods</Link></li>
          <li><Link href="/support" className="">TV and Home</Link></li>
          <li><Link href="/support" className="">Entertainment</Link></li>
          <li><Link href="/support" className="">Accessories</Link></li>
          <li><Link href="/support" className="">Support</Link></li>
          <img src='/search.svg' className='cursor-pointer h-4 w-4'></img>
          <img src='/cart.svg' className='cursor-pointer h-4 w-4'></img>
          </ul>
          </div>
     
      </nav>
      <div className='h-[5vw] mt-[2vw] p-[2.25rem] z-20 w-full bg-[#1d1d1f] text-[14px] flex justify-center items-center text-white '>
          <p className='w-[70vw] text-center'>Get up to 24 months of No Cost EMI‡ plus up to ₹10000.00 instant cashback* on selected products with eligible cards. <a href='#'className='text-blue-600'>Shop</a></p>
          </div>
          </div>
        <div className='mob flex flex-col'>
      <nav className="flex h-[6vh] top-0 flex-col justify-between  z-30 items-center bg-gray-100 shadow-md fixed w-[100vw]">
      <div className='h-full w-full flex justify-between gap-9 items-center bg-black'>
      <img className='h-5 w-5 ml-5' src='/apple.svg'></img>
      <ul className='flex gap-7 text-xs text-[rgb(156,156,156)] font-semibold mr-5'> 
          {/* <li><Link href="/mac" className="">Store</Link></li>
          <li><Link href="/mac" className="">Mac</Link></li>
          <li><Link href="/ipad" className="">iPad</Link></li>
          <li><Link href="/iphone" className="">iPhone</Link></li>
          <li><Link href="/watch" className="">Watch</Link></li>
          <li><Link href="/support" className="">Airpods</Link></li>
          <li><Link href="/support" className="">TV and Home</Link></li>
          <li><Link href="/support" className="">Entertainment</Link></li>
          <li><Link href="/support" className="">Accessories</Link></li>
          <li><Link href="/support" className="">Support</Link></li> */}
          <img src='/search.svg' className='cursor-pointer h-4 w-4'></img>
          <img src='/cart.svg' className='cursor-pointer h-4 w-4'></img>
          <img src='/more.svg' className='cursor-pointer h-4 w-4'></img>
          </ul>
          </div>
     
      </nav>
      <div className='h-[5vw] mt-[6vh] p-[2.25rem] z-20 w-full bg-[#1d1d1f] text-[14px] flex justify-center items-center text-white '>
          <p className='w-[70vw] text-center'>Get up to 24 months of No Cost EMI‡ plus up to ₹10000.00 instant cashback* on selected products with eligible cards. <a href='#'className='text-blue-600'>Shop</a></p>
          </div>
      </div>
      
      {/* Hero Section */}
      <div className="w-full h-[96vh] hero flex items-center justify-center bg-black text-white text-center p-6">
        <div className='mt-[6.5rem]'>
          <h1 className="text-3xl relative md:text-2xl font-bold z-10">iPhone 16 Pro</h1>
          <p className="text-lg relative md:text-3xl mt-2 z-10">Built for Apple Intelligence</p>
          <img className='pc h-[60vh] w-[52vw] my-[-60px]' src='/Screenshot 2025-02-12 191508.png'></img>
          <img className='mob h-[33vh] w-[85vw]  my-[-10px] ' src='/store-card-40-iphone-16-pro-202409_FMT_WHH.jpg'></img>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Learn More</button>
          <button className="mt-6 ml-6 px-6 py-3 bg-black border border-blue-600 text-blue-600 rounded-full hover:text-white hover:bg-blue-600">Buy</button>
          <p className='text-[rgb(156,156,156)] m-2'>Apple Intelligence available now in US English</p>
        </div>
      </div>
      <div className="w-full mt-3 hero12 h-[98vh] grad flex items-center justify-center bg-black text-white text-center p-6">
        <div className='mt-[6.5rem] hero2'>
          <h1 className="text-4xl relative md:text-6xl font-semibold z-10">iPhone 16 </h1>
          <p className="text-lg relative md:text-3xl mt-2 z-10">Built for Apple Intelligence</p>
          <img className='pc h-[30vh] w-[52vw] my-[50px]' src='/hero_endframe__dtznvlokjeeu_xlarge.png'></img>
          <img className='mob h-[32vh] w-[25vw] my-[30px]' src='/hero_small_2x.png'></img>
          <div className='flex justify-center items-center'>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Learn More</button>
          <button className="mt-6 ml-6 px-6 py-3 bg-[#ffffff00] border border-blue-600 text-blue-600 rounded-full hover:text-white hover:bg-blue-600">Buy</button></div>
          <p className='text-[rgb(156,156,156)] m-2'>Apple Intelligence available now in US English</p>
        </div>
      </div>
      
      
      <div className="w-full mt-4 hero13 h-[98vh] flex items-center justify-center bg-[#f5f5f7] text-white text-center p-6">
        <div className='mt-[6.5rem] hero3'>
          <div className='flex justify-center items-center'>
          <img src='/apple2.svg' className='h-[52px] w-[52px]'></img>
          <h1 className="text-3xl relative md:text-5xl font-semibold text-black z-10">WATCH</h1>
          </div>
          <p className='text-black text-2xl mt-2 font-semibold'>SERIES 10</p>
          <p className='text-black text-2xl mt-2'>Thinstant classic.</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Learn More</button>
          <button className="mt-6 ml-6 px-6 py-3 bg-[#ffffff00] border border-blue-600 text-blue-600 rounded-full hover:text-white hover:bg-blue-600">Buy</button>
          <img className='pc h-[60vh] w-[52vw]' src='/Apple-Watch-Series-10-hero-240909_big.jpg.large-removebg-preview.png'></img>
          <img className='mob h-[35vh] w-[75vw]' src='/axz17moawmdbwd9n3i0kdsfsgu8mlpvt-removebg-preview.png'></img>
        </div>
      </div>
      <div className="w-full flex-wrap CARD mt-4 gap-x-3 gap-y-0 h-[248vh] pb-2 flex  justify-center  bg-[white] text-white text-center px-2">
      
      <div className="w-[48vw] card mt-4 h-[80vh] flex items-center justify-center bg-[black] text-white text-center p-6">
        <div className='mt-[4.5rem] hero21 justify-center flex flex-col items-center'>
          <div className='flex justify-center items-center'>
          <img src='/apple.svg' className='h-[40px] w-[40px]'></img>
          <h1 className="text-3xl relative md:text-3xl font-semibold text-white z-10">WATCH</h1>
          </div>
          <div className='flex justify-center items-center w-full'>
          <p className='text-white text-xl w-[25vw] mt-2 watch '>United by rhythm. Discover the new Black Unity watch strap and face.</p></div>
          <button className="pc mt-6  px-4 py-2 bg-white text-black rounded-full ">Buy</button>
          <button className="mob mt-6 px-4 py-2 bg-white text-black rounded-full ">Buy</button>
          <img className='pc h-[50vh] w-[15vw] mt-5 mb-5' src='/Screenshot_2025-02-12_223427-removebg-preview.png'></img>
          <img className='mob h-[36vh] w-[48vw] mt-7' src='/Screenshot_2025-02-12_223427-removebg-preview.png'></img>
        </div>
      </div>
      
      <div className="w-[48vw] card mt-4 h-[80vh] flex items-center justify-center bg-[white] text-white text-center p-6 relative overflow-hidden">
  <div className='absolute inset-0'>
    <img className='pc w-full h-full object-cover scale-[0.6] mt-[-60px]' src='/store-card-40-valentines-accessories-202501_FMT_WHH.jpg' alt='Apple Watch Series 10'/>
    <img className='mob w-full h-full object-cover  mt-[-60px]' src='/store-card-40-valentines-accessories-202501_FMT_WHH.jpg' alt='Apple Watch Series 10'/>
  </div>
  <div className='relative z-10 w-full h-full flex flex-col items-center justify-end'>
    <div className='flex justify-center items-center'>
      <h1 className="text-3xl md:text-5xl font-semibold text-black">Valentine's Day</h1>
    </div>
    <div className='w-full flex justify-center items-center'>
    <p className='w-[28.3vw] text-black text-2xl mt-2 watch'>Last chance to find something special for your special someone.</p>
    </div>
    <button className="mt-6 px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Shop</button>
 
  </div>
</div>
     
      <div className="card w-[48vw] mt-4 h-[80vh] flex items-center justify-center bg-[#f5f5f7] text-white text-center p-6">
        
        <div className='mt-[6.5rem] hero3'>
          <div className='flex justify-center items-center'>
          <h1 className="text-3xl relative md:text-5xl font-semibold text-black z-10">MacBook Air</h1>
          </div>
          <p className='text-black text-2xl mt-2'>Supercharged by M3.</p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Learn More</button>
          <button className="mt-6 ml-6 px-4 py-2 bg-[#ffffff00] border border-blue-600 text-blue-600 rounded-full hover:text-white hover:bg-blue-600">Buy</button>
          <img className='pc h-[52vh] w-[30vw] relative' src='/1-hero_static__c9sislzzicq6_large_2x-removebg-preview.png'></img>
          <img className='mob h-[30vh] w-[58vw] relative' src='/1-hero_static__c9sislzzicq6_large_2x-removebg-preview.png'></img>
        </div>
      </div>
      
      <div className="card w-[48vw] mt-4 h-[80vh] flex items-center justify-center bg-[black] text-white text-center p-6">
        <div className='mt-[4.5rem] hero3'>
          <div className='flex justify-center items-center'>
          <h1 className="text-3xl relative md:text-5xl font-semibold text-white z-10">iPad Pro</h1>
          </div>
          <p className='text-white text-2xl mt-2'>Unbelivable thin.Incredible powerful.</p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Learn More</button>
          <button className="mt-6 ml-6 px-4 py-2 bg-[#ffffff00] border border-blue-600 text-blue-600 rounded-full hover:text-white hover:bg-blue-600">Buy</button>
          <img className='pc h-[15vh] mt-20 mb-20 w-[30vw] relative' src='/hero_endframe__sg50vzdd6sqm_large.jpg'></img>
          <img className='mob h-[8vh] mt-20 mb-20 w-[92vw] relative' src='/hero_endframe__sg50vzdd6sqm_large.jpg'></img>
          <p className='text-[rgb(156,156,156)] m-2 co'>Built for Apple Intelligence.</p>
          <p className='text-[rgb(156,156,156)] m-2'>Apple Intelligence available now in US English</p>
        </div>
      </div>
      
      <div className="card w-[48vw] mt-4 h-[80vh] flex items-center justify-center bg-[white] text-white text-center p-6 relative overflow-hidden">
  <div className='absolute inset-0'>
    <img className='pc w-full h-[90vh] object-cover  mt-[-60px]' src='/hero-airpods_startframe__qxv9xy7swkqm_xlarge.jpg' alt='Apple Watch Series 10'/>
    <img className='mob w-full h-[72vh] object-cover  mt-[-60px]' src='/hero-airpods_startframe__qxv9xy7swkqm_xlarge.jpg' alt='Apple Watch Series 10'/>
  </div>
  <div className='relative z-10 w-full h-full flex flex-col items-center justify-end'>
    <div className='flex justify-center items-center'>
      <h1 className="text-3xl md:text-5xl font-semibold text-white">AirPods 4</h1>
    </div>
    <div className='w-full flex justify-center items-center'>
    <p className='w-[28.3vw] text-white text-2xl mt-2 watch'> Iconic. Now supersonic. Available with Active Noise Cancellation.</p>
    </div>
    <div className='flex'>
    <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Learn More</button>
    <button className="mt-6 ml-6 px-4 py-2 bg-[#ffffff00] border border-blue-600 text-blue-600 rounded-full hover:text-white hover:bg-blue-600">Buy</button> 
    </div>
  </div>
</div>
      
<div className="card2 w-[48vw] mt-4 h-[80vh] flex items-center justify-center bg-[#f5f5f7] text-white text-center py-6">
        <div className='mt-[4.5rem] w-[48vw] her'>
          <div className='flex justify-center items-center'>
          <img src='/apple2.svg' className='h-[40px] w-[40px]'></img>
          <h1 className="text-3xl relative md:text-4xl font-semibold text-black z-10">Trade In</h1>
          </div>
          <div className='flex justify-center items-center w-full'>
          <p className='text-black text-xl w-[25vw] mt-2 watch'>Upgarde and save.It's that easy.</p></div>
          <button className="mt-6 ml-6 px-4 py-2 bg-blue-600 text-white rounded-full ">Get your estimate</button>
          <img className='pc h-[50vh] w-full mt-5 mb-5' src='/screenshot_2025-02-13_102249-removebg-preview.png'></img>
          <img className='mob h-[20vh] w-full mt-10 mb-5' src='/screenshot_2025-02-13_102249-removebg-preview.png'></img>
        </div>
      </div>
      </div>


      <div id="default-carousel" className="relative w-full h-[90vh] carou" data-carousel="slide">
  <div className="relative h-full overflow-hidden rounded-lg">
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="/Brad-Pitt-F1-Poster-070524-fe9add0efa85450297b5f1d208ca9b79.jpg" className="absolute block w-full h-full object-fill" alt="Brad Pitt F1 Poster"/>
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="/Apple-TV-Plus-Show-SEverance-Season-TWo-Balloon-Poster-Artwork.jpg" className="absolute block w-full h-full object-fill" alt="Severance Season Two Poster"/>
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="/f09b8ea4b37ead4fec7438a46218f978.jpg" className="absolute block w-full h-full object-cover" alt="Image 3"/>
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="/Apple_TV_debuts_trailer_for_highly_anticipated_season_two_of_Bad_Sisters_Big_Image_01_big_image_post.jpg.large.jpg" className="absolute block w-full h-full object-fill" alt="Bad Sisters Season Two Poster"/>
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="/shrinking-cast-poster-1280x720.jpg" className="absolute block w-full h-full object-fill" alt="Shrinking Cast Poster"/>
    </div>
  </div>
  <div className="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    <button type="button" className="w-3 h-3 rounded-full bg-black" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    <button type="button" className="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    <button type="button" className="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    <button type="button" className="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
    <button type="button" className="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
  </div>
  <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
      <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>



<footer className="bg-[#f5f5f7] py-8 text-[12px] text-[#828282]">
    <div className="max-w-5xl mx-auto px-6">
        <p className="mb-4">
            *No Cost EMI is available with the purchase of an  
            <a href="#" className="underline"> eligible product</a> made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month tenures from most leading card issuers. 
            Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. 
            Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, 
            subject to your card issuer’s terms and conditions. 
            Minimum order spend applies as per your card issuer’s threshold. 
            No Cost EMI is not available to Business customers and cannot be combined with Apple Store for Education 
            or Corporate Employee Purchase Plan pricing. 
            Card eligibility is subject to terms and conditions between you and your card issuer. 
            Offer may be revised or withdrawn at any time without any prior notice. 
            <a href="#" className="underline"> Terms apply.</a>
        </p>

        <p className="mb-4">
            Representative example: <br></br>
            A purchase of ₹79,900.00 repaid over 24 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹11,930.00 
            requires monthly payments of ₹3,329.00. Total amount payable: ₹79,900.00.
        </p>

        <p className="mb-4">
            *Instant cashback is available with the purchase of an 
            <a href="#" className="underline"> eligible product</a> with qualifying American Express, Axis Bank, 
            and ICICI Bank cards only. Minimum transaction value of ₹10,001.00 applies. 
            <a href="#" className="underline"> Click here</a> to see instant cashback amounts and eligible devices. 
            Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. 
            Card eligibility is subject to terms and conditions between you and your card issuer. 
            Total transaction value is calculated after any trade-in credit or eligible discount is applied. 
            Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, 
            and any refund may be adjusted to account for instant cashback clawback; 
            this may result in no refund being made to you. Offer may be revised or withdrawn at any time without prior notice. 
            <a href="#" className="underline"> Additional terms apply.</a>
            Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
        </p>

        <p className="mb-6">
            Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, 
            iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to English 
            (Australia, Canada, Ireland, New Zealand, South Africa, UK or US), as part of an iOS 18, iPadOS 18 and 
            macOS Sequoia software update. Additional features and languages will be available in April, 
            with more languages coming over the course of the year. Languages supported in 2025 include 
            Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, Spanish and Vietnamese.
        </p>
        <p className=" text-gray-500 text-xs mt-6">Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>
        <hr className="my-6 border-gray-300"></hr>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
                <h3 className="text-xs font-semibold text-black mb-4">Shop and Learn</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Store</a></li>
                    <li><a href="#" className="hover:underline">Mac</a></li>
                    <li><a href="#" className="hover:underline">iPad</a></li>
                    <li><a href="#" className="hover:underline">iPhone</a></li>
                    <li><a href="#" className="hover:underline">AirPods</a></li>
                    <li><a href="#" className="hover:underline">TV & Home</a></li>
                    <li><a href="#" className="hover:underline">AirTag</a></li>
                    <li><a href="#" className="hover:underline">Accessories</a></li>
                    <li><a href="#" className="hover:underline">Gifts Card</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs text-black font-semibold mb-4">Account</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
                    <li><a href="#" className="hover:underline">Apple Store Account</a></li>
                    <li><a href="#" className="hover:underline">iCloud.com</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs text-black font-semibold mb-4">Apple Store</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Find a Store</a></li>
                    <li><a href="#" className="hover:underline">Genius Bar</a></li>
                    <li><a href="#" className="hover:underline">Today at Apple</a></li>
                    <li><a href="#" className="hover:underline">Apple Trade In</a></li>
                    <li><a href="#" className="hover:underline">Ways to Buy</a></li>
                    <li><a href="#" className="hover:underline">Recylcing Programme</a></li>
                    <li><a href="#" className="hover:underline">Order Status</a></li>
                    <li><a href="#" className="hover:underline">Shopping Help</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs text-black font-semibold mb-4">For Business</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Apple and Business</a></li>
                    <li><a href="#" className="hover:underline">Shop for Business</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xs text-black font-semibold mb-4">Apple Values</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Accessibility</a></li>
                    <li><a href="#" className="hover:underline">Education</a></li>
                    <li><a href="#" className="hover:underline">Environment</a></li>
                    <li><a href="#" className="hover:underline">Privacy</a></li>
                    <li><a href="#" className="hover:underline">Supply Chain</a></li>
                </ul>
            </div>
        </div>
            <hr className="my-6 border-gray-300 "></hr>  
            <p>More ways to shop:<a href='#' className='text-blue-600 underline'> Find an Apple Store </a>or <a href='#' className='text-blue-600 underline'> other retailer</a> near you. Or call <a href='#' className='text-blue-600 underline'>  000800 040 1966.</a></p>
        <pre className='w-full'>
            <p className=" text-gray-500 text-xs mt-6">Copyright © 2025 Apple Inc. All rights reserved.  <br></br>  
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Use </a> | <a href="#" className="hover:underline">Sales Policy</a> | <a href="#" className="hover:underline">Legal</a><br></br>
           <a href="#" className="hover:underline">Site Map</a>
            </p>
            </pre>
          
    </div>
</footer>

      {/* Product Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-gray-200 p-6 text-center rounded-lg">
          <h2 className="text-3xl font-semibold">MacBook Pro</h2>
          <p className="text-lg mt-2">Supercharged for pros.</p>
          <Link href="/mac" className="text-blue-600 ">Learn More</Link>
        </div>
        <div className="bg-gray-200 p-6 text-center rounded-lg">
          <h2 className="text-3xl font-semibold">Apple Watch</h2>
          <p className="text-lg mt-2">Smarter. Brighter. Mightier.</p>
          <Link href="/watch" className="text-blue-600 ">Learn More</Link>
        </div>
      </div> */}

      {/* Footer */}
      {/* <footer className="p-6 bg-gray-100 text-center text-gray-600 mt-12">
        <p>© 2025 Apple Clone. All rights reserved.</p>
      </footer> */}
    </div>
    </>
  );
}