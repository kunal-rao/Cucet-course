import React from 'react'
import Batches from './Batches'




export default function Home() {
  return (
    <>
      <div id="home">
        <h1 className="h-primary, center, font-family">This is the main heading</h1>
        <p className="center, font-family">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim totam
            provident quis a? Fugiat.</p>
        <span><button className="btn-1">Join now</button>
            <button className="btn-2">Discover More</button></span>
    </div>
    <h1 className="center font-family2 h-primary">Courses</h1>
    <section id="courses">
        <div className="course-options , font-family">
            <div><img src="img/option-1.png" alt=""/></div>
            <ul className="center">
                <h1 className="h-secondary font-family2">12 CRASH COURSE</h1>
                <li>Best Teachers</li>
                <li>20 videos</li>
                <li>10 mock test</li>
                <li>Notes by experts</li>
                <button className="btn-2">Join Now</button>
            </ul>
        </div>
        <div className="course-options font-family">
            <div><img src="img/option-1.png" alt=""/></div>
            <ul className="center">
                <h1 className="h-secondary font-family">10 CRASH COURSE</h1>
                <li>20 videos</li>
                <li>Best Teachers</li>
                <li>Notes by experts</li>
                <li>10 mock test</li>
                <button className="btn-1">Join Now</button>
            </ul>

        </div>
    </section>

    <section id="founder">
       
           <img src="img/kunal-2.jpg" alt="" className="" />
           <div id="quotes">
               <h1 className='h-primary font-family center'>OUR FOUNDER</h1>
               <p className="center h-secondary font-family center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto ex deleniti voluptatum reprehenderit numquam commodi, nisi veniam hic adipisci earum molestiae maxime sint quaerat autem! Sint, dolore pariatur. Dolor, molestiae accusantium."</p>
               <h2 className='h-primary font-family2'>Kunal yadav</h2>
           </div>
        
        </section>
        {/* <section id="contact">
            <h1 className="h-secondary center font-family2">Contact Us</h1>
            <div className="contact-box">
                <form action="">
                    <div className="form-group font-family">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group font-family">
                        <label htmlFor="name">Email Id</label>
                        <input type="text" name="name" id="email" placeholder="Enter your Email Id"/>
                    </div>
                    <div className="form-group font-family">
                        <label htmlFor="name">Phone Number</label>
                        <input type="text" name="name" id="phone" placeholder="Enter your Phone Number"/>
                    </div>
                    <div className="form-group font-family">
                        <label htmlFor="name">Class</label>
                        <input type="text" name="name" id="address" placeholder="Your Current Class"/>
                    </div>
                    <div className="form-group font-family">
                        <label htmlFor="name">Dream COllege</label>
                        <input type="text" name="name" id="address" placeholder="Your Dream College"/>
                    </div>
                </form>
            </div>
        </section> */}
   

    <h1 className="center font-family2 h-primary">Our Students review</h1>

    <section id="testimony-section">
        <div id="testimony">
            <div className="testi">

                <img src="img/kunal-3.jpg" alt=""/>
                <h1 className="h-secondary center font-family">Kunal Yadav</h1>
                <p className="center font-family">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dolorum.
                </p>
            </div>
            <div className="testi">

                <img src="img/gautam-img.jpg" alt=""/>
                <h1 className="h-secondary center font-family">Gautam Agarwal</h1>
                <p className="center font-family">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis debitis .</p>
            </div>
            <div className="testi">

                <img src="img/pp-img.jpg" alt=""/>
                <h1 className="h-secondary center font-family">Heena gupta</h1>
                <p className="center font-family">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, similique
                    quas!</p>
            </div>
        </div>
    </section>

    <h1 className="center font-family2 h-primary">Syllabus Completion Batches</h1>

   <Batches/>

            {/* <!-- <section id="educator-section">
                <div id="educators">
                    <div className="educator-option">
                    <img src="" alt=""/>
                    <h2></h2>
                    <p></p>
                    </div>

                    <div className="educator-option">
                    <img src="" alt=""/>
                    <h2></h2>
                    <p></p>
                    </div>

                    <div className="educator-option">
                    <img src="" alt=""/>
                    <h2></h2>
                    <p></p>
                    </div>
                    
            </section>

        </div> --> */}
    
    <footer>
        <div className="center">
            copyright &copy; www.CucetAdacemy.com All Rights Reserved
        </div>
    </footer>

    </>
  )
}
