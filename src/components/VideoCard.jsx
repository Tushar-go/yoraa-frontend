import React from 'react'

const VideoCard = () => {
  return (
    <div className="relative h-1/2"  >
            <video
            
              className=" h-full rounded-xl "
              autoPlay
              loop
              muted
              src="https://cilvrstudio.com/cdn/shop/videos/c/vp/2b979823f9f248aa90eb1efbeabfc39d/2b979823f9f248aa90eb1efbeabfc39d.HD-1080p-4.8Mbps-38334815.mp4?v=0"
            ></video>

            <div  className="flex items-center absolute bottom-1 left-0 w-full p-2 	">
              <div className="flex justify-center items-center">
                <img
                  className="w-14 h-14 rounded-full object-cover object-top	"
                  src="https://cilvrstudio.com/cdn/shop/files/1_c6cdbca7-3351-4841-a82e-df15d38bd5b8.jpg?v=1729753365&width=165"
                  alt="Product Image"
                />
              </div>
              <div className="ml-2">
                <p className="text-sm">Faded Sand Vintage Denim Set</p>
                <p className="text-xs">Rs. 14,000</p>
              </div>
            </div>

          </div>
  )
}

export default VideoCard