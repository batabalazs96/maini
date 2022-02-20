import React, { useEffect, useState } from 'react'
import enviroment from '../../config/enviroment'
import axios from 'axios';
import "./InstaFeed.scss"

export const InstaFeed = () => {
  const [instaFeedSrcs, setInstaFeedSrcs] = useState<string[]>([]
  );
  const getInstaFeedImgSrcs = async () => {
    const ids = await axios.get(enviroment.INSTA_API_URL + "me?fields=media&access_token=" + enviroment.INSTA_ACCESS_TOKEN).then(res => res.data.media.data);
    
    const requests = ids.slice(0, 9).map((id: any) => {
      return axios.get(enviroment.INSTA_API_URL + Object.values(id) + "?fields=caption,media_url,username,timestamp&access_token=" + enviroment.INSTA_ACCESS_TOKEN);
    })
    const responses = await Promise.all(requests)
   const srcs = responses.map((res: any) => {
     return res.data.media_url
   })
    const dummySrcs= ["https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/274128564_344031794294817_7963270746009588534_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=HGpKB-KLcN0AX-GAhZp&_nc_ht=scontent-vie1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_dddYZPuFLc8XUyja2JiY8UxuRAyVxcnNXx_Y6RZW_tA&oe=6213D6D3","https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/274128564_344031794294817_7963270746009588534_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=HGpKB-KLcN0AX-GAhZp&_nc_ht=scontent-vie1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_dddYZPuFLc8XUyja2JiY8UxuRAyVxcnNXx_Y6RZW_tA&oe=6213D6D3", "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/274128564_344031794294817_7963270746009588534_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=HGpKB-KLcN0AX-GAhZp&_nc_ht=scontent-vie1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_dddYZPuFLc8XUyja2JiY8UxuRAyVxcnNXx_Y6RZW_tA&oe=6213D6D3","https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/274128564_344031794294817_7963270746009588534_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=HGpKB-KLcN0AX-GAhZp&_nc_ht=scontent-vie1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_dddYZPuFLc8XUyja2JiY8UxuRAyVxcnNXx_Y6RZW_tA&oe=6213D6D3",
    "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/274128564_344031794294817_7963270746009588534_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=HGpKB-KLcN0AX-GAhZp&_nc_ht=scontent-vie1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_dddYZPuFLc8XUyja2JiY8UxuRAyVxcnNXx_Y6RZW_tA&oe=6213D6D3","https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/274128564_344031794294817_7963270746009588534_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=HGpKB-KLcN0AX-GAhZp&_nc_ht=scontent-vie1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_dddYZPuFLc8XUyja2JiY8UxuRAyVxcnNXx_Y6RZW_tA&oe=6213D6D3", "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/274128564_344031794294817_7963270746009588534_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=HGpKB-KLcN0AX-GAhZp&_nc_ht=scontent-vie1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_dddYZPuFLc8XUyja2JiY8UxuRAyVxcnNXx_Y6RZW_tA&oe=6213D6D3","https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/274128564_344031794294817_7963270746009588534_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=HGpKB-KLcN0AX-GAhZp&_nc_ht=scontent-vie1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_dddYZPuFLc8XUyja2JiY8UxuRAyVxcnNXx_Y6RZW_tA&oe=6213D6D3","https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/274128564_344031794294817_7963270746009588534_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=HGpKB-KLcN0AX-GAhZp&_nc_ht=scontent-vie1-1.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_dddYZPuFLc8XUyja2JiY8UxuRAyVxcnNXx_Y6RZW_tA&oe=6213D6D3" ]
    await setInstaFeedSrcs(srcs);
  }
  useEffect(() => {
    //fetch(enviroment.INSTA_API_URL+"me?fields=username,media&access_token="+enviroment.INSTA_ACCESS_TOKEN).then(res=>res.json()).then(res=> console.log(res.media.data));
    getInstaFeedImgSrcs();
    console.log("in insta Feed useEffect");
  }, [])
  return (
    <div className='row insta-feed-row my-3'>
      {instaFeedSrcs.map((src: string,idx) => {
        return(
        <div key={"insta"+idx} className="col-4 col-md-3 insta-feed-col p-0">
          <div key={"insta-square"+idx} className='square'>
            <img key={"insta-img"+idx}  className='insta-feed-img' src={src} alt="" />
          </div>
        </div>)
      })}
    </div>
  )
}
