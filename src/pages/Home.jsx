import {motion} from 'framer-motion';

function Home() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.95}}
            transition={{duration: 0.5}}
        >
            <h1>Kade Bolen Portfolio</h1>
            <h3>Introduction</h3>
            <p>
                &emsp;Hello, I'm Kade Bolen and welcome to my portfolio website! This site serves as an online portfolio where
                I keep information about myself and my projects. It exists as a simple way for anyone to learn about
                what kind of person I am and what kind of things I put my time and energy into.
            </p>
            <p>
                &emsp;I have been storing images and other files across multiple platforms since taking on larger projects,
                and I recently realized that this is not a sustainable way to manage my own history. So, as a secondary
                purpose, I am using this webpage as my own personal archive for each and every project I've been a part
                of. As a student studying Computer Science as well as someone who enjoys learning more about it, I
                approached this situation as a challenge to create my own website from scratch rather than simply
                compiling my documentation into a google drive or similar.
            </p>

            <h3>Usage</h3>
            <p>
                &emsp;This website is divided into four different pages, one of them being the home page that you're in right
                now. The other three are the "Projects", "About Me", and "Contacts" page which can be accessed via the
                navigation bar at the top of the page. The nav bar will persist across each page to enable simple moves
                to and from any page.
            </p>
        </motion.section>
    );
}

export default Home;