'use client'

import { useState } from 'react'
import { TrendingUp, Target, Users, DollarSign, BarChart3, MessageSquare, Search, Zap, ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react'

interface Message {
  role: 'user' | 'agent'
  content: string
  timestamp: Date
}

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [showChat, setShowChat] = useState(false)

  const services = [
    {
      id: 'meta-ads',
      icon: Target,
      title: 'Meta Ads Management',
      description: 'Facebook & Instagram advertising campaigns optimized for conversions and ROI',
      features: ['Audience targeting', 'A/B testing', 'Campaign optimization', 'Conversion tracking']
    },
    {
      id: 'google-ads',
      icon: Search,
      title: 'Google Ads',
      description: 'Search, Display & YouTube campaigns that drive qualified traffic and leads',
      features: ['Keyword research', 'PPC management', 'Quality score optimization', 'Conversion rate optimization']
    },
    {
      id: 'seo',
      icon: TrendingUp,
      title: 'SEO Services',
      description: 'Organic search optimization to rank higher and attract sustainable traffic',
      features: ['On-page SEO', 'Technical SEO', 'Link building', 'Content strategy']
    },
    {
      id: 'social-media',
      icon: MessageSquare,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across social platforms',
      features: ['Content creation', 'Community management', 'Social strategy', 'Influencer partnerships']
    },
    {
      id: 'lead-gen',
      icon: Users,
      title: 'Lead Generation',
      description: 'Systematic approach to attract and convert high-quality leads for your business',
      features: ['Landing page optimization', 'Lead magnets', 'Email marketing', 'CRM integration']
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Data-driven insights and reporting to measure ROI and optimize campaigns',
      features: ['Google Analytics setup', 'Custom dashboards', 'ROI tracking', 'Monthly reports']
    }
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = generateAgentResponse(inputValue)
      const agentMessage: Message = {
        role: 'agent',
        content: agentResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, agentMessage])
    }, 1000)

    setInputValue('')
  }

  const generateAgentResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes('meta') || lowerQuery.includes('facebook') || lowerQuery.includes('instagram')) {
      return `Great! Let's discuss your Meta Ads strategy. Here's my recommended approach:\n\n1. **Audience Analysis**: Define your target demographics, interests, and behaviors\n2. **Campaign Structure**: Create separate campaigns for awareness, consideration, and conversion\n3. **Budget Allocation**: I recommend starting with $30-50/day for testing, then scaling winners\n4. **Creative Strategy**: Test 3-5 ad variations with different messaging and visuals\n5. **Optimization**: Focus on Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS)\n\nExpected Results: Within 30 days, aim for 3-5x ROAS with proper optimization.\n\nWould you like me to create a detailed campaign plan for your specific business?`
    }

    if (lowerQuery.includes('google') || lowerQuery.includes('ppc') || lowerQuery.includes('search ads')) {
      return `Excellent choice! Google Ads can drive immediate qualified traffic. Here's your action plan:\n\n1. **Keyword Research**: Identify 20-30 high-intent keywords with good search volume\n2. **Campaign Structure**: Organize by product/service categories with tight ad groups\n3. **Bidding Strategy**: Start with Manual CPC, then transition to Target CPA/ROAS\n4. **Ad Copy**: Write compelling headlines with clear CTAs and unique value propositions\n5. **Landing Pages**: Ensure 1:1 message match between ads and landing pages\n\nBudget Recommendation: $1,500-3,000/month minimum for meaningful data.\n\nExpected Timeline: See initial results in 2-3 weeks, optimization kicks in at 30-60 days.\n\nWhat's your current monthly budget for Google Ads?`
    }

    if (lowerQuery.includes('seo') || lowerQuery.includes('ranking') || lowerQuery.includes('organic')) {
      return `SEO is a long-term investment that delivers sustainable growth. Here's my strategic roadmap:\n\n**Phase 1 (Month 1-2): Foundation**\n- Technical SEO audit and fixes\n- Keyword research and content gap analysis\n- On-page optimization for priority pages\n\n**Phase 2 (Month 3-4): Content & Authority**\n- Create 8-12 high-quality blog posts/pages\n- Build 10-15 quality backlinks\n- Optimize for featured snippets\n\n**Phase 3 (Month 5-6): Scale & Optimize**\n- Expand to long-tail keywords\n- Content refresh and updates\n- Local SEO optimization\n\n**Expected Results**: 40-60% organic traffic increase within 6 months, 100%+ within 12 months.\n\nWhat's your primary business goal with SEO?`
    }

    if (lowerQuery.includes('lead') || lowerQuery.includes('conversion') || lowerQuery.includes('sales')) {
      return `Let's build a high-converting lead generation system. Here's the framework:\n\n**1. Lead Magnet Creation**\n- Free guide, checklist, or consultation offer\n- Must provide immediate value to your ideal customer\n\n**2. Landing Page Optimization**\n- Clear headline that speaks to pain points\n- 3-5 benefit bullets\n- Single strong CTA\n- Social proof (testimonials, case studies)\n\n**3. Traffic Sources**\n- Paid: Meta Ads + Google Ads for quick results\n- Organic: SEO + Content marketing for long-term\n\n**4. Nurture Sequence**\n- 5-7 email follow-up sequence\n- Mix of value and sales content\n- Clear path to booking/purchasing\n\n**Typical Results**: 3-8% conversion rate on cold traffic, 15-25% on warm traffic.\n\nWhat's your average customer lifetime value? This helps me optimize your cost per lead.`
    }

    if (lowerQuery.includes('roi') || lowerQuery.includes('budget') || lowerQuery.includes('cost')) {
      return `ROI is the #1 priority. Let me break down realistic expectations:\n\n**Meta Ads**: 3-5x ROAS average (spend $1, make $3-5)\n**Google Ads**: 2-4x ROAS for search, 1.5-3x for display\n**SEO**: 5-10x ROI long-term (12+ months)\n**Email Marketing**: 38:1 average ROI\n\n**Budget Allocation Strategy**:\n- 40% Google Ads (fastest results)\n- 35% Meta Ads (scale and retargeting)\n- 15% SEO (long-term asset)\n- 10% Testing/other channels\n\n**Timeline to Profitability**:\n- Week 1-2: Data gathering, expect negative ROI\n- Week 3-4: Break even to 1.5x ROAS\n- Month 2+: Scale profitable campaigns to 3-5x\n\nWhat's your monthly marketing budget? I'll create a custom allocation plan.`
    }

    if (lowerQuery.includes('social media') || lowerQuery.includes('content') || lowerQuery.includes('brand')) {
      return `Let's build a social media strategy that drives real business results:\n\n**Platform Priority** (based on B2C/B2B focus):\n- **B2C**: Instagram > TikTok > Facebook > LinkedIn\n- **B2B**: LinkedIn > Twitter > Instagram > Facebook\n\n**Content Strategy**:\n- 40% Educational (how-to, tips, industry insights)\n- 30% Engaging (polls, questions, trending topics)\n- 20% Product/Service promotion\n- 10% Company culture/behind-scenes\n\n**Posting Frequency**:\n- Instagram: 4-7 posts/week + daily Stories\n- LinkedIn: 3-5 posts/week\n- Facebook: 3-5 posts/week\n- TikTok: 5-10 posts/week (if relevant)\n\n**Growth Tactics**:\n- Hashtag strategy (mix of high/medium/low competition)\n- Engagement pods and community building\n- Collaborations and influencer partnerships\n- Paid social to boost top performers\n\n**Expected Growth**: 20-40% follower increase per month with consistent effort.\n\nWhat platforms are you currently active on?`
    }

    // Default response
    return `Thank you for reaching out! I'm here to help you grow your business through strategic digital marketing.\n\nI specialize in:\n✓ Meta Ads & Google Ads management\n✓ SEO and organic growth\n✓ Social media marketing\n✓ Lead generation systems\n✓ Performance tracking and optimization\n\n**To give you the best recommendation, tell me:**\n1. What's your primary business goal? (more sales, brand awareness, leads?)\n2. What's your monthly marketing budget?\n3. What have you tried before?\n\nI'll create a customized strategy focused on ROI and real results.`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Digital Marketing Agent</h1>
                <p className="text-sm text-slate-600">ROI-Focused Growth Strategies</p>
              </div>
            </div>
            <button
              onClick={() => setShowChat(!showChat)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-600/30"
            >
              <MessageSquare className="h-5 w-5" />
              Get Strategy
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="h-4 w-4" />
            Professional Marketing Solutions
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Drive Real Business Growth with
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> Data-Driven Marketing</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            From Meta Ads to SEO, we plan, execute, and optimize campaigns that deliver measurable ROI.
            Simple strategies, powerful results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: DollarSign, value: '3-5x', label: 'Average ROAS' },
            { icon: Users, value: '500+', label: 'Leads Generated' },
            { icon: TrendingUp, value: '150%', label: 'Growth Rate' },
            { icon: Target, value: '92%', label: 'Client Satisfaction' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
              <stat.icon className="h-8 w-8 text-blue-600 mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              const isActive = activeService === service.id

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'border-blue-600 shadow-xl shadow-blue-600/20'
                      : 'border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                  }`}
                  onClick={() => setActiveService(isActive ? null : service.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${isActive ? 'rotate-180' : ''}`} />
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-slate-600 mb-4">{service.description}</p>

                  {isActive && (
                    <div className="space-y-2 pt-4 border-t border-slate-200">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setShowChat(true)
                          setInputValue(`I'm interested in ${service.title}`)
                        }}
                        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">How We Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your business goals and current performance' },
              { step: '02', title: 'Strategy', desc: 'Create customized marketing plan with ROI projections' },
              { step: '03', title: 'Execution', desc: 'Launch campaigns and implement optimization tactics' },
              { step: '04', title: 'Optimize', desc: 'Continuous testing and scaling of winning campaigns' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      {showChat && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col z-50">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Marketing Strategy Chat</h4>
                <p className="text-blue-100 text-xs">Get personalized advice</p>
              </div>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="bg-blue-50 rounded-xl p-6 mb-4">
                  <Zap className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <p className="text-slate-700 font-medium mb-2">Hi! I'm your Digital Marketing Agent</p>
                  <p className="text-sm text-slate-600">Ask me about Meta Ads, Google Ads, SEO, lead generation, or any marketing strategy!</p>
                </div>
                <div className="space-y-2">
                  {['How do I start with Meta Ads?', 'What\'s a good marketing budget?', 'Help me generate more leads'].map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInputValue(q)}
                      className="w-full text-left px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-sm text-slate-700 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-xl p-3 ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-900'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.role === 'user' ? 'text-blue-100' : 'text-slate-500'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about marketing strategies..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="h-6 w-6" />
              <span className="text-xl font-bold">Digital Marketing Agent</span>
            </div>
            <p className="text-slate-400 mb-6">Professional marketing strategies that deliver real ROI</p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <span>Meta Ads</span>
              <span>•</span>
              <span>Google Ads</span>
              <span>•</span>
              <span>SEO</span>
              <span>•</span>
              <span>Lead Generation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
