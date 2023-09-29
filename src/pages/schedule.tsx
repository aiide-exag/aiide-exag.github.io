import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const SchedulePage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2023: Schedule" />
            <Container className="py-5">
                <h1>EXAG 2023 Program Schedule</h1>

                <div className="alert alert-info" role="alert">
                    ⚠️We are working on the schedule. It should be posted soon.
                </div>

                <div className="alert alert-info mb-5" role="alert">
                    <h4>Presentation lengths.</h4>
                    <ul>
                        <li>Full-Paper: 10 minutes + 5 minutes of Q&A</li>
                        <li>Short-Paper: 5 minutes + 3 minutes of Q&A</li>
                        <li>Lightning Talks: 5 minutes</li>
                    </ul>
                </div>

                <h2>📜 Accepted Full Papers</h2>

                <div className="mb-3">
                    <div className="presentation-title">
                        Exploring Minecraft Settlement Generators with
                        Generative Shift Analysis
                    </div>
                    <div className="presentation-speaker">
                        Jean-Baptiste Hervé, Oliver Withington, Marion Hervé,
                        Laurissa Tokarchuk and Christoph Salge
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        HarmonyMapper: Generating Emotionally Diverse Chord
                        Progressions for Games
                    </div>
                    <div className="presentation-speaker">
                        Sara Cardinale and Oliver Withington
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Towards Procedural Generation of Constructed Languages
                        for Games
                    </div>
                    <div className="presentation-speaker">
                        Aaron Cai and Chris Martens
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Knowledge Goal Recognition for Interactive Narratives
                    </div>
                    <div className="presentation-speaker">
                        Cory Siler and Stephen G. Ware
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Enhancing MCTS with Convolutional Autoencoder and Linear
                        Approximator in XCOM-Inspired Environments
                    </div>
                    <div className="presentation-speaker">
                        Yiwei Zhang and Richard Zhao
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Moirai: Enabling Complex Narrative Structure in
                        Simulation-Driven Stories
                    </div>
                    <div className="presentation-speaker">
                        Ben Samuel and Adam Summerville
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Towards Automated Video Game Commentary Using Generative
                        AI
                    </div>
                    <div className="presentation-speaker">
                        Noah Renella and Markus Eger
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Fast, Declarative, Character Simulation Using Bottom-Up
                        Logic Programming
                    </div>
                    <div className="presentation-speaker">
                        Ian Horswill and Samuel Hill
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        An Executable Ontology for Social Simulation
                    </div>
                    <div className="presentation-speaker">
                        Samuel Hill and Ian Horswill
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Thespian: Multi-Character Text Role-Playing Game Agents
                    </div>
                    <div className="presentation-speaker">
                        Christopher Cui, Xiangyu Peng and Mark Riedl
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Little Learning Machines: Real-time deep reinforcement
                        learning as a casual creativity game
                    </div>
                    <div className="presentation-speaker">
                        Dante Camarena, Nicholas Counter, Daniil Markelov,
                        Pietro Gagliano, Don Nguyen, Rhys Becker, Fiona Firby,
                        Zina Rahman, Richard Rosenbaum, Liam A. Clarke and Maria
                        Skibinski
                    </div>
                </div>

                <h2>📄 Accepted Short Papers</h2>

                <div className="mb-3">
                    <div className="presentation-title">
                        Examining Early Professionals' Use of Generative AI in
                        the Game Development Process
                    </div>
                    <div className="presentation-speaker">
                        Josiah Boucher, Yunus Dogan Telliel and Gillian Smith
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Dialogue Shaping: Empowering Agents through NPC
                        Interaction
                    </div>
                    <div className="presentation-speaker">
                        Wei Zhou, Xiangyu Peng and Mark Riedl
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Visual Exploration of Tile Level Datasets
                    </div>
                    <div className="presentation-speaker">
                        Seth Cooper, Faisal Abutarab, Emily Halina and Nathan
                        Sturtevant
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Learning Constrained Graph Layout for Content Generation
                    </div>
                    <div className="presentation-speaker">
                        Seth Cooper and Eden Balema
                    </div>
                </div>

                <div className="mb-3">
                    <div className="presentation-title">
                        Toward using ChatGPT to generate theme-relevant
                        simulated storyworlds
                    </div>
                    <div className="presentation-speaker">
                        Shi Johnson-Bey, Noah Wardrip-Fruin and Michael Mateas
                    </div>
                </div>

                <h2>⚡️ Accepted Lightning Talks</h2>
                <div className="mb-3">
                    <div className="presentation-title">
                        Spacetime Constraints for Gameplay
                    </div>
                    <div className="presentation-speaker">Seth Cooper</div>
                </div>
            </Container>
        </AppLayout>
    );
};

export default SchedulePage;

/*
                <table className="program-schedule">
                    <tbody>
                        <tr>
                            <td className="schedule-time">8:45-9:30 AM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Opening remarks & Meet-and-Greet
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">9:30-10:30 AM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Paper Session #1
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Constraint-Based 2D Tile Game Blending
                                        in the Sturgeon System
                                    </div>
                                    <div className="presentation-speaker">
                                        Seth Cooper
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Pixel VQ-VAEs for Improved Pixel Art
                                        Representation
                                    </div>
                                    <div className="presentation-speaker">
                                        Akash Saravanan and Matthew Guzdial
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Retcon: a Least-Commitment Story-World
                                        System
                                    </div>
                                    <div className="presentation-speaker">
                                        Ian Horswill
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">10:30-11:00 AM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Coffee Break
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">11:00-12:00 PM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Paper Session #2
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Topological Analysis of Open-Endedness
                                        in Video Games
                                    </div>
                                    <div className="presentation-speaker">
                                        Lisa Soros and Nicholas Guttenberg
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Go-Explore Complex 3D Game Environments
                                        for Automated Reachability Testing
                                    </div>
                                    <div className="presentation-speaker">
                                        Cong Lu, Raluca Georgescu and Johan
                                        Verwey
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Level Assembly as a Markov Decision
                                        Process
                                    </div>
                                    <div className="presentation-speaker">
                                        Colan Biemer and Seth Cooper
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">12:00-1:30 PM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Lunch <small>(Attendees on own)</small>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">1:30-1:50 PM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Demo Session #1
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Generate Emergent NPC Behaviours With
                                        Symbolic Reasoning
                                    </div>
                                    <div className="presentation-speaker">
                                        Sylvain Lapeyrade
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">1:50-2:30 PM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Informal Demo Time
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">2:30-3:30 PM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Paper Session #3
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Clustering-based Tile Embedding: A
                                        General Representation for Level Design
                                        with Skewed Tile Distributions
                                    </div>
                                    <div className="presentation-speaker">
                                        Mrunal Jadhav and Matthew Guzdial
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Exploring Adaptive MCTS with TD Learning
                                        in miniXCOM
                                    </div>
                                    <div className="presentation-speaker">
                                        Kimiya Saadat and Richard Zhao
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Improving Deep Localized Level Analysis:
                                        How Game Logs Can Help
                                    </div>
                                    <div className="presentation-speaker">
                                        Natalie Bombardieri and Matthew Guzdial
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2>Tuesday, October 25</h2>
                <table className="program-schedule">
                    <tbody>
                        <tr>
                            <td className="schedule-time">9:30-10:30 AM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Paper Session #1
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        BizMC: A Lua Framework for running Monte
                                        Carlo Tree Search in the BizHawk
                                        emulator
                                    </div>
                                    <div className="presentation-speaker">
                                        William Armstrong and Markus Eger
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        AI-Driven Sonification of Automatically
                                        Designed Games
                                    </div>
                                    <div className="presentation-speaker">
                                        Sara Cardinale, Michael Cook and Simon
                                        Colton
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Generating Real-Time Strategy Game units
                                        Using Search-Based Procedural Content
                                        Generation and Monte Carlo Tree Search
                                    </div>
                                    <div className="presentation-speaker">
                                        Kynan Sorochan and Matthew Guzdial
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">10:30-11:00 AM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Coffee Break
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">11:00-12:00 PM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Paper Session #2
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Visualising Generative Spaces Using
                                        Convolutional Neural Network Embeddings
                                    </div>
                                    <div className="presentation-speaker">
                                        Oliver Withington and Laurissa Tokarchuk
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        Diversity-based Deep Reinforcement
                                        Learning Towards Multidimensional
                                        Difficulty for Fighting Game AI
                                    </div>
                                    <div className="presentation-speaker">
                                        Emily Halina and Matthew Guzdial
                                    </div>
                                </div>
                                <div className="presentation">
                                    <div className="presentation-title">
                                        EAI: Empathetic AI for Empowering
                                        Resilience in Games
                                    </div>
                                    <div className="presentation-speaker">
                                        Reza Habibi, Johannes Pfau, Jonattan
                                        Holmes and Magy Seif El-Nasr
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">12:00-1:30 PM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Lunch <small>(Attendees on own)</small>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="schedule-time">1:30-2:30 PM</td>
                            <td>
                                <div className="schedule-section-title">
                                    Informal Demo Time
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
*/
