import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    title: 'Finance Quantitative & Pricing et Modélisation',
    icon: '📊',
    details: {
      competencies: [
        ' Modélisation et gestion des risques (VaR, ES, CAViaR, Greeks)',
        ' Pricing de produits dérivés (Options, Swaps, Futures, Caps/Floors, Turbos)',
        ' Optimisation de portefeuille (CAPM, Markowitz, Efficient Frontier)',
        ' Stress-testing et analyse de sensibilité',
        ' Analyse quantitative et backtesting'
      ],
      projects: [
        '- Pricing avec le modèle SABR et comparaison des volatilités',
        '- Backtesting de stratégies de trading sur FX, Crypto et Fixed Income',
        '- Simulation de Credit Risk (PD, LGD, EAD)'
      ]
    }
  },
  {
    title: 'Trading Algorithmique & Backtetsting de Stratégies',
    icon: '📈',
    details: {
      competencies: [
        ' Développement et backtesting de stratégies (MACD, RSI, Mean Reversion)',
        ' Trading automatisé sur MetaTrader, Binance API, TradingView',
        ' Intégration d’algorithmes de Machine Learning dans le trading',
        ' Gestion du risque et exécution des ordres en temps réel',
        ' Développement de dashboard VBA/Python pour suivi P&L'
      ],
      projects: [
        '- Algo-trading sur crypto avec Riskfolio-Lib et arbitrage',
        '- Développement d’une stratégie de scalping et swing trading',
        '- Automatisation du PnL monitoring en VBA'
      ]
    }
  },
  {
    title: 'Data Science & Machine Learning appliqués à la Finance',
    icon: '🤖',
    details: {
      competencies: [
        ' Prévision des tendances de marché avec GARCH, ARIMA, ML',
        ' Clustering et analyse factorielle pour la sélection d’actifs',
        ' Automatisation des tâches financières avec ETL & Data Pipelines',
        ' Application des LLMs (Large Language Models) en Finance',
        ' Déploiement d’algorithmes sur SQL Server & API Python'
      ],
      projects: [
        '- Prédiction du marché boursier avec Random Forest et Boosting',
        '- Analyse factorielle des actifs avec PCA et clustering',
        '- Scraping et analyse de news financières pour décisions de trading'
      ]
    }
  },
  {
    title: 'Développement IT & Automatisation en Finance',
    icon: '💻',
    details: {
      competencies: [
        ' Développement en Python, C++, SQL, VBA, JavaScript (React, Vue)',
        ' Création d’applications financières et outils d’analyse de marché',
        ' Intégration et structuration de bases de données financières',
        ' Automatisation et optimisation de processus bancaires',
        ' Développement d’ETL et API pour la récupération de données marché'
      ],
      projects: [
        '- Développement d’une application comptable en VBA',
        '- Automatisation des requêtes SQL pour le Risk Management',
        '- Intégration d’APIs financières pour data streaming et backtesting'
      ]
    }
  }
];

function Expertise() {
  return (
    <Container className="py-3">
      <Row className="g-5">
        {expertiseData.map((domain, index) => (
          <Col key={index} md={4} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="text-center p-0 shadow-sm" style={{ backgroundColor: '#FCE5CD', borderRadius: '10px', minHeight: '50px' }}>
                <Card.Body>
                  <div style={{ fontSize: '3rem' }}>{domain.icon}</div>
                  <Card.Title className="mt-3 fw-bold">{domain.title}</Card.Title>
                  <h6 className="mt-4 fw-bold">📌 Compétences clés et Projets</h6>
                  <ul className="list-unstyled">
                    {domain.details.competencies.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <h6 className="mt-3 fw-bold">📊 Exemples de projets</h6>
                  <ul className="list-unstyled">
                    {domain.details.projects.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Expertise;