import { faAngleLeft, faAngleRight, faCreditCard, faShippingFast, faSmileBeam, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'
import SwiperCarousel from '../conponents/SwiperCarousel/SwiperCarousel'
import styles from '../styles/HomePage.module.scss'
import { InstaFeed } from '../conponents/InstaFeed/InstaFeed'
import axios from 'axios'
const Home: NextPage = ({srcs}:any) => {
  return (<>
    {/* <HomePage /> */}
    <div>
      <div className={`${styles.big_homepage_img} mb-5`}>
        <Image src="/big-img.png" className='landing_img' layout='fill' objectFit='cover' objectPosition='center'/>
        <div className={`${styles.big_img_content} d-flex flex-column`}>
          <div className="text-white"><p>Ami a rétegezéshez nélkülözhetetlen</p></div>
          <div className="text-white ">
            <h3>Könnyű réteges szettek</h3>
          </div>
          <div className={styles.sztorihoz_btn}>
            <a className="" href="">A
              sztorihoz</a>
          </div>
        </div>
      </div>

      {/* Infó */}
      <div className='mx-0 mx-md-5 px-3 px-md-0 d-flex align-items-center'>
        <div className="swiper-button-prev-unique pe-2"><FontAwesomeIcon icon={faAngleLeft} /></div>
        <SwiperCarousel nextElClass={".swiper-button-next-unique"} prevElClass={".swiper-button-prev-unique"} >
          <SwiperSlide>
            <div className='d-flex flex-column align-items-center feature-div'>
              <FontAwesomeIcon className='feature-icon' icon={faSmileBeam} />
              <h5>VÁSÁRLÓI TÁMOGATÁS</h5>
              <p>
                Írj Facebook-on vagy dobj egy e-mailt, ha kérdésed van, és RÖGTÖN válaszolunk! Természetesen a telefont is felvesszük.
                Délelőtt 9:00 és délután 17:00 óra között állunk rendelkezésedre.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='d-flex flex-column align-items-center feature-div'>
              <FontAwesomeIcon className='feature-icon' icon={faShippingFast} />
              <h5>GYORS KISZÁLLÍTÁS</h5>
              <p>
                Add le rendelésed délelőtt 12:00-ig és mi még aznap átadjuk a futárszolgálatnak.
                Másnap már nálad is van a csomagod. Kérdés esetén keress minket bátran a rendeléseddel kapcsolatban.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='d-flex flex-column align-items-center feature-div'>
              <FontAwesomeIcon className='feature-icon' icon={faSyncAlt} />
              <h5>MINŐSÉGI GARANCIA</h5>
              <p>
                A legjobb minőségű termékek, amelyek átvételkor mosolyt csalnak az arcodra.
                30 napos visszavételi garanciát nyújtunk.
                Kérdés nélkül visszaadjuk a vásárolt termék árát.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='d-flex flex-column align-items-center feature-div'>
              <FontAwesomeIcon className='feature-icon' icon={faCreditCard} />
              <h5>MEGBÍZHATÓ, MAGYAR BOLT</h5>
              <p>
                Minden termékünk raktáron van, így nem kell rá heteket várnod!
                Garantáljuk, hogy a termékedet egy héten belül a kezedben tarthatod. Ellenkező esetben ingyen a tiéd!*
              </p>
            </div>
          </SwiperSlide>
        </SwiperCarousel>
        <div className="swiper-button-next-unique ps-2"><FontAwesomeIcon icon={faAngleRight} /></div>
      </div>
      {/* Újdonságok */}
      <div className="container-fluid main mb-5">
        {/* <div className="row">
          {SampleProducts.map((product: any) => {
            return (
              <div className='col-12 col-md-3 my-2'>
                <ProductEntry imgSrc={product['src']} name={product['name']} price={product['price']} badges={product['badge']} discountPrice={product['discountPrice']} />
              </div>
            )
          })}
        </div> */}
        <div className="row">
          <div className="col-12"><h2 className='text-center'>Újdonságok</h2></div>
        </div>
        <div className='row'>
          <div className="col">
            <SwiperCarousel sw={1.5} delay={2000} >
              <SwiperSlide>
                <Image src="https://maini.hu/wp-content/uploads/2022/01/Senna-p%C3%BAder-sliccelt-gomb-d%C3%ADszes-szoknya-3.jpg" width={1500} height={2000} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://maini.hu/wp-content/uploads/2021/12/Hanna-piros-sz%C3%ADn%C5%B1-alkalmi-ruha-5-1500x2000.jpg" width={1500} height={2000} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://maini.hu/wp-content/uploads/2021/12/Hanna-kir%C3%A1ly-k%C3%A9k-sz%C3%ADn%C5%B1-alkalmi-ruha-2-1500x2000.jpg" width={1500} height={2000} />
              </SwiperSlide>
              <SwiperSlide>
                <Image src="https://maini.hu/wp-content/uploads/2021/12/Hanna-pezsg%C5%91-sz%C3%ADn%C5%B1-alkalmi-ruha-6-1500x2000.jpg" width={1500} height={2000} />
              </SwiperSlide>
            </SwiperCarousel>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-center">
            <a href="" className={`btn ${styles.news_btn}`}>TOVÁBB</a>
          </div>
        </div>
        {/* Kollázs */}
        <div className="row mt-5">
          <div className="col-md-6">
            <div className={`position-relative ${styles.inside_bordered_img}`}>
              <Image src="/kep1.jpg" width={300} height={300} layout="responsive" quality={90} />
              <div className={styles.text} >
                <span>Teszt</span>
                <button className={styles.white + " px-5"}>Teszt Gomb</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between">
            <div className={`position-relative ${styles.inside_bordered_img}`}>
              <Image src="/kep2.jpg" width={300} height={300} layout="responsive" quality={90} />
              <div className={styles.text} >
                <span>Teszt</span>
                <button className={styles.white + " px-5"}>Teszt Gomb</button>
              </div>
            </div>
            <div className={`position-relative ${styles.inside_bordered_img}`}>
              <Image src="/kep3.jpg" width={300} height={300} layout="responsive" quality={90} />
              <div className={styles.text} >
                <span>Teszt</span>
                <button className={styles.white + " px-5"}>Teszt Gomb</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`position-relative ${styles.inside_bordered_img}`}>
              <Image src="/keph.jpg" width={185} height={380} layout="responsive" quality={75} />
              <div className={styles.text} >
                <span>Teszt</span>
                <button className={styles.black + " px-5"}>Teszt Gomb</button>
              </div>
            </div>
          </div>
        </div>

        {/* Postok */}
        <div className="row mt-5">
          <div className="col-12"><h2 className='text-center'>Blogok</h2></div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <SwiperCarousel delay={2000} lgSPV={6} mdSPV={6}>
              <SwiperSlide>
                <a href="#">
                  <div>
                    <Image src="/Blog/1.jpg" width={1200} height={800} />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div>
                    <Image src="/Blog/2.jpg" width={1200} height={800} />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div>
                    <Image src="/Blog/3.jpg" width={1200} height={800} />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div>
                    <Image src="/Blog/4.jpg" width={1200} height={800} />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div>
                    <Image src="/Blog/5.jpg" width={1200} height={800} />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div>
                    <Image src="/Blog/6.jpg" width={1200} height={800} />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div>
                    <Image src="/Blog/7.jpg" width={1200} height={800} />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div>
                    <Image src="/Blog/8.jpg" width={1200} height={800} />
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="#">
                  <div>
                    <Image src="/Blog/9.jpg" width={1200} height={800} />
                  </div>
                </a>
              </SwiperSlide>
            </SwiperCarousel>
          </div>
        </div>
        <InstaFeed srcs={srcs} />
      </div>
    </div>
  </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const ids = await axios.get(process.env.INSTA_API_URL + "me?fields=media&access_token=" + process.env.INSTA_ACCESS_TOKEN).then(res => res.data.media.data);
  const requests = ids.slice(0, 15).map((id: any) => {
    return axios.get(process.env.INSTA_API_URL + String(Object.values(id)) + "?fields=caption,media_url,media_type,username,timestamp&access_token=" + process.env.INSTA_ACCESS_TOKEN);
  })
  const responses = await Promise.all(requests)
  const resSrcs:any = [];
  responses.map((res: any) => {
    if(res.data.media_type !== "VIDEO"){
      resSrcs.push(res.data.media_url);
    } 
  })
  const srcs = resSrcs.slice(0,9);
  const posts = responses.map((res: any) => {
    return res.data
  })

  return {
    props: {
      srcs
    },
  }
}

export default Home
