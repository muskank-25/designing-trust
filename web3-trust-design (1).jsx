import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, XCircle, CheckCircle, ChevronDown, ChevronRight, Info, Clock, Zap, TrendingUp, Users, FileText, ExternalLink } from 'lucide-react';

const Web3TrustDesign = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeDemo, setActiveDemo] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Sora:wght@300;400;600;700;800&display=swap');
        
        * {
          font-family: 'Sora', -apple-system, sans-serif;
        }
        
        .mono {
          font-family: 'Space Mono', monospace;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-in {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .animate-in-delayed {
          animation: slideInUp 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
        
        .trust-glow-green {
          box-shadow: 0 0 40px rgba(34, 197, 94, 0.3), 0 0 80px rgba(34, 197, 94, 0.1);
        }
        
        .trust-glow-yellow {
          box-shadow: 0 0 40px rgba(251, 191, 36, 0.3), 0 0 80px rgba(251, 191, 36, 0.1);
        }
        
        .trust-glow-red {
          box-shadow: 0 0 40px rgba(239, 68, 68, 0.3), 0 0 80px rgba(239, 68, 68, 0.1);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-strong {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .phone-mockup {
          background: linear-gradient(145deg, #1e293b 0%, #0f172a 100%);
          box-shadow: 
            0 0 0 8px rgba(15, 23, 42, 0.5),
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 1px 2px rgba(255, 255, 255, 0.1);
        }
        
        .trust-score-ring {
          position: relative;
        }
        
        .trust-score-ring::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          padding: 4px;
          background: conic-gradient(from 0deg, transparent, currentColor);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        
        .tab-active {
          position: relative;
        }
        
        .tab-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
        }
      `}</style>

      {/* Header */}
      <header className="border-b border-white/10 glass-strong sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className={`flex items-center justify-between ${animateIn ? 'animate-in' : ''}`}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Web3 Trust Protocol</h1>
                <p className="text-sm text-slate-400 mono">Designing Confidence in Permissionless Systems</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg glass hover:bg-white/10 transition-all text-sm font-medium">
                View on GitHub
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-white/10 glass sticky top-[89px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: FileText },
              { id: 'problems', label: 'Current Problems', icon: AlertTriangle },
              { id: 'solution', label: 'Our Solution', icon: CheckCircle },
              { id: 'demos', label: 'Live Demos', icon: Zap },
              { id: 'decisions', label: 'Design Decisions', icon: TrendingUp }
            ].map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? 'text-blue-400 tab-active' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-in">
            <section>
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold mb-4 gradient-text">
                  Trust in a Trustless World
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Web3 gives users complete control—and complete responsibility. Our mission is to help users feel confident in their actions without compromising decentralization.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Shield,
                    title: 'Context: Crypto Wallet',
                    description: 'Transaction approval flow redesigned for the critical moment when users sign transactions',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: AlertTriangle,
                    title: 'The Problem',
                    description: 'Users confirm transactions without understanding consequences, leading to scams and lost funds',
                    color: 'from-amber-500 to-orange-500'
                  },
                  {
                    icon: CheckCircle,
                    title: 'The Solution',
                    description: 'Trust-first approval system with risk scoring, outcome simulation, and contextual education',
                    color: 'from-green-500 to-emerald-500'
                  }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="glass-strong rounded-2xl p-6 hover-lift"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="glass-strong rounded-2xl p-8 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Info className="w-6 h-6 text-blue-400" />
                  Why This Matters
                </h3>
                <div className="space-y-3 text-slate-300">
                  <p className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">▸</span>
                    <span>Users lose millions daily to malicious token approvals that drain wallets</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">▸</span>
                    <span>Interactions with unverified smart contracts pose hidden risks</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">▸</span>
                    <span>Wrong address transactions have no recourse or recovery</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">▸</span>
                    <span>Gas fees and transaction implications remain mysterious to most users</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">▸</span>
                    <span>Phishing attacks successfully mimic legitimate dApps</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Problems Tab */}
        {activeTab === 'problems' && (
          <div className="space-y-8 animate-in">
            <div>
              <h2 className="text-4xl font-bold mb-4 gradient-text">Current Problems in Existing Flows</h2>
              <p className="text-slate-300 text-lg mb-8">
                Most wallets fail users at the moment of truth—when they need to decide whether to sign a transaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Cryptographic Overload',
                  problem: 'Users see "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D" instead of "Uniswap Router"',
                  impact: 'Creates cognitive burden and forces blind trust',
                  frequency: 'Every transaction',
                  severity: 'high'
                },
                {
                  title: 'No Risk Context',
                  problem: "Can't distinguish between sending $10 vs. approving unlimited token access",
                  impact: 'Users unknowingly grant dangerous permissions',
                  frequency: 'Token approvals',
                  severity: 'critical'
                },
                {
                  title: 'Hidden Consequences',
                  problem: 'No visibility into state changes after signing',
                  impact: 'Surprises and regret after transaction confirms',
                  frequency: 'Smart contract interactions',
                  severity: 'high'
                },
                {
                  title: 'Assumed Knowledge',
                  problem: 'Interfaces assume users understand gas, nonces, and contract internals',
                  impact: 'Alienates newcomers and causes confusion',
                  frequency: 'Every transaction',
                  severity: 'medium'
                },
                {
                  title: 'No Trust Signals',
                  problem: 'Legitimate and malicious contracts look identical',
                  impact: 'No way to verify safety before signing',
                  frequency: 'All new contracts',
                  severity: 'critical'
                },
                {
                  title: 'Binary Decisions',
                  problem: 'Only "Approve" or "Reject" — no gradual trust building',
                  impact: 'Forces all-or-nothing choices',
                  frequency: 'Every transaction',
                  severity: 'medium'
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`glass-strong rounded-2xl p-6 border-l-4 hover-lift ${
                    item.severity === 'critical' ? 'border-red-500' :
                    item.severity === 'high' ? 'border-orange-500' :
                    'border-yellow-500'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-bold mono ${
                      item.severity === 'critical' ? 'bg-red-500/20 text-red-300' :
                      item.severity === 'high' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {item.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-3 leading-relaxed">{item.problem}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-400">
                      <span className="font-semibold text-slate-300">Impact:</span> {item.impact}
                    </p>
                    <p className="text-slate-400">
                      <span className="font-semibold text-slate-300">Frequency:</span> {item.frequency}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-400" />
                Real User Pain Points
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    persona: 'Beginner Users',
                    emoji: '😰',
                    quote: "I have no idea what 'gas limit' means or why I need to pay it. I'm just trying to buy an NFT."
                  },
                  {
                    persona: 'Intermediate Users',
                    emoji: '⚠️',
                    quote: "I approved a token once and now this random site can access all my tokens? How was I supposed to know?"
                  },
                  {
                    persona: 'Advanced Users',
                    emoji: '🔍',
                    quote: "I check Etherscan for every transaction, but I shouldn't need a PhD to buy lunch with crypto."
                  }
                ].map((user, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-6">
                    <div className="text-4xl mb-3">{user.emoji}</div>
                    <h4 className="font-bold text-lg mb-2 text-purple-300">{user.persona}</h4>
                    <p className="text-slate-300 italic leading-relaxed">"{user.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Solution Tab */}
        {activeTab === 'solution' && (
          <div className="space-y-8 animate-in">
            <div>
              <h2 className="text-4xl font-bold mb-4 gradient-text">The Trust-First Approval System</h2>
              <p className="text-slate-300 text-lg mb-8">
                A complete redesign of transaction approval that prioritizes understanding, transparency, and user confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Progressive Disclosure',
                  description: 'Show what users need first, advanced details on demand',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: AlertTriangle,
                  title: 'Visual Risk Signals',
                  description: 'Color-coded trust scores based on verifiable data',
                  color: 'from-amber-500 to-orange-500'
                },
                {
                  icon: Zap,
                  title: 'Outcome Simulation',
                  description: 'Show "before and after" states in plain language',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: FileText,
                  title: 'Contextual Education',
                  description: 'Explain concepts inline, when relevant',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((principle, i) => (
                <div 
                  key={i}
                  className="glass-strong rounded-2xl p-6 hover-lift"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center mb-4`}>
                    <principle.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                  <p className="text-slate-400">{principle.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  title: '1. Trust Score System',
                  type: 'innovation',
                  content: (
                    <div className="space-y-4">
                      <p className="text-slate-300 leading-relaxed">
                        A <strong className="text-blue-400">dynamic trust score (0-100)</strong> calculated from multiple verifiable signals:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          'Contract verification status on Etherscan',
                          'Age of contract (older = more tested)',
                          'Total value locked in contract',
                          'Number of previous interactions',
                          'Community reputation (audits, media)',
                          'Domain age and SSL certificate'
                        ].map((signal, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{signal}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-emerald-400 font-semibold">
                        ✓ Not a subjective opinion — based on verifiable on-chain and off-chain data
                      </p>
                    </div>
                  )
                },
                {
                  title: '2. Human-Readable Transaction Summary',
                  type: 'innovation',
                  content: (
                    <div className="space-y-4">
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <p className="text-red-300 font-semibold mb-2">❌ Instead of:</p>
                        <code className="text-xs mono text-red-400 break-all">
                          approve(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D, 115792089237316195423570985008687907853269984665640564039457584007913129639935)
                        </code>
                      </div>
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                        <p className="text-green-300 font-semibold mb-2">✓ Show:</p>
                        <p className="text-lg text-green-400 font-semibold">
                          "You're giving Uniswap permission to access your USDC (unlimited amount)"
                        </p>
                      </div>
                    </div>
                  )
                },
                {
                  title: '3. Outcome Simulation',
                  type: 'innovation',
                  content: (
                    <div className="space-y-4">
                      <p className="text-slate-300 leading-relaxed">
                        Before users confirm, show them a "Before & After" comparison of their wallet state:
                      </p>
                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Zap className="w-5 h-5 text-blue-400" />
                          <span className="font-semibold text-blue-300">After this transaction</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <div className="text-xs text-slate-400 mb-1">USDC Balance</div>
                            <div className="text-2xl font-bold">500 → 400</div>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <div className="text-xs text-slate-400 mb-1">ETH Balance</div>
                            <div className="text-2xl font-bold">1.2 → 1.231</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: '4. Adaptive Detail Levels',
                  type: 'innovation',
                  content: (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">▸</span>
                        <div>
                          <strong className="text-green-300">Beginner Mode:</strong>
                          <span className="text-slate-300"> Simple language, essential info only, educational tooltips</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">▸</span>
                        <div>
                          <strong className="text-blue-300">Advanced Mode:</strong>
                          <span className="text-slate-300"> Full contract data, gas estimation breakdown, function signatures</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-purple-400 mt-1">▸</span>
                        <div>
                          <strong className="text-purple-300">Auto-detection:</strong>
                          <span className="text-slate-300"> System learns user expertise over time</span>
                        </div>
                      </div>
                    </div>
                  )
                }
              ].map((section, i) => (
                <div key={i} className="glass-strong rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-all"
                  >
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      {section.type === 'innovation' && (
                        <span className="px-2 py-1 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-bold">
                          INNOVATION
                        </span>
                      )}
                      {section.title}
                    </h3>
                    {expandedSections[section.title] ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  {expandedSections[section.title] && (
                    <div className="px-6 pb-6 pt-0 border-t border-white/10">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Demos Tab */}
        {activeTab === 'demos' && (
          <div className="space-y-8 animate-in">
            <div>
              <h2 className="text-4xl font-bold mb-4 gradient-text">Interactive Demos</h2>
              <p className="text-slate-300 text-lg mb-8">
                Experience the trust-first approval system in action across three critical scenarios.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  id: 'trusted',
                  title: 'Trusted Transaction',
                  subtitle: 'Uniswap Token Swap',
                  score: 94,
                  scoreLabel: 'HIGH TRUST',
                  color: 'green',
                  icon: CheckCircle
                },
                {
                  id: 'warning',
                  title: 'Risky Approval',
                  subtitle: 'Unlimited Token Access',
                  score: 42,
                  scoreLabel: 'PROCEED WITH CAUTION',
                  color: 'yellow',
                  icon: AlertTriangle
                },
                {
                  id: 'danger',
                  title: 'Phishing Attack',
                  subtitle: 'Malicious Contract',
                  score: 8,
                  scoreLabel: 'HIGH RISK',
                  color: 'red',
                  icon: XCircle
                }
              ].map((demo, i) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`glass-strong rounded-2xl p-6 text-left hover-lift transition-all ${
                    activeDemo === demo.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    demo.color === 'green' ? 'bg-green-500/20 text-green-400' :
                    demo.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    <demo.icon className="w-6 h-6" />
                  </div>
                  <div className={`text-3xl font-bold mb-1 ${
                    demo.color === 'green' ? 'text-green-400' :
                    demo.color === 'yellow' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {demo.score}
                  </div>
                  <div className="text-xs text-slate-400 mb-3 mono">{demo.scoreLabel}</div>
                  <h3 className="text-lg font-bold mb-1">{demo.title}</h3>
                  <p className="text-sm text-slate-400">{demo.subtitle}</p>
                </button>
              ))}
            </div>

            {/* Demo Display */}
            {activeDemo && (
              <div className="flex justify-center">
                <TransactionMockup scenario={activeDemo} />
              </div>
            )}

            {!activeDemo && (
              <div className="glass-strong rounded-2xl p-12 text-center">
                <Zap className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                <p className="text-slate-300 text-lg">
                  Select a scenario above to see the interactive demo
                </p>
              </div>
            )}
          </div>
        )}

        {/* Design Decisions Tab */}
        {activeTab === 'decisions' && (
          <div className="space-y-8 animate-in">
            <div>
              <h2 className="text-4xl font-bold mb-4 gradient-text">Design Decisions & Rationale</h2>
              <p className="text-slate-300 text-lg mb-8">
                Every design choice balances user safety with Web3's core principle: user sovereignty.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Trust Score Front and Center',
                  why: "Users need an immediate signal before processing any details. The trust score acts as a 'gut check' that mirrors how humans naturally assess risk.",
                  how: 'Calculated from verifiable, objective data sources (on-chain analytics, security audits, community reports). Not a black box — users can tap to see exactly how the score is calculated.',
                  balance: 'We show the score prominently but always provide the raw data. Users maintain agency and can override the score if they understand the risks.',
                  color: 'blue'
                },
                {
                  title: 'Plain Language First, Technical Details Available',
                  why: 'The average user doesn\'t know Solidity or what "approve(address,uint256)" means. They need to understand "what happens" not "how the code works."',
                  how: 'We parse smart contract interactions and translate them into human actions: "Swap," "Approve," "Send," "Stake," etc.',
                  balance: 'Full technical details are one tap away, maintaining transparency without overwhelming beginners.',
                  color: 'green'
                },
                {
                  title: 'Outcome Simulation (Before/After)',
                  why: 'People understand consequences better when visualized. "Your USDC will go from 500 to 400" is clearer than "You\'re sending 100 USDC."',
                  how: 'Shows balance changes, permission grants ("Uniswap can now access your DAI"), NFT transfers, and future state changes.',
                  balance: 'Borrowed from online banking confirmations — a familiar pattern that builds confidence.',
                  color: 'purple'
                },
                {
                  title: 'Contextual Risk Indicators',
                  why: 'Different transactions carry different risks. A simple send is lower risk than an unlimited token approval.',
                  how: '✓ Green = Safe, ! Orange = Caution, ✕ Red = Danger. Color and icons work together for accessibility.',
                  balance: 'Each warning explains WHY it matters and often suggests a safer alternative.',
                  color: 'orange'
                },
                {
                  title: 'Suggested Safer Alternatives',
                  why: "Users often don't know better options exist. Instead of just warning, we suggest actionable alternatives.",
                  how: 'Examples: "Approve only 100 USDT instead of unlimited" or "Set a spending limit of $500 per transaction"',
                  balance: 'Educates users on best practices without blocking them.',
                  color: 'cyan'
                },
                {
                  title: 'No False Confidence',
                  why: 'We never hide that Web3 is permissionless and risky. Even high trust scores include disclaimers.',
                  how: 'Honest language: "This appears safe based on available data" not "This is 100% safe."',
                  balance: 'Building false confidence leads to bigger losses later. Users must understand they\'re ultimately responsible.',
                  color: 'red'
                }
              ].map((decision, i) => (
                <div 
                  key={i}
                  className={`glass-strong rounded-2xl p-6 border-l-4 border-${decision.color}-500`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <h3 className="text-2xl font-bold mb-4">{decision.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-bold text-blue-400 mono">WHY</span>
                      <p className="text-slate-300 mt-1 leading-relaxed">{decision.why}</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-green-400 mono">HOW</span>
                      <p className="text-slate-300 mt-1 leading-relaxed">{decision.how}</p>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-purple-400 mono">BALANCE</span>
                      <p className="text-slate-300 mt-1 leading-relaxed">{decision.balance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-strong rounded-2xl p-8 border-t-4 border-gradient-to-r from-blue-500 to-purple-500">
              <h3 className="text-2xl font-bold mb-4">Balancing Safety and Decentralization</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    What We DON'T Do (Staying Decentralized)
                  </h4>
                  <div className="space-y-2 text-slate-300">
                    <p className="flex items-start gap-2">
                      <span className="text-red-400">×</span>
                      <span>Block transactions</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-red-400">×</span>
                      <span>Maintain centralized blocklists</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-red-400">×</span>
                      <span>Require KYC or approval</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-red-400">×</span>
                      <span>Use proprietary risk scoring</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    What We DO (Enhancing Safety)
                  </h4>
                  <div className="space-y-2 text-slate-300">
                    <p className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Aggregate public data</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Transparent scoring</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>User sovereignty preserved</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Open source signals</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 glass mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <p className="text-slate-400 text-sm">
              © 2026 Web3 Trust Protocol • Designed for <span className="gradient-text font-semibold">Anthropic Design Challenge</span>
            </p>
            <div className="flex gap-4">
              <button className="text-slate-400 hover:text-slate-200 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Transaction Mockup Component
const TransactionMockup = ({ scenario }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const scenarios = {
    trusted: {
      trustScore: 94,
      trustLabel: 'HIGH TRUST',
      trustColor: 'green',
      glowClass: 'trust-glow-green',
      action: 'Swap 100 USDC for ~0.031 ETH',
      platform: 'Uniswap V3',
      verified: true,
      gasCost: '$3.24',
      beforeAfter: [
        { token: 'USDC', before: '500', after: '400' },
        { token: 'ETH', before: '1.2', after: '1.231' }
      ],
      risks: [
        {
          type: 'safe',
          icon: CheckCircle,
          title: 'Safe Contract',
          description: 'Used by 2.3M users, audited by Trail of Bits'
        }
      ],
      buttons: [
        { label: 'Reject', variant: 'secondary' },
        { label: 'Confirm', variant: 'primary' }
      ]
    },
    warning: {
      trustScore: 42,
      trustLabel: 'PROCEED WITH CAUTION',
      trustColor: 'yellow',
      glowClass: 'trust-glow-yellow',
      action: 'Approve UNLIMITED access to your USDT',
      platform: 'DeFiYieldBoost',
      verified: false,
      gasCost: '$2.10',
      contractAge: 'Created 12 days ago',
      risks: [
        {
          type: 'warning',
          icon: AlertTriangle,
          title: 'Unlimited Token Approval',
          description: 'This contract can spend all your USDT anytime'
        },
        {
          type: 'warning',
          icon: AlertTriangle,
          title: 'New & Unverified',
          description: 'Source code not verified, no audit found'
        }
      ],
      suggestion: {
        title: 'Safer Alternative',
        description: 'Approve only the amount you need right now instead of unlimited access.'
      },
      buttons: [
        { label: 'Reject', variant: 'secondary' },
        { label: 'Set Custom Limit', variant: 'primary' }
      ]
    },
    danger: {
      trustScore: 8,
      trustLabel: 'HIGH RISK - DO NOT PROCEED',
      trustColor: 'red',
      glowClass: 'trust-glow-red',
      action: 'Sign a message for wallet-connect-security.com',
      platform: 'Unknown',
      verified: false,
      risks: [
        {
          type: 'danger',
          icon: XCircle,
          title: 'Suspected Phishing Site',
          description: 'Domain created 3 days ago, mimics WalletConnect'
        },
        {
          type: 'danger',
          icon: XCircle,
          title: 'Signature Could Drain Wallet',
          description: 'This message grants full control of your assets'
        },
        {
          type: 'danger',
          icon: XCircle,
          title: 'Reported by Community',
          description: '47 scam reports in the last 24 hours'
        }
      ],
      alert: {
        title: 'We strongly recommend rejecting this transaction.',
        description: "If you didn't initiate this action, your device may be compromised."
      },
      buttons: [
        { label: 'Reject & Report', variant: 'danger' }
      ]
    }
  };

  const data = scenarios[scenario];

  return (
    <div className="phone-mockup rounded-[40px] p-4 w-full max-w-[400px] animate-in">
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-[32px] overflow-hidden">
        {/* Status Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 flex items-center justify-between text-sm">
          <span className="mono">9:41</span>
          <span className="font-semibold">TrustWallet</span>
          <span className="mono">●●●●</span>
        </div>

        {/* Screen Content */}
        <div className="p-6 min-h-[600px] flex flex-col">
          {/* Trust Score */}
          <div className={`rounded-2xl p-6 mb-6 text-center ${data.glowClass} ${
            data.trustColor === 'green' ? 'bg-gradient-to-br from-green-600 to-green-700' :
            data.trustColor === 'yellow' ? 'bg-gradient-to-br from-yellow-600 to-orange-600' :
            'bg-gradient-to-br from-red-600 to-red-700'
          }`}>
            <div className="text-6xl font-bold mb-2">{data.trustScore}</div>
            <div className="text-sm font-bold mono opacity-90">{data.trustLabel}</div>
          </div>

          {/* Transaction Summary */}
          <h3 className="text-xl font-bold mb-4">
            {scenario === 'danger' ? '⛔ Security Alert' : 'Transaction Summary'}
          </h3>

          <div className="space-y-3 mb-6">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-xs text-slate-400 mb-1 mono">YOU'RE ABOUT TO</div>
              <div className="font-semibold">{data.action}</div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-xs text-slate-400 mb-1 mono">
                {scenario === 'danger' ? 'REQUESTED BY' : 'ON PLATFORM'}
              </div>
              <div className="font-semibold flex items-center gap-2">
                {data.platform}
                {data.verified ? (
                  <span className="text-green-400 text-xs">✓ Verified</span>
                ) : (
                  <span className="text-red-400 text-xs">⚠️ Unverified</span>
                )}
              </div>
            </div>

            {data.gasCost && (
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-xs text-slate-400 mb-1 mono">ESTIMATED COST</div>
                <div className="font-semibold">{data.gasCost} in gas fees</div>
              </div>
            )}

            {data.contractAge && (
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-xs text-slate-400 mb-1 mono">CONTRACT AGE</div>
                <div className="font-semibold">{data.contractAge}</div>
              </div>
            )}
          </div>

          {/* Before/After Simulation */}
          {data.beforeAfter && (
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-3 text-blue-300 text-sm font-semibold">
                <Zap className="w-4 h-4" />
                After this transaction
              </div>
              <div className="grid grid-cols-2 gap-3">
                {data.beforeAfter.map((item, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-xs text-slate-400 mb-1">{item.token}</div>
                    <div className="font-bold text-lg">{item.before} → {item.after}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Risk Indicators */}
          <div className="space-y-3 mb-6">
            {data.risks.map((risk, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  risk.type === 'safe' ? 'bg-green-500/20 text-green-400' :
                  risk.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  <risk.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-1">{risk.title}</div>
                  <div className="text-xs text-slate-400">{risk.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Suggestion */}
          {data.suggestion && (
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
              <div className="font-semibold text-blue-300 mb-2">💡 {data.suggestion.title}</div>
              <p className="text-sm text-slate-300">{data.suggestion.description}</p>
            </div>
          )}

          {/* Alert */}
          {data.alert && (
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
              <div className="font-semibold text-red-300 mb-2">🚨 {data.alert.title}</div>
              <p className="text-sm text-slate-300">{data.alert.description}</p>
            </div>
          )}

          {/* Advanced Details Toggle */}
          {scenario === 'trusted' && (
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors mb-4 flex items-center gap-2"
            >
              {showAdvanced ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              {showAdvanced ? 'Hide' : 'Show'} Advanced Details
            </button>
          )}

          {showAdvanced && (
            <div className="space-y-2 mb-6 text-xs animate-in">
              <div className="bg-slate-800/50 rounded p-3 border border-slate-700">
                <div className="text-slate-400 mb-1">Contract Address</div>
                <div className="mono text-blue-400">0x7a25...2488D</div>
              </div>
              <div className="bg-slate-800/50 rounded p-3 border border-slate-700">
                <div className="text-slate-400 mb-1">Gas Limit</div>
                <div className="mono">180,000</div>
              </div>
              <div className="bg-slate-800/50 rounded p-3 border border-slate-700">
                <div className="text-slate-400 mb-1">Function</div>
                <div className="mono">swapExactTokensForETH</div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className={`flex gap-3 mt-auto ${data.buttons.length === 1 ? 'flex-col' : ''}`}>
            {data.buttons.map((button, i) => (
              <button
                key={i}
                className={`flex-1 py-4 rounded-xl font-bold transition-all hover-lift ${
                  button.variant === 'primary' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500' :
                  button.variant === 'danger'
                    ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600' :
                  'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3TrustDesign;