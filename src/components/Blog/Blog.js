import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='px-10 lg:px-48'>
                <h2 className='text-2xl mt-10 mb-2 text-green-400 font-semibold text-justify'>What is the purpose of react router?</h2>
                <p className='font-medium text-lg text-gray-700 text-justify'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>
            <div className='px-10 lg:px-48'>
                <h2 className='text-2xl mt-10 mb-2 text-green-400 font-semibold text-justify'>How does context API works?</h2>
                <p className='font-medium text-lg text-gray-700 text-justify'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.

                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>

            </div>
            <div className='px-10 lg:px-48 pb-10'>
                <h2 className='text-2xl mt-10 mb-2 text-green-400 font-semibold text-justify'>Use of useRef in React</h2>
                <p className='font-medium text-lg text-gray-700 text-justify'>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.

                    There are 2 rules to remember about references:

                    The value of the reference is persisted (stays the same) between component re-renderings;
                    Updating a reference doesn't trigger a component re-rendering.
                    Now, let's see how to use useRef() in practice.
                </p>
            </div>
        </div>
    );
};

export default Blog;