
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.pexels.com",
            }
        ]
    },
    redirects:async()=>{
       return[
          { 
            source:"/contact ",
            destination:"/",
            permanent:false
          }
       ]
    },
    // output:'export' 
};

export default nextConfig;
