import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const SchedulePage = () => {
  return (
    <AppLayout>
      <Seo title="EXAG 2025: Schedule" />
      <Container className="py-5">
        <h1>EXAG 2025 Program Schedule</h1>

        <div className="alert alert-info mb-5" role="alert">
          ⏰ All presentation times are provided in Mountain Daylight
          Time (MDT) (UCT-6).
        </div>
        <a href="/schedule2025.pdf" download="schedule2025.pdf">Download or print the schedule.</a>
        <h2>Overview</h2>
        <img src="/schedule2025.png" alt="schedule overview"/>
        <h2>Detailed Schedule</h2>
        <h3>Monday, November 10th</h3>
        <table className="program-schedule">
          <tbody>
            <tr>
              <td className="schedule-time">9:00-9:30 AM</td>
              <td>
                <div className="schedule-section-title">
                  Opening Remarks
                </div>
                <div className="presentation-speaker">
                  Led by Fiona Shyne
                </div>
                <div>Opening Remarks from EXAG and INT committees</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">9:30-10:45 AM</td>
              <td>
                <div className="schedule-section-title">
                  EXAG Paper Session 1
                </div>
                <div className="presentation-speaker">
                  Led by Kaylah Facey
                </div>
                <br/>
                <div className="presentation">
                  <div className="presentation-title">
                    Playtrace Arc Search: A Tool to Explore and Evaluate Large Spaces of Playtrace Metrics Through User-Defined Curves
                  </div>
                  <div className="presentation-speaker">
                    Samuel Shields, Noah Wardrip-Fruin and Edward Melcer
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    PCG-SAF: Procedural Content Generation via Self-Assembling Figures for Tabletop Games
                  </div>
                  <div className="presentation-speaker">
                    Fiona Shyne and Seth Cooper
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Using Exploratory Agents to Evaluate Game Environments
                  </div>
                  <div className="presentation-speaker">
                    Bobby Khaleque, Mike Cook and Jeremy Gow
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Voxel-Based Spatio-Temporal Visualization of Gameplay Traces with Anomaly Detection
                  </div>
                  <div className="presentation-speaker">
                    Ling Liu, Colan Biemer, Günter Wallner and Seth Cooper
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Quest to Dungeon (QtD): Towards a Tool that Supports Collaboration between Narrative and Level Designers
                  </div>
                  <div className="presentation-speaker">
                    Oscar Boutani, Sam Shariati and Alberto Alvarez
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">10:45-11:15 AM</td>
              <td>
                <div className="schedule-section-title">
                  Coffee Break
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">11:15 AM-12:45 PM</td>
              <td>
                <div className="schedule-section-title">Speculative Game Jam</div>
                <div className="presentation-speaker">
                  Led by Fiona Shyne
                </div>
                <div>Participate in an exploratory game jam session</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">12:45-1:45 PM</td>
              <td>
                <div className="schedule-section-title">
                  Lunch
                </div>
                <div><em>Lunch not provided</em></div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">1:45-3:00 PM</td>
              <td>
                <div className="schedule-section-title">
                  EXAG Paper Session 2
                </div>
                <div className="presentation-speaker">
                  Led by Kaylah Facey
                </div>
                <br/>
                <div className="presentation">
                  <div className="presentation-title">
                    Unifying Behavior Trees and Logic Programming
                  </div>
                  <div className="presentation-speaker">
                    Samuel Hill and Ian Horswill
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Controllable, Demographically-Guided Character Generation using Stochastic Logic Programming
                  </div>
                  <div className="presentation-speaker">
                    Ian Horswill
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Evaluating the impact of MDP-based level assembly on player experience
                  </div>
                  <div className="presentation-speaker">
                    Colan Biemer and Seth Cooper
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    A Constraint-Based Graph Grammar Approach Unifying Level and Playthrough Generation
                  </div>
                  <div className="presentation-speaker">
                    Seth Cooper and Mahsa Bazzaz
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Procedural Level Generation via Program Inversion
                  </div>
                  <div className="presentation-speaker">
                    Harper Noteboom, Kalyani Nair and Seth Cooper
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">3:00-3:30 PM</td>
              <td>
                <div className="schedule-section-title">
                  Coffee Break
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">3:30-5:00 PM</td>
              <td>
                <div className="schedule-section-title">
                  Demo Session
                </div>
                <div className="presentation-speaker">
                  Led by Fiona Shyne
                </div>
                <div>Explore works in progress and interactives</div>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Tuesday, November 11th</h3>
        <table className="program-schedule">
          <tbody>
            <tr>
              <td className="schedule-time">9:00-10:00 AM</td>
              <td>
                <div className="schedule-section-title">
                  Keynote Speaker
                </div>
                <div className="presentation-speaker">
                  Given by Mike Cook
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">10:00-10:30 AM</td>
              <td>
                <div className="schedule-section-title">
                  Coffee Break
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">10:30-11:30 AM</td>
              <td>
                <div className="schedule-section-title">
                  INT Paper Session
                </div>
                <div className="presentation-speaker">
                  Led by Olga Koldachenko
                </div>
                <br/>
                <div className="presentation">
                  <div className="presentation-title">
                    Amorphous Interpretations: Diverse Narrative Generation for Open-Ended Simulation Environments
                  </div>
                  <div className="presentation-speaker">
                    Dipika Rajesh, Julian Togelius and M Charity
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Designing a Modular, Scalable Benchmark for Narrative Experience Management
                  </div>
                  <div className="presentation-speaker">
                    Molly Siler, Stephen G. Ware, Gage Birchmeier, Mira Fisher and Lasantha Senanayake
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">11:30 AM-12:00 PM</td>
              <td>
                <div className="schedule-section-title">
                  Coffee Break
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">12:00-1:15 PM</td>
              <td>
                <div className="schedule-section-title">
                  EXAG Paper Session 3
                </div>
                <div className="presentation-speaker">
                  Led by Kaylah Facey
                </div>
                <br/>
                <div className="presentation">
                  <div className="presentation-title">
                    We Call This Controller Skip: AI for Speedrunning
                  </div>
                  <div className="presentation-speaker">
                    Michael Cook, M Charity, Maren Awiszus, Alexander Dockhorn and Filippo Carnovalini
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Pretraining Graph State Encoders for microRTS using Graph Self-Supervised Learning
                  </div>
                  <div className="presentation-speaker">
                    Pavan Kantharaju
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Detecting Neural Network Driven Bots in Super Mario Bros
                  </div>
                  <div className="presentation-speaker">
                    Caleb Cavilla and Jonathan Hudson
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Towards Cognitive-Plausible Explanations for Board Game Agents with Genetic Programming
                  </div>
                  <div className="presentation-speaker">
                    Manuel Eberhardinger, Florian Rupp, Florian Richoux, Johannes Maucher and Setareh Maghsudi
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">1:15-2:15 PM</td>
              <td>
                <div className="schedule-section-title">
                  Lunch
                </div>
                <div><em>Lunch not provided</em></div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">2:15-3:30 PM</td>
              <td>
                <div className="schedule-section-title">
                  EXAG Paper Session 4
                </div>
                <div className="presentation-speaker">
                  Led by Kaylah Facey
                </div>
                <br/>
                <div className="presentation">
                  <div className="presentation-title">
                    Procedural Content Generation in Minecraft via Disentangled Representation Learning Models
                  </div>
                  <div className="presentation-speaker">
                    Tim Merino, Yifan Zhang and Julian Togelius
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Narrative-to-Scene Generation: An LLM-Driven Pipeline for 2D Game Environments
                  </div>
                  <div className="presentation-speaker">
                    Yi-Chun Chen and Arnav Jhala
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    A Markovian Framing of Wave Function Collapse for Procedurally Generating Aesthetically Complex Environments
                  </div>
                  <div className="presentation-speaker">
                    Franklin Yiu, Mohan Lu, Nina Li, Kevin Joseph, Tianxu Zhang, Julian Togelius, Timothy Merino and Sam Earle
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Generating Three-Star System Puzzles using Solution Enumeration Fitness for a Lattice Protein Folding Game
                  </div>
                  <div className="presentation-speaker">
                    Yaejie Kwon, Fiona Shyne and Seth Cooper
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    The Nintendo Artificial Neural Network System
                  </div>
                  <div className="presentation-speaker">
                    Carmine Guida and Lauren DeMaio
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">3:30-4:00 PM</td>
              <td>
                <div className="schedule-section-title">
                  Coffee Break
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">4:00-5:00 PM</td>
              <td>
                <div className="schedule-section-title">
                  Community Session
                </div>
                <div className="presentation-speaker">
                  Led by Kaylah Facey
                </div>
                <div>
                  Townhall to give feedback about the workshop
                </div>
                <div></div>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </AppLayout>
  );
};

export default SchedulePage;

