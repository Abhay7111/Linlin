import React, { useRef } from 'react'

function Video_page() {
     const videoRef = useRef(null);
     const [isPlaying, setIsPlaying] = React.useState(false);

     const handlePlayPause = () => {
            if (videoRef.current) {
                  if (isPlaying) {
                         videoRef.current.pause();
                  } else {
                         videoRef.current.play();
                  }
            }
     };

     const [isHovered, setIsHovered] = React.useState(false);

     return (
          <div
               className=' w-full md:w-[60vw] overflow-hidden bg-white rounded-4xl relative flex items-center justify-center md:p-2'
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
          >
               {!isPlaying && (
                    <div
                         className='flex items-center justify-center absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-15 rounded-full related-bg cursor-pointer'
                         onClick={handlePlayPause}
                    >
                         <i className='ri-play-fill text-3xl rounded-2xl text-white'></i>
                    </div>
               )}
               {isPlaying && isHovered && (
                    <div
                         className='flex items-center justify-center absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-15 rounded-full related-bg cursor-pointer'
                         onClick={handlePlayPause}
                    >
                         <i className='ri-pause-fill text-3xl rounded-2xl text-white'></i>
                    </div>
               )}
               <div className='w-full h-full rounded-4xl bg-green-400/10'>
                    <video
                         ref={videoRef}
                         src="https://ik.imagekit.io/xpzegfs4i/4527-179384278_medium.mp4?tr=orig&updatedAt=1758126667663"
                         className='w-full h-full bg-white rounded-[22px]'
                         onPlay={() => setIsPlaying(true)}
                         loop
                         onPause={() => setIsPlaying(false)}
                    ></video>
               </div>
          </div>
     )
}

export default Video_page
