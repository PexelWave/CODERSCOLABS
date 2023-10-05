import React from 'react'
import { Card, CardTitle, CardContent, CardFooter, CardHeader } from './ui/card'
import { PiCodeDuotone, PiUsersThreeDuotone } from 'react-icons/pi'


const iconStyles = "text-primary text-5xl mx-auto"


const features: {title: string, icon: React.ReactNode, content: string}[] = [
    {
        icon: <PiUsersThreeDuotone className={iconStyles} />,
        title: "Thriving Community of Coders",
        content: "Discover a vibrant ecosystem of programmers, from beginners eager to take their first steps to seasoned experts looking for their next challenge."
    },
    {
        icon: <PiCodeDuotone className={iconStyles} />,
        title: "Master Programming Skills",
        content: "Whether you want to dive deep into Python, conquer web development, or explore cutting-edge technologies, our comprehensive courses cover it all."
    },
]

const Features = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
        {features.map(({icon, title, content}) => (
            <Card key={title} className='text-center'>
                <CardHeader>
                    {icon}
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>{content}</CardContent>
            </Card>
        ))}
    </div>
  )
}

export default Features