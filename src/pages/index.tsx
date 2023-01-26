/* eslint-disable react/no-unescaped-entities */
import { Main } from "@/components";
import Carousel, { CarouselItem } from "@/components/Carousel";
import { Button } from "@/components/ux";
import Image from "next/image";



export default function Home() {

    return (
        <Main
            pageTitle={"Page d'accueille"}
            pageDescription={`Bienvenue sur Jon_dev, votre destination pour tout ce qui concerne le développement web et mobile. 
            Nous offrons des services professionnels pour créer et améliorer vos sites web et applications. 
            Notre équipe expérimentée peut vous aider à atteindre vos objectifs. 
            Visitez notre site pour en savoir plus sur nos services et pour obtenir des conseils sur le développement.`}>
            {/*   <section>
                <Carousel>
                    <CarouselItem>
                        <div>
                            <Image src={require('../images/cover/projet.jpg')} alt="logo du site" width={1280} height={600} />
                              <div>
                                <h2>Vous avez un projet </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Aliquam tellus at non ac nibh ut. Ultrices mollis facilisi eu pellentesque id tristique quam et tortor. Lacinia elit felis hendrerit aliquam.

                                </p>
                            </div> 
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>
                            <Image src={require('../images/cover/services.jpg')} alt="logo du site" width={1280} height={600} />
                                  <div>
                                <h2>Notre xpérience à votre service</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Aliquam tellus at non ac nibh ut. Ultrices mollis facilisi eu pellentesque id tristique quam et tortor. Lacinia elit felis hendrerit aliquam.

                                </p>
                            </div> 
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>
                            <Image src={require('../images/cover/remarque.jpg')} alt="logo du site" width={1280} height={600} />
                                  <div>
                                <h2>Faite vous remarqué </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Aliquam tellus at non ac nibh ut. Ultrices mollis facilisi eu pellentesque id tristique quam et tortor. Lacinia elit felis hendrerit aliquam.

                                </p>
                            </div> 
                        </div>
                    </CarouselItem>
                </Carousel>
            </section>
            <section>
                <h2>Qui sommes nous</h2>
                <div>
                    <Image src={require('../images/cover/about.jpg')} alt="logo du site" width={576} height={309} />
                    <div>
                        <p>
                            Jon_dev est une auto entreprise de profession libérale spécialisée dans le développement web et mobile pour les petites et moyennes entreprises. elle à pour objectif de permettre à nos clients d'être visibles sur Internet en utilisant les dernières technologies telles que React, React Native, Nextjs, WordPress, PrestaShop, Strapi, Firebase et Redux...
                        </p>
                        <Button
                            onClick={() => { }}
                            text="En savoir plus"
                        />

                    </div>
                </div>
            </section>
            <section>
                <h2>Nos derniéres projets</h2>
                <Carousel>
                    <CarouselItem>
                        <div>
                            <h2>Titre du projet</h2>
                            <div>
                                <Image src={require('../images/cover/projet.jpg')} alt="logo du site" width={397} height={252} />
                                <div>
                                    <h3>Technologies utiliser  </h3>
                                    <span>
                                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                                    </span>
                                    <div>
                                        <h4>Liens utiles </h4>
                                        <span>
                                            <a href="">Android</a>
                                            <a href="">IPhone</a>
                                            <a href="">Site</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>
                            <h2>Titre du projet</h2>
                            <div>
                                <Image src={require('../images/cover/projet.jpg')} alt="logo du site" width={397} height={252} />
                                <div>
                                    <h3>Technologies utiliser  </h3>
                                    <span>
                                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                                    </span>
                                    <div>
                                        <h4>Liens utiles </h4>
                                        <span>
                                            <a href="">Android</a>
                                            <a href="">IPhone</a>
                                            <a href="">Site</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div>
                            <h2>Titre du projet</h2>
                            <div>
                                <Image src={require('../images/cover/projet.jpg')} alt="logo du site" width={397} height={252} />
                                <div>
                                    <h3>Technologies utiliser  </h3>
                                    <span>
                                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                                        <Image src={require('../images/icons/strapi.png')} alt="logo du site" width={50} height={50} />
                                    </span>
                                    <div>
                                        <h4>Liens utiles </h4>
                                        <span>
                                            <a href="">Android</a>
                                            <a href="">IPhone</a>
                                            <a href="">Site</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </Carousel>

            </section>

            <section>
                <h2>Nos méthode de travail</h2>
                <div>
                    <Carousel>
                        <CarouselItem>
                            <div>
                                <Image src={require('../images/cover/projet.jpg')} alt="logo du site" width={533} height={546} />
                                <div>
                                    <span>1</span>
                                    <h2>Discussion du projet avec le client</h2>
                                    <p>
                                        Le client nous a fourni des informations détaillées sur ses attentes pour ce projet, ainsi que sur ses objectifs commerciaux. Nous allons maintenant commencer à définir l'apparence de son site web ou de son application mobile, en collaboration avec lui.
                                    </p>
                                </div>
                            </div>

                        </CarouselItem>
                        <CarouselItem>
                            <div>
                                <Image src={require('../images/cover/wireframe.jpg')} alt="logo du site" width={533} height={546} />
                                <div>
                                    <span>2</span>
                                    <h2>Conception Wireframe </h2>
                                    <p>
                                        Le client nous a fourni des informations détaillées sur ses attentes pour ce projet, ainsi que sur ses objectifs commerciaux. Nous allons maintenant commencer à définir l'apparence de son site web ou de son application mobile, en collaboration avec lui.
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div>
                                <Image src={require('../images/cover/maquette.jpg')} alt="logo du site" width={533} height={546} />
                                <div>
                                    <span>3</span>
                                    <h2>Conception Maquette </h2>
                                    <p>
                                        La maquette sera également soumise au client pour validation. De plus, nous nous occupons de créer un Moodboard pour assister le client dans la définition de la charte graphique.
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div>
                                <Image src={require('../images/cover/development.jpg')} alt="logo du site" width={533} height={546} />
                                <div>
                                    <span>4</span>
                                    <h2>Développement </h2>
                                    <p>
                                        Le client peut suivre l'avancée de son projet en accédant à son compte client sur notre site, où il peut accéder à des informations détaillées sur l'évolution de son projet et communiquer directement avec l'équipe de développement.
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div>
                                <Image src={require('../images/cover/start.jpg')} alt="logo du site" width={533} height={546} />
                                <div>
                                    <span>5</span>
                                    <h2>Déploiment </h2>
                                    <p>
                                        Avant de procéder à son déploiement public, le site web ou l'application mobile est soumis à des tests utilisateurs pendant une semaine. Cela nous permet de vérifier la qualité et la fonctionnalité du produit final. Une fois ces tests effectués avec succès, nous mettons le produit à disposition de tous les utilisateurs.
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </section> */}
        </Main>
    )
}