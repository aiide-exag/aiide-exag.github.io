import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const SchedulePage = () => {
  return (
    <AppLayout>
      <Seo title="EXAG 2026: Schedule" />
      <Container className="py-5">
        <h1>EXAG 2026 Program Schedule</h1>

        <div className="alert alert-info mb-5" role="alert">
          ⏰ All presentation times are provided in Brazilian Time (BRT) (UTC/GMT-3).
        </div>
        <a href="/schedule2026.pdf" download="schedule2026.pdf">Download or print the schedule.</a>
        <h2>Overview</h2>
        <img src="/schedule2026.png" alt="schedule overview"/>
        <h2>Detailed Schedule</h2>
        <h3>Monday, November 9th</h3>
        <table className="program-schedule">
          <tbody>
            <tr>
              <td className="schedule-time">9:30-10:00 AM</td>
              <td>
                <div className="schedule-section-title">
                  Opening Remarks
                </div>
                <div className="presentation-speaker">
                  Led by Fiona Shyne
                </div>
                <div>Opening Remarks from the EXAG committee</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">10:00-10:45 AM</td>
              <td>
                <div className="schedule-section-title">
                  Paper Session 1
                </div>
                <div className="presentation-speaker">
                  Led by ravyn Hardcastle
                </div>
                <br/>
                <div className="presentation">
                  <div className="presentation-title">
                    Behavior Cloning of Human Play in osu!
                  </div>
                  <div className="presentation-speaker">
                    Mohamed Amine Kebouchi
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    In the Balance: A Multidimensional Taxonomy of Game Balance for Design and Research
                  </div>
                  <div className="presentation-speaker">
                    Samuel Shields and Edward Melcer
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Local Target Reaching in Games with VLM-Based Initial Detection and Online Object Tracking
                  </div>
                  <div className="presentation-speaker">
                    Ken Kidokoro and Hiroshi Iwasaki
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">10:45-11:15 AM</td>
              <td>
                <div className="schedule-section-title">
                  Break
                </div>
                <div>Enjoy coffee and conversation</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">11:15 AM-12:15 PM</td>
              <td>
                <div className="schedule-section-title">Birds of a Feather</div>
                <div className="presentation-speaker">
                  Led by Fiona Shyne
                </div>
                <div>Break into small groups to discuss the important topics to the EXAG community</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">12:15-1:45 PM</td>
              <td>
                <div className="schedule-section-title">
                  Lunch
                </div>
                <div>Refuel for more EXAG, Lunch not provided</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">1:45-3:45 PM</td>
              <td>
                <div className="schedule-section-title">
                  EXAG Et Al.
                </div>
                <div className="presentation-speaker">
                  Led by Fiona Shyne
                </div>
                <div>Celebrate works outside of traditional research, followed by an informal demo session</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">3:45-4:15 PM</td>
              <td>
                <div className="schedule-section-title">
                  Break
                </div>
                <div>Enjoy coffee and conversation</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">4:15-5:00PM</td>
              <td>
                <div className="schedule-section-title">
                  Paper Session 2
                </div>
                <div className="presentation-speaker">
                  Led by Kaylah Facey
                </div>
                <br/>
                <div className="presentation">
                  <div className="presentation-title">
                    Hybrid LLM–Deterministic Game Agents: Bounded Reasoning with Selective Escalation
                  </div>
                  <div className="presentation-speaker">
                    Aakash Bajpai
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Reinforcement Learning for the Game of Balatro: A Fast Simulator and Two-Policy Training Approach
                  </div>
                  <div className="presentation-speaker">
                    Ajay Vikram Periasami, Anjaneya Gupta, Ethan Cheng and Ivan Rosales
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Adaptability of Unity ML-Agent Sensors for Dynamic Game Environments
                  </div>
                  <div className="presentation-speaker">
                    Lauren DeMaio and Carmine Guida
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Tuesday, November 10th</h3>
        <table className="program-schedule">
          <tbody>
            <tr>
              <td className="schedule-time">9:30-10:00 AM</td>
              <td>
                <div className="schedule-section-title">
                  Opening Remarks
                </div>
                <div className="presentation-speaker">
                  Led by Fiona Shyne
                </div>
                <div>Opening Remarks from the EXAG committee</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">10:00-10:45 AM</td>
              <td>
                <div className="schedule-section-title">
                  Paper Session 3
                </div>
                <div className="presentation-speaker">
                  Led by Ross Mawhorter
                </div>
                <br/>
                <div className="presentation">
                  <div className="presentation-title">
                    A Rational Reconstruction of Ensemble Social Physics
                  </div>
                  <div className="presentation-speaker">
                    Ian Horswill and Samuel Hill
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Tandem Tales: A Paired Storytelling Research Platform
                  </div>
                  <div className="presentation-speaker">
                    Stephen Ware, Lasantha Senanayake and Molly Siler
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Dragon Babble: Utilizing an Extremely Small Language Model for NPCs on Constrained Hardware
                  </div>
                  <div className="presentation-speaker">
                    Andrew Dinspechin, Michael Layne, Jaskarn Mann and Carmine Guida
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">10:45-11:15 PM</td>
              <td>
                <div className="schedule-section-title">
                  Break
                </div>
                <div>Enjoy coffee and conversation</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">11:15 AM-12:45 PM</td>
              <td>
                <div className="schedule-section-title">
                  Mini Game Jam
                </div>
                <div className="presentation-speaker">
                  Led by Fiona Shyne
                </div>
                <div>Sketch out a game in small groups with a given theme</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">12:45-2:30 PM</td>
              <td>
                <div className="schedule-section-title">
                  Lunch
                </div>
                <div>Refuel for more EXAG, lunch not provided</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">2:30-3:15 PM</td>
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
                    Terrain-Adaptive Settlement Placement in Minecraft
                  </div>
                  <div className="presentation-speaker">
                    Aakash Bajpai Conner Tuso, Raymon Sadhra and Markus Eger
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    Generate, Repair, and Validate: A Hybrid Pipeline for Voxel-Based 3D Platforming Environments
                  </div>
                  <div className="presentation-speaker">
                    Luis Eduardo Rasch, Daniel Barretos and Anderson Ferrugem
                  </div>
                </div>
                <div className="presentation">
                  <div className="presentation-title">
                    AIPAGE: The AIIDE Paper Generator
                  </div>
                  <div className="presentation-speaker">
                    Markus Eger
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">3:15-3:45 PM</td>
              <td>
                <div className="schedule-section-title">
                  Break
                </div>
                <div>Enjoy coffee and conversation</div>
              </td>
            </tr>
            <tr>
              <td className="schedule-time">3:45-4:30 PM</td>
              <td>
                <div className="schedule-section-title">
                  Community Session
                </div>
                <div className="presentation-speaker">
                  Led by EXAG committee
                </div>
                <div>
                  Dicuss how EXAG went and how to improve for future years
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

