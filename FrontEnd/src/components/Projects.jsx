import styles from './Projects.module.css'
import Card from './Card.jsx'

const Projects = () => {
    return (
        <div id="projects">
            <div className={styles.container}>
                <h1>Projects</h1>
                <div className={styles.cardContainer}>
                    <Card title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <Card title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <Card title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <Card title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <Card title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <Card title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />
                    <Card title={'projectTitle'} imageUrl={'imageUrl'} projectText={'projectText'} />

                </div>
            </div>
        </div>
    )
}

export default Projects;