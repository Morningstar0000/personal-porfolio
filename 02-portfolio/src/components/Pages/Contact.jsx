import React from 'react'
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
        <>
            <div style={{ width: "100%" }}>
                <div id="fadeInUp-animation" className='contact'>
                    <button style={{marginBottom:"20px"}}>Contact</button>
                    <h3>Get In Touch</h3>
                    {/* map */}
                    <div >
                        <div className='map'>
                            <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                        {/* form */}
                        <Form style={{ maxWidth: "100%" }}>
                            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="name" className='formControl' />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Email" className='formControl' />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Message" rows={3} className='formControl' />
                            </Form.Group>
                            <button className='contactbtn mt-2'>Send message</button>
                        </Form>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Contact
