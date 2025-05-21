import React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const SchedulePage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2025: Schedule" />
            <Container className="py-5">
                <h1>EXAG 2024 Program Schedule</h1>

                <div className="alert alert-info mb-5" role="alert">
                    ⏰ All presentation times are provided in Mountain Daylight
                    Time (MDT) (UCT-6).
                </div>
                <h3>TBD</h3>
                <h2>📜 Accepted Full Papers</h2>
                <h3>TBD</h3>
                <h2>📄 Accepted Short Papers</h2>
                <h3>TBD</h3>
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
