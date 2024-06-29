import React from 'react'
import { Box, Button, Flex, Text } from "@radix-ui/themes";
import Testimonial from './TstCard';
import { Carousel } from 'react-bootstrap';

const cardetails = [
    {
        name: "Halland wahle",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas tempore maiores reiciendis accusamus impedit sapiente dolorum assumenda saepe facilis?",
        profession: "Blogger",
        image:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "John don",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas tempore maiores reiciendis accusamus impedit sapiente dolorum assumenda saepe facilis?",
        profession: "sales marketer",
        image:
            "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop",
    },
    {
        name: "Becky Rose",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas tempore maiores reiciendis accusamus impedit sapiente dolorum assumenda saepe facilis?",
        profession: "Enterpreneur",
        image:
            "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHww",
    },
    {
        name: "Justin Moses",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam voluptas tempore maiores reiciendis accusamus impedit sapiente dolorum assumenda saepe facilis?",
        profession: "Engineer",
        image:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
    },
];

function Tst() {
    return (
        <>
            <div>
                <Box >
                    <div className="Tst">
                        <h3>Testimonial</h3>

                        <div className="TSTbox">
                                <h5>What Clients Say About My Service </h5>
                            <Box mt="1" className="Carousel" >
                                <Carousel  indicators={false}>
                                    {cardetails.map((detail, index) => (
                                        <Carousel.Item key={index}>
                                            <Testimonial detail={detail} />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Box>
                        </div>
                    </div>

                </Box>
            </div>
        </>
    )
}

export default Tst
