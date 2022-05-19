import './Blogs.css'
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2 className='item-text'>BLOGS</h2>

            <div className='container  mx-auto login-div '>
                <Accordion defaultActiveKey="0" flush='true'>
                    <Accordion.Item eventKey="0" className='bg-accordion rounded'>
                        <Accordion.Header ><h6 className='uppercase add-item-text-field '>What is the difference between javascript and nodejs?</h6></Accordion.Header>
                        <Accordion.Body>
                              JavaScript is a programming language. It works in any browser that has a suitable browser engine.On the other hand Nodejs is a JavaScript interpreter and environment with some specialized libraries that JavaScript programming can utilize independently.JS is generally used for any client-side activity in a web application, such as possible attribute validation or refreshing the page at a set interval, or providing some dynamic changes in web pages without refreshing the page.And Nodejs is primarily used to access or perform any non-blocking operating system task.

                              JS runs in any engine whereas Node js runs only in v8 engine
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='bg-accordion rounded'>
                        <Accordion.Header > <h6 className='uppercase add-item-text-field'>When should you use nodejs and when should you use mongodb?</h6> </Accordion.Header>
                        <Accordion.Body>
                            Mainly node js runs the js code.In most common scenarios, when we want to build a server we use Node JS.Whereas MONGODB is a DB engine.When we need to update or manage data by query in a database,we use MONGODB.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='bg-accordion rounded'>
                        <Accordion.Header> <h6 className='uppercase add-item-text-field'>What is the differences between sql and nosql databases?</h6> </Accordion.Header>
                        <Accordion.Body>
                        Structured query language is used in SQL databases.Whereas NoSql is unstructured and have dynamic schemas.SQL databases scale vertically, but NoSQL databases scale horizontally.SQL databases are table-based,while NoSQL databases are mostly document based.And another factor is, SQL databases scale vertically, but NoSQL databases scale horizontally.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;