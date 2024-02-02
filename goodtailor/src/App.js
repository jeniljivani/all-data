// import app.css file ==============
import './App.css';

// ICON IMPOR  ===================
import { FaTwitter,FaFacebook,FaInstagram,FaYoutube,FaAngleDown,FaMoneyCheck,FaRegStar,FaStar   } from "react-icons/fa";
import { IoDiamond,IoMdStar } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";
import { SiWorldhealthorganization } from "react-icons/si";

// IMG IMPORT =====================
import img1 from './image/logo.png';
import img2 from './image/slider.jpeg';
import img3 from './image/what2.jpeg';
import img4 from './image/what2.jpeg';
import img5 from './image/what3.jpeg';
import img6 from './image/ofer.jpeg';
import img7 from './image/our2.jpeg';
import img8 from './image/our3.jpeg';
import img9 from './image/test.jpeg';
import img10 from './image/testimg.jpeg';
import img11 from './image/company.jpeg';
import img12 from './image/prod1.jpeg';
import img13 from './image/prod2.jpeg';
import img14 from './image/prod3.jpeg';
import img15 from './image/prod4.jpeg';
import img16 from './image/news1.jpeg';
import img17 from './image/news2.jpeg';
import img18 from './image/footer.png';





function App() {
  return (
   <div>
    
    {/* TOP NEV START */}
   
      <div className='topnev'>
        <div className='contenor d-flex'>
          <div className='leftnev d-flex'>
            <li><a>Blog</a></li>
            <li><a>About Us</a></li>
          </div>
          <div className='rightnev d-flex'>
            <li><a><FaTwitter></FaTwitter></a></li>
            <li><a><FaFacebook ></FaFacebook></a></li>
            <li><a><FaInstagram ></FaInstagram></a></li>
            <li><a><FaYoutube  ></FaYoutube ></a></li>
          </div>
        </div>
      </div>
      {/* TOP NEV END */}
      {/* HEADER START */}
      <div className='header'>
        <div className='contenor d-flex a-center'> 
          <div className='logo'>
            <a><img src={img1}></img></a>
          </div>
          <div className='call'>
            <a>Call us : (0161) 347 8854</a>
          </div>
        </div>
      </div>
    {/* HEADER END */}
    {/* SLIDER START */}
      <div className='slider'>
        <img src={img2}></img>
        <div className='contenor'>
          <div className='manu d-flex'>
            <li className='d-flex a-center'><a>HOME</a><FaAngleDown ></FaAngleDown></li>
            <li className='d-flex a-center'><a>ABOUT US</a></li>
            <li className='d-flex a-center'><a>SERVICES</a><FaAngleDown ></FaAngleDown></li>
            <li className='d-flex a-center'><a>SHOP</a><FaAngleDown ></FaAngleDown></li>
            <li className='d-flex a-center'><a>BLOG</a></li>
            <li className='d-flex a-center'><a>CONTACTS</a><FaAngleDown ></FaAngleDown></li>
          </div> 
          <div className='slidertext'>
            <a className='btn'>Make Appointent</a>
          </div>
        </div>
      </div>
    {/* SLIDER END */}
    {/* What we offer of Clients START */}
    <div className='what '>
      <div className='contenor pd-t pd-b'>
        <h1 className='head'>What we offer of Clients</h1>
        <p>Phasellus elementum tempor nulla, eu ultrices odio ultrices at. Duis lorem sapien, rutrum id nibh quis, consectetur eleifend est. Mauris ornare et augue ut dignissim.</p>
      </div>
      <div className='contenor d-flex pd-b'>
        <div className='whatsec'>
          <div className='whatimg'>
            <img src={img3}></img><hr></hr>
            <h2>Resize</h2>
          </div>
        </div>
        <div className='whatsec'>
          <div className='whatimg'>
            <img src={img5}></img>
            <hr></hr>
            <h2>Repair</h2>
          </div>
        </div>
        <div className='whatsec'>
          <div className='whatimg'>
            <img src={img4}></img><hr></hr>
            <h2>Restoration</h2>
          </div>
        </div>
      </div>
      
        <div className='btn'><a>see our services</a></div>
      
    </div>
    {/* What we offer of Clients END */}
    {/* Weekend Special Sale 50% satrt */}
    <div className='bacimg' style={{
            width:'100%',
            height:'150px',
            backgroundImage:`url(${img6}) `,
            backgroundSize:'cover',
            backgroundPosition:'center',
            }}><p>Weekend Special Sale 50%</p></div>
    {/* Weekend Special Sale 50% end */}
    {/* Our Works start */}
      <div className='our'>
        <div className='contenor pd-t pd-b'>
          <h1 className='head'> Our Works</h1>
          <p className='  '>Phasellus elementum tempor nulla, eu ultrices odio ultrices at. Duis lorem sapien, rutrum id nibh quis, consectetur eleifend est. Mauris ornare et augue ut dignissim.</p>
          <div className='oursec d-flex'>
            <div className='ourimg'>              
              <img src={img3}></img>
            </div>         
            <div className='ourimg'>
              <img src={img7}></img>              
            </div>
            <div className='ourimg'>
              <img src={img8}></img>        
            </div>
          </div>         
        </div>
      </div>
    {/* Our Works end */}
    {/* Our Advantages start */}
    <div className='advans'>
      <div className='contenor'>
          <h1 className='head'>Our Advantages</h1>
          <p className='p'>Phasellus elementum tempor nulla, eu ultrices odio ultrices at. Duis lorem sapien, rutrum id nibh quis, consectetur eleifend est. Mauris ornare et augue ut dignissim.</p>
      
        <div className='advsec d-flex'>
          <div className='w-33'>
            <div className='cont'>
              <div className='icon'><i>
                <FaMoneyCheck ></FaMoneyCheck></i>
              </div>
              <h2>100% Money Back Guarantee</h2>
              <p>Nullam fermentum ex at neque aliquam, in ullamcorper neque laoreet. Fusce commodo ultricies massa, vitae feugiat massa iaculis ut. Donec interdum finibus erat, nec condimentum dui fermentum ac.</p>
            </div>
          </div>
          <div className='w-33'>
            <div className='cont'>
              <div className='icon'>
              <i><IoDiamond ></IoDiamond></i>
              </div>
              <h2>100% Money Back Guarantee</h2>
              <p>Nullam fermentum ex at neque aliquam, in ullamcorper neque laoreet. Fusce commodo ultricies massa, vitae feugiat massa iaculis ut. Donec interdum finibus erat, nec condimentum dui fermentum ac.</p>
            </div>
          </div>
          <div className='w-33'>
            <div className='cont'>
              <div className='icon'>
                <i><SiWorldhealthorganization  ></SiWorldhealthorganization ></i>
              </div>
              <h2>100% Money Back Guarantee</h2>
              <p>Nullam fermentum ex at neque aliquam, in ullamcorper neque laoreet. Fusce commodo ultricies massa, vitae feugiat massa iaculis ut. Donec interdum finibus erat, nec condimentum dui fermentum ac.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Our Advantages end */}
    {/* Testimonials start */}

      <div className='test  d-flex'>
            <div className='testimg'>
              <img src={img9}></img>
            </div>
            <div className='text pd-t pd-b'>
              <h1 className='head'>Testimonials</h1>
              <p>Phasellus elementum tempor nulla, eu ultrices odio ultrices at. Duis lorem sapien, rutrum id nibh quis, consectetur eleifend est. Mauris ornare et augue ut dignissim.</p>
              <div className='testslider'>
                <i><RiDoubleQuotesL></RiDoubleQuotesL></i>
                <p>Phasellus elementum tempor nulla, eu ultrices odio ultrices at. Duis lorem sapien, rutrum id nibh quis, consectetur eleifend est. Mauris ornare et augue ut dignissim.</p>
                {/* <div className='textimg'>
                  <img src={img10}></img>
                </div> */}
              </div>
            </div>
      </div>

    {/* Testimonialsend */}
    {/* about us start */}
      <div className='about pd-t pd-b'>
        <div className='contenor'>
          <h1>About Us</h1>
          <p>Phasellus elementum tempor nulla, eu ultrices odio ultrices at. Duis lorem sapien, rutrum id nibh quis, consectetur eleifend est. Mauris ornare et augue ut dignissim.</p>
          <div className='d-flex'>
            <div className='text1 w-50'>In tristique sapien ut sem aliquet pellentesque. Donec sed interdum ex. Nunc semper posuere neque at condimentum. Fusce pretium sit amet est eu feugiat. Curabitur diam diam, accumsan sit amet nibh sed, volutpat posuere justo. Aliquam tempus posuere eros ac bibendum. Vivamus in augue sit amet lectus consectetur consequat. Nunc molestie sem est, mattis pulvinar nisi luctus facilisis.</div>
            <div className='text2 w-50'>Nullam fermentum ex at neque aliquam, in ullamcorper neque laoreet. Fusce commodo ultricies massa, vitae feugiat massa iaculis ut. Donec interdum finibus erat, nec condimentum dui fermentum ac. Sed lectus tellus, posuere semper gravida ut, volutpat et ante. Maecenas eu eros in magna interdum hendrerit et nec nisl.</div>
          </div>
        </div>
      </div>
    {/* about us end */}
    {/* Company Policy start */}
    <div className='comany'>
      <div className='bacimg' style={{
              width:'100%',
              height:'415px',
              backgroundImage:`url(${img11}) `,
              backgroundSize:'cover',
              backgroundPosition:'center',
              }}>
      <div className='contenor '> 
              <h1 className='head'>Company Policy</h1>
              <p>Sed sagittis erat non neque tincidunt, vel ullamcorper ipsum scelerisque. Vestibulum vel eros sit amet risus tincidunt aliquam eu eu augue. Cras sodales, urna eget tempus cursus, turpis dui eleifend mi, ac porttitor orci tortor quis justo. Morbi mattis justo non odio varius, volutpat rutrum urna rhoncus.</p>
              <div className='combtn'>
                <div className='btn'><a>download pdf (1 mb)</a></div>
              </div>
      </div>
      </div>
    </div>
    {/* Company Policy end */}
    {/* Our Products start */}
    <div className='prod'>
      <div className='contenor'>
        <h1 className='head'>Our Products</h1>
        <p>Phasellus elementum tempor nulla, eu ultrices odio ultrices at. Duis lorem sapien, rutrum id nibh quis, consectetur eleifend est. Mauris ornare et augue ut dignissim.</p>
        <div className='prodsec d-flex'>
          <div className='s-1 w-20'>
            <div className='prodimg'>
              <img src={img12}></img>
            </div>
            <h4>Accessories FHG-7000</h4>
            <div className='ret'>
              <FaStar ></FaStar >
              <FaStar ></FaStar >
              <FaRegStar ></FaRegStar>
              <FaRegStar ></FaRegStar>
              <FaRegStar ></FaRegStar>
            </div>
            <div className='pri'> $55.00</div>
            <div><a>Add to cart</a></div>
          </div>
          <div className='s-1 w-20'>
            <div className='prodimg'>
              <img src={img13}></img>
            </div>
            <h4>Cloth 102</h4>
            <div className='ret'>
              <FaStar ></FaStar >
              <FaStar ></FaStar >
              <FaStar ></FaStar >
              <FaRegStar ></FaRegStar>
              <FaRegStar ></FaRegStar>
            </div>
            <div className='pri'> $450.00</div>
            <div><a>Add to cart</a></div>
          </div>
          <div className='s-1 w-20'>
            <div className='prodimg'>
              <img src={img14}></img>
            </div>
            <h4>Cloth GT550</h4>
            <div className='ret'>
              <FaStar ></FaStar >
              <FaStar ></FaStar >
              <FaStar ></FaStar >
              <FaStar ></FaStar >
              <FaStar ></FaStar >
            </div>
            <div className='pri'> $37.00</div>
            <div><a>Add to cart</a></div>
          </div>
          <div className='s-1 w-20'>
            <div className='prodimg'>
              <img src={img15}></img>
            </div>
            <h4>Cloth M580Z</h4>
            <div className='ret'>
              <FaStar ></FaStar >
              <FaStar ></FaStar >
              <FaRegStar ></FaRegStar>
              <FaRegStar ></FaRegStar>
              <FaRegStar ></FaRegStar>
            </div>
            <div className='pri'>$1,500.00</div>
            <div><a>Add to cart</a></div>
          </div>
        </div>
        <div className='see'><a>see all Products</a></div>
      </div>
    </div>
    {/* Our Products end */}
    {/* Our News start */}
      <div className='news'>
        <div className='contenor'>
          <h1>Our News</h1>
          <p className='p'>Phasellus elementum tempor nulla, eu ultrices odio ultrices at. Duis lorem sapien, rutrum id nibh quis, consectetur eleifend est. Mauris ornare et augue ut dignissim.</p>
          <div className='newssec d-flex'>
            <div className='se1 w-33'>
              <div className='newsimg'>
                <img src={img16}></img>
              </div>
              <hr></hr>
              <h1>Set a Fasion Trend</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. </p>
                <p className='date'>May 1, 2017</p>
            </div>
            <div className='se1 w-33'>
              <div className='newsimg'>
                <img src={img17}></img>
              </div>
              <hr></hr>
              <h1>Set a Fasion Trend</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. </p>
                <p className='date'>May 1, 2017</p>
            </div>
            <div className='se1 w-33'>
              <div className='newsimg'>
                <img src={img5}></img>
              </div>
              <hr></hr>
              <h1>Set a Fasion Trend</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. </p>
                <p className='date'>May 1, 2017</p>
            </div>
          </div>
        </div>
        <div className='see'><a>see all Products</a></div>
      </div>
    {/* Our News end */}
    {/* footer start */}
    <div className='footer'>
      <div className='contenor'>
        <div className='footsec d-flex'>
          <div className='sec1 w-20'>
            <img src={img18}></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='sec2 w-20'>
            <h3>Address</h3>
            <hr></hr>
            <div className='cont'>
              <p>6803 Dickens Islands Apt. 567, Port Malikaview, TX 14942</p>
              <p>(062) 109-9222</p>
              <p>contact@good-tailor.com</p>
            </div>
          </div>
          <div className='sec3 w-20'>
            <h3>Extra Links</h3>
            <hr></hr>
            <div className='d-flex cont' >
              <div className='ul'>
                <li><a>Good Tailor</a></li>
                <li><a>Services</a></li>
                <li><a>Blog</a></li>
                <li><a>Good Tailor</a></li>
                <li><a>Services</a></li>
                <li><a>Blog</a></li>
              </div>
            
            </div>
          </div>
          <div className='sec4 w-20'>
            <h3>Recent News</h3>
            <hr></hr>
            <div className='cont'>
              <div className='cont1'>
                <p><a>Set a Fashion Trend!</a></p>
                <p>May 1, 2017</p>
              </div>
              <div className='cont1'>
                <p><a>What’s Better Than One Dress?</a></p>
                <p>April 29, 2017</p>
              </div>
              <div className='cont1'>
                <p><a>False breakage</a></p>
                <p>April 28, 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* footer end */}

   </div>
  );
}

export default App;
