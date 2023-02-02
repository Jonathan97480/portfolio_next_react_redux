import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

interface CarouselItemProps {
    children: React.ReactNode
    width?: number

}

export const CarouselItem = ({ children, width }: CarouselItemProps) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

interface CarouselProps {
    children: React.ReactNode,
    typeController?: 'Circle' | 'btn',
    btnEnabled?: boolean,
    indicatorPosition?: 'top' | 'bottom',
    delay?: number
}

const Carousel = ({ children, typeController = 'btn', btnEnabled = true, indicatorPosition = 'bottom', delay = 3000 }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0
        }

        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1)
            }
        }, delay)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    })

    return (
        <div
            {...handlers}
            className='carousel'
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child: any, index) => {
                    return React.cloneElement(child, { width: '100%' })
                })}
            </div>
            <div className={`indicators ${indicatorPosition === "bottom" ? 'indicators-bottom' : 'indicators-top'}`}>
                <button
                    style={{ display: btnEnabled ? 'block' : 'none' }}
                    onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}
                >
                    Prev
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <span>

                            {
                                typeController === 'btn' ?
                                    <div className='btnIndicator' onClick={() => {
                                        updateIndex(index)
                                    }}>
                                        <span>  {index + 1}</span>

                                    </div> :

                                    <div
                                        onClick={() => {
                                            updateIndex(index)
                                        }}
                                        className={`circle ${index === activeIndex ? 'active' : ''}`}
                                    ></div>
                            }
                        </span>
                    )
                })}
                <button
                    style={{ display: btnEnabled ? 'block' : 'none' }}
                    onClick={() => {
                        updateIndex(activeIndex + 1)
                    }}
                >
                    Next
                </button>
            </div>
        </div >
    )
}

export default Carousel
