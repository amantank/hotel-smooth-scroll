import React, { useEffect, useState } from "react";
import axios from "axios";

interface InstagramPost {
    id: string;
    media_url: string;
    caption?: string;
    permalink: string;
}

const InstagramFeed: React.FC = () => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [error, setError] = useState<string | null>(null);

    const ACCESS_TOKEN = "YOUR_INSTAGRAM_ACCESS_TOKEN"; // Replace with your token
    const apiURL = `https://graph.instagram.com/me/media?fields=id,media_url,caption,permalink&access_token=${ACCESS_TOKEN}`;

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await axios.get(apiURL);
                setPosts(response.data.data);
            } catch (error) {
                console.error("Error fetching Instagram posts:", error);
                setError("Failed to fetch Instagram posts.");
            }
        };

        fetchInstagramPosts();
    }, []);

    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                Latest from Instagram
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <a
                        key={post.id}
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                    >
                        <img
                            src={post.media_url}
                            alt={post.caption || "Instagram Post"}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4 bg-white">
                            <p className="text-sm text-gray-700">
                                {post.caption?.length > 100 ? post.caption.slice(0, 100) + "..." : post.caption}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default InstagramFeed;
