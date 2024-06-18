import './App.css';
import { delay, motion } from 'framer-motion'

const animation = {
    hidden: {
        x: -250,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
}


function Projects() {
    return (
        <div className="container">
            <motion.div variants={animation} initial="hidden" whileInView="visible" className="Projects">
                <motion.div custom={1} variants={animation} className="myProjects">
                    <img src="/img/HURMMA.png" alt="" />
                    <div className="text">
                        <p>
                            <p className="yellowText">HURRMA</p>
                            Marketplace
                        </p>
                        <a className='viewD' target='_blank' href="https://hurmma.com">View Details</a>
                    </div>
                </motion.div>
                <motion.div custom={3} variants={animation} className="myProjects">
                    <img src="/img/lidercargo.png" alt="" />
                    <div className="text">
                        <p>
                            <p className="yellowText">LIDER CARGO</p>
                            Trucking manager
                        </p>
                        <a className='viewD' target='_blank' href="https://lidercargo.net">View Details</a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )

}


export default Projects;
