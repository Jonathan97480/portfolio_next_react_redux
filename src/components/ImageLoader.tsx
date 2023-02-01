import Image from 'next/image'
import React, { useState, useCallback } from 'react';
import { BiLoader } from 'react-icons/bi';



export interface ImageLoaderProps {
    loading?: 'lazy';
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;


}



export default function ImageLoader({ loading = "lazy", src, alt, width, height, className = "" }: ImageLoaderProps) {


    if (!src) {
        throw new Error('ImageLoader: src is required');
    }

    if (!alt) {
        throw new Error('ImageLoader: alt is required');
    }

    if (!width) {
        throw new Error('ImageLoader: width is required');
    }

    if (!height) {
        throw new Error('ImageLoader: height is required');
    }

    const [isLoaded, setIsLoaded] = useState(true);

    const handleLoad = useCallback(() => {
        setIsLoaded(!isLoaded);
    }, [
        isLoaded,
    ]);





    return (
        <>
            <div className='imageLoader'>
                {
                    isLoaded &&
                    <BiLoader className="imageLoader__loader" />}
                <Image
                    onLoadingComplete={handleLoad}
                    className={className}
                    loading={loading}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>
        </>
    )
}



