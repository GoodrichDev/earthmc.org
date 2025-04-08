import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const maps = [
    {
        title: '1:326 World Map 1.20+',
        description: 'The newest version of our 1:326 scale Earth map for 1.20+',
        image: '/img/world.avif',
        downloadLink: 'https://cdn.earthmc.org/downloads/earth-1-326.zip',
        docsLink: '/docs/downloads/earth-map',
    },
    {
        title: '1:543 World Map 1.20+',
        description: 'The newest version of our 1:543 scale Earth map for 1.20+',
        image: '/img/world.avif',
        downloadLink: 'https://cdn.earthmc.org/downloads/earth1-543.zip',
        docsLink: '/docs/downloads/1-543-map',
    },
    {
        title: '1:1000 World Map 1.19.3+',
        description: 'The best version of our 1:1000 scale Earth map for 1.19.3+',
        image: '/img/world.avif',
        downloadLink: 'https://cdn.earthmc.org/downloads/earth1000.zip',
        docsLink: '/docs/downloads/1-1000-map',
    }
];

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <main>
                <section className="container">
                    <h2 className="text--center">Explore Minecraft Earth Maps</h2>
                    <p className="text--center">Download and enjoy beautifully crafted Earth maps for Minecraft.</p>
                    <div className="row">
                        {maps.map((map, index) => (
                            <div key={index} className="col col--4">
                                <div className="card">
                                    <div className="card__image">
                                        <img src={map.image} alt={map.title} width="416px" height="208px" />
                                    </div>
                                    <div className="card__body">
                                        <h2>{map.title}</h2>
                                        <p>{map.description}</p>
                                    </div>
                                    <div className="card__footer" style={{ display: 'flex', gap: '10px' }}>
                                        <a href={map.downloadLink} className="button button--primary">Download</a>
                                        <a href={map.docsLink} className="button button--primary">Documentation</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer className="text--center margin-vert--lg">
                <p><img src="/img/cascadia.avif" width="26px" height="16px" alt="Made in Cascadia, an even split green, white, blue flag with a douglas fir in the middle." /> Made in Cascadia</p>
            </footer>
        </Layout>
    );
}
