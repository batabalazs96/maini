import React, { useEffect, useState } from 'react'
import enviroment from '../../config/enviroment'
import axios from 'axios';
import styles from "./InstaFeed.module.scss"
import Image from 'next/image';

export const InstaFeed = ({ srcs }: any) => {
  return (
    <div className={`row  my-3 ${styles.insta_feed_row}`}>
      {srcs.map((src: string, idx: number) => {
        return (
          <div key={"insta" + idx} className="col-4 col-md-3 insta-feed-col p-0">
            <div key={"insta-square" + idx} className={styles.square}>
              <div className={styles.insta_feed_img} >
                <div className='postion-relative'>
                  <Image key={"insta-img" + idx} src={src} alt="" layout='fill' objectFit='cover' objectPosition='top' />
                </div>
              </div>
            </div>
          </div>)
      })}
    </div>
  )
}
