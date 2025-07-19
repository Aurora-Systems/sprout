import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
        {
            protocol: "https",
            hostname: "sproutandco.sirv.com",
            port: "",
            pathname: "/**"
        }
    ]
}
};

export default nextConfig;
